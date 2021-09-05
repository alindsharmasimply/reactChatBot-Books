import dialogflow from 'dialogflow';
import config from '../config/keys.js'
import structjson from '../structjson.js';

const projectID = config.googleProjectID

const credentials = {
    client_email = config.googleClientEmail,
    private_key = config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient(projectID , credentials);
// The path to identify the agent that owns the created intent.
const sessionPath = sessionClient.sessionPath(
  config.googleProjectID,
  config.dialogFlowSessionID
);

export default class DFCtrl {
    static async api(req, res, next) {
      try {
        res.send({'Hello': 'There'});
      } catch (error) {
        res.status(501).json({ error: error.message });
      }
    }
    static async apiTextQuery(req, res, next) {
        try {
            const request = {
                session: sessionPath,
                queryInput: {
                  text: {
                    text: req.body.text,
                    languageCode: config.dialogFlowSessionLanguageCode,
                  },
                },
                queryParams: {
                    payload: {
                        data: req.body.parameters
                    }
                }
              };
          const responses = await sessionClient.detectIntent(request);
          console.log(responses[0].queryResult)
          res.json(responses[0].queryResult);
        } catch (error) {
          res.status(501).json({ error: error.message });
        }
      }
      static async apiEventQuery(req, res, next) {
        try {
            const request = {
                session: sessionPath,
                queryInput: {
                  event: {
                    name: req.body.event,
                    parameters: structjson.jsonToStructProto(req.body.parameters),
                    languageCode: config.dialogFlowSessionLanguageCode,
                  },
                },
              };
          const responses = await sessionClient.detectIntent(request);
          console.log(responses[0].queryResult)
          res.json(responses[0].queryResult);
        } catch (error) {
          res.status(501).json({ error: error.message });
        }
      }
}