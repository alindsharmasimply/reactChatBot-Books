import express from 'express';
const router = express.Router();
import DFCtrl from '../controllers/dialogFlow.controller.js';

router.get('/', DFCtrl.api);
router.post('/df_text_query', DFCtrl.apiTextQuery);
router.post('/df_event_query', DFCtrl.apiEventQuery);

export default router;