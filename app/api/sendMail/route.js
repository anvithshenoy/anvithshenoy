import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
    });
  }

  try {
    await sendgrid.send({
      to: "anvithshenoyb@gmail.com",
      from: "hello@anvithshenoy.cloud",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f9fafb;
                color: #333;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              }
              h2 {
                font-size: 24px;
                margin-bottom: 20px;
                color: #007bff;
              }
              p {
                font-size: 16px;
                line-height: 1.5;
                margin-bottom: 10px;
                color: #555;
              }
              .info {
                margin-top: 20px;
              }
              .footer {
                margin-top: 30px;
                font-size: 12px;
                text-align: center;
                color: #aaa;
              }
              .footer a {
                color: #007bff;
                text-decoration: none;
              }
              .footer a:hover {
                text-decoration: underline;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>New Form Submission</h2>
              <div class="info">
                <p>You got a new message from <strong><a href="mailto:${email}">${name}</a></strong>:</p>
                <p>${message}</p>
              </div>
              <div class="footer">
                <p>This email was generated automatically. Please do not reply.</p>
                <p>If you have any questions, feel free to <a href="mailto:hello@anvithshenoy.cloud">contact us</a>.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return new Response(
      JSON.stringify({ success: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Failed to send email: ${error.message}` }),
      { status: 500 },
    );
  }
}
