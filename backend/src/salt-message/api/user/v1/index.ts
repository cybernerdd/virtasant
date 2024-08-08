'use strict';

import express from 'express';

import saltMessageRouter from './salt-message.route';

const router = express.Router();

router.use(`/salt-message`, saltMessageRouter);

export default router;
