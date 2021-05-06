import dialogflow from 'dialogflow';
import { 
    dialogFlowSessionId, 
    dialogFlowSessionLanguageCode, 
    googleProjectId 
} from '../config/dev.js';

const projectId = googleProjectId;
const sessionId = dialogFlowSessionId;
const languageCode = dialogFlowSessionLanguageCode;
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

const textQuery = async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: req.body.text,
                languageCode,
            },
        },
    };
    
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    
    res.json(result);
}

const eventQuery = async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                name: req.body.event,
                languageCode,
            },
        },
    };
    
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    
    res.json(result);
}

export {
    textQuery,
    eventQuery,
}