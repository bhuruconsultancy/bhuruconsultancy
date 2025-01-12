import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Add contact to a separate list for enquiries
    try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_ENQUIRIES_LIST_ID, {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name,
          PHONE: phone,
          MESSAGE: message,
        },
      });

      // Send notification email using Mailchimp Transactional (formerly Mandrill)
      const response = await fetch('https://' + process.env.MAILCHIMP_SERVER_PREFIX + '.api.mailchimp.com/3.0/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            from_email: 'noreply@bhuruconsultancy.co.zw',
            to: [{ email: 'bhuruconsultancy@gmail.com' }],
            subject: 'New Enquiry from Website',
            html: `
              <h2>New Enquiry Details:</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            `,
          },
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send notification email');
      }

      return Response.json(
        { message: 'Your enquiry has been submitted successfully!' },
        { status: 200 }
      );
    } catch (error) {
      console.error('Mailchimp error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Enquiry submission error:', error);
    return Response.json(
      { error: 'An error occurred while submitting your enquiry.' },
      { status: 500 }
    );
  }
}