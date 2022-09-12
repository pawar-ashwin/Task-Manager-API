const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "17211a04h3@bvrit.ac.in",
    subject: "Welcome Mail!",
    text: `Thank you for signing up ${name}. Hope you will enjoy your Journey with us!`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "17211a04h3@bvrit.ac.in",
    subject: "Cancellation Email",
    text: `Thank you for being our customer ${name}. We regret if you faced any issue with us and let us know the issue if posible on our page!`,
  });
};

module.exports = {
  sendWelcomeMail,
  sendCancelEmail,
};
