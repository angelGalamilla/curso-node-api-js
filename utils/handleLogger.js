const {IncomingWebhook} = require("@slack/webhook")

const webHook = new IncomingWebhook(process.env.SLACK_WEBHOOK)

const loggerStream = {
  write: message => {
    // do anything
    webHook.send({
      text: message
    })
    console.log('capturando el LOG', message)
  },
};

module.exports = loggerStream;