import express from 'express';

import saltMessageModule from './salt-message/salt-message.module';

const router = express.Router();

router.use(saltMessageModule);

export default router;
