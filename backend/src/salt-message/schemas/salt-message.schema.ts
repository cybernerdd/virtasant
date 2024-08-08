'use strict';

import joi from 'joi';

export interface ISaveSaltMessageSchema {
  secret: string;
  expiresIn: string;
}

export const saveSaltMessageSchema = joi.object({
  secret: joi.string().required(),
  expiresIn: joi.string().required(),
});
