import nodemailer from 'nodemailer';
import { MailAdapter, SendmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "15cca27839abd1",
      pass: "f6cbfded4cc651"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendmailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Arthur Timoteo <destinatario@email.com>',
            subject,
            html: body
        });
    }
}