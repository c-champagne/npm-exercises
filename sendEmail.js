const nodemailer = require("nodemailer");

async function main() {
    /* let testAccount = await nodemailer.createTestAccount(); */
    let transporter = nodemailer.createTransport({
        service: "gmail",
      /*   host: "smtp.ethereal.email", This is the Ethereal info
        port: 587,
        secure: false, */
        auth: {
            user: "cassielchampagne@gmail.com",
            pass: "YOURPWHERE" //used real PW but removed, could not get temp app password setting to work
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