import { Router } from 'express';

const router = Router();

import { textQuery, eventQuery } from '../controllers/dialogflow.js';

router.post('/dialogflow/textQuery', textQuery);
router.post('/dialogflow/eventQuery', eventQuery);

export default router;