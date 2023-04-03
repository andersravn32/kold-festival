import { MailtrapClient } from "mailtrap";
import { verify } from "hcaptcha";

export default defineEventHandler(async (event) => {
  const { mailtrap_api, mailtrap_token, hcaptcha_secret } = useRuntimeConfig();

  const body = await readBody(event);

  const captcha = await verify(hcaptcha_secret, body.captcha);
  if (!captcha.success) {
    return {
      status: 401,
      msg: "Udfyld venligst captcha",
    };
  }

  const TOKEN = mailtrap_token;
  const ENDPOINT = mailtrap_api;

  const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

  const sender = {
    email: "mailtrap@koldfestival.dk",
    name: "KOLD Festival - Forespørgsel",
  };

  try {
    const mail = await client.send({
      from: sender,
      to: body.receivers,
      subject: `Formular fra ${body.firstName}`,
      html: `
                    <!doctype html>
                    <html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    </head>
                    <body style="font-family: sans-serif;">
                        <div style="display: block; margin: auto; max-width: 600px;" class="main">
                        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Ny forespørgsel fra kontaktformular:</h1>
                        <p>${body.message}</p>
                        <p><strong>Besvar på følgende email:</strong></p>
                        <p>${body.sender}</p>
                        </div>
                    </body>
                    </html>
                `,
      category: "Kontakt formular",
    });

    if (!mail.success) {
      return {
        status: 500,
        msg: "Vi kunne ikke sende din forespørgsel i øjeblikket, prøv venligst igen senere!",
      };
    }

    return {
      status: 200,
      msg: "Tak for din besked! Vi svarer hurtigst muligt",
    };
  } catch (err) {
    console.log(err);
    return err;
  }
});
