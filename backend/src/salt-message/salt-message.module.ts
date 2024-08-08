'use strict';

import express from 'express';

import apiRouter from './api/index';

const router = express.Router();

router.use(apiRouter);

export default router;
