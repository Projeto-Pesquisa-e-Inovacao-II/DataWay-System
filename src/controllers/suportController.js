const nodemailer = require("nodemailer");

async function sendEmail(req, res) {
  try {
    console.log(req.body);
    // Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "suporte.dataway.contato@gmail.com",
        pass: "vjnd fqly eqjh svis",
      },
      logger: true,
      debug: true,
    });

    // Wrap in an async IIFE so we can use await.
    const info = await transporter.sendMail({
      from: req.body.email,
      to: '"Suporte Dataway" <suporte.dataway.contato@gmail.com>',
      subject: req.body.userName + " - " + req.body.telefone, // Subject line
      text: req.body.mensagem, // plain‑text body
      html: req.body.html || "", // HTML body
    });

    console.log("Message sent:", info.messageId);

    res.status(200).json({
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("erro ao enviar email:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
      details: error.message,
    });
  }
}
module.exports = {
  sendEmail,
};
