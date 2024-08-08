'use strict';

import express from 'express';
import * as saltMessageController from './salt-message.controller';

const router = express.Router({ mergeParams: true });

router.get('/get-secret/:token', saltMessageController.getSecret);

router.post('/save-secret', saltMessageController.saveSecret);

export default router;
