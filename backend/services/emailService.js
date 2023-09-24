import nodemailer from "nodemailer";

export const sendVerificationEmail = async (email, token) => {
  console.log(
    `Préparation de l'envoi de l'e-mail à ${email} avec le token ${token}`,
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const url = `${process.env.URL_FRONT}/verify/${token}`;

  try {
    await transporter.sendMail({
      to: email,
      subject: "Vérification de l'Email",
      html: `Cliquez <a href="${url}">ici</a> pour vérifier votre email.`,
    });
    console.log("E-mail envoyé avec succès !");
  } catch (error) {
    console.log("Erreur lors de l'envoi de l'e-mail :", error);
  }
};

export const sendResetPasswordEmail = async (user, resetToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "no-reply@votreapp.com",
    to: user.email,
    subject: "Réinitialisation du mot de passe",
    text: `Cliquez sur ce lien pour réinitialiser votre mot de passe : ${process.env.URL_FRONT}/reset-password/${resetToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("E-mail de réinitialisation envoyé avec succès !");
  } catch (error) {
    console.log(
      "Erreur lors de l'envoi de l'e-mail de réinitialisation :",
      error,
    );
  }
};
