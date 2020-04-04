const nodemailer = require("nodemailer");

async function main() {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass
        }
    });
    let info = await transporter.sendMail({
        from: 'cassielchampagne@gmail.com',
        to: "cassielchampagne@gmail.com",
        subject: "This is a test",
        text: "This is test text in body",
        html:"<b>This is test text in body</b>"
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);