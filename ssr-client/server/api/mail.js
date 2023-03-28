import { MailtrapClient } from "mailtrap"

export default defineEventHandler(async event => {

    const { mailtrap_api, mailtrap_token, hcaptcha_secret } = useRuntimeConfig()

    const body = await readBody(event)
    const TOKEN = mailtrap_token;
    const ENDPOINT = mailtrap_api;

    const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

    const recipients = [
        { email: "lkr97km@hotmail.dk"},
        { email: "dirt3forfree@hotmail.com"},
    ];

    const sender = {
        email: "mailtrap@koldfestival.dk",
        name: "Koldfestival formular",
    };

    try {
        client
            .send({
                from: sender,
                to: recipients,
                subject: `Formular fra ${body.firstName}`,
                html: `
                    <!doctype html>
                    <html>
                    <head>
                        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                    </head>
                    <body style="font-family: sans-serif;">
                        <div style="display: block; margin: auto; max-width: 600px;" class="main">
                        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Ny indsendelse fra kontakt formular!</h1>
                        <p>${body.message}</p>
                        <p><strong>Besvar på følgende email:</strong></p>
                        <p>${body.sender}</p>
                        </div>
                    </body>
                    </html>
                `,
                category: "Kontakt formular",
                })

        return {
            status: 200,
            response: 'Tak for din besked! Vi svarer hurtigst muligt'
        }

    } catch(err) {
        console.log(err)
        return err
    }
})