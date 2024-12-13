import nodemailer from "nodemailer";

// Simple email validation function using regular expression
function emailValidation(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function sendEmail(email: string): void {
    if (!emailValidation(email)) {
        console.log("Invalid email address.");
        return;
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Use an actual SMTP server
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "animemino19@gmail.com", // replace with your email
            pass: "0xapma2006@@@", // replace with your email password
        },
    });

    async function main() {
        const info = await transporter.sendMail({
            from: '"dealer" <animemino@gmail.com>',
            to: email, // recipient email
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // HTML body
        });

        console.log("Message sent: %s", info.messageId);
    }

    main().catch(console.error);
}

export { emailValidation, sendEmail };