import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
        email_address: email,
        status: 'subscribed',
      });

      return Response.json(
        { message: 'Successfully subscribed to the newsletter!' },
        { status: 200 }
      );
    } catch (error) {
      if (error.response?.body?.title === 'Member Exists') {
        return Response.json(
          { error: 'You are already subscribed to our newsletter.' },
          { status: 400 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return Response.json(
      { error: 'An error occurred while subscribing to the newsletter.' },
      { status: 500 }
    );
  }
}