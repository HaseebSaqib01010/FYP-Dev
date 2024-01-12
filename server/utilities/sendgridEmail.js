const nodemailer = require('nodemailer');
let { emailVerifyTemplate, forgotPasswordTemplate } = require('./emailTemplate');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'sp20-bcs-128@cuilahore.edu.pk',
    // clientId: ' 756946341802-argagun5vdtvnlhcfilbbf4b0j7sep78.apps.googleusercontent.com',
    clientId: '    1015917105148-8k68q2ogprokpcgtgbn386opa07cspiu.apps.googleusercontent.com',
    // clientSecret: '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',
    clientSecret: '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',
    // accessToken: "ya29.a0AfB_byDYbHRYAiKg4be98BRBaXXAQ0PaU-y9zXfciMDZX2aAGrmTZDrRm4OLNMDdGzkD6h-NpxMUoo7RNpyNRYMIDgiA2gM4jdQoEwgp2krfLa9_eDpc-AwzzFjbHDtX8yxpD-ARGKo887paOvEiGk2MmhFxKGWqxzsxaCgYKAXwSARMSFQHGX2Mi4V0v2aL3xvH3SQMT4X_OiQ0171",
    // refreshToken: '1//04IhaWLfYiZ_UCgYIARAAGAQSNwF-L9IrnATtea8fIQVGsPhc7gv82HHUGOsO5fi409vnxxpkCnZUsIFEJuZfRa2KLfMvqOaA_6U',
    access_token: "ya29.a0AfB_byB648Wzu92WXGPaK8X7lKk3MpVL-QDm_6zpvws6A1VsmF2fXrsKz1JA9Ewvqif13n-kuuC5wR_l528KyjQLPBj_K3TdXUvZVUDFIrYdN2wVci3UlEq4p5L5n09LInb239zHMCyh0gNvyizHCWUbrZxmElQeTNGSaCgYKAcsSARISFQHGX2MiVCzu-HCKfMMVz1fvTIgZRA0171",
    refreshToken:"1//04sCcFusNh3J2CgYIARAAGAQSNwF-L9Irze7M_OP9D2mtMhUSfvzAmYfvcVbnR6Ktii5Tbvc2raXm8GKjsVNIEJv8L7vMRwrndRo"

  }
});

const sendEmailOtpMail = async (user) => {
  const mailOptions = {
    from: 'noreply@easyoz.com.au',
    to: user.email,
    subject: 'Email Verification',
    text: 'Email Verification',
    
    html: emailVerifyTemplate(user)
  };
  console.log('mail options::::::', mailOptions)
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendEmailOtpMail };
