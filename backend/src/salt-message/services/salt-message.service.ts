import SaltMessageModel from '../models/salt-message.model';
import { authentication } from '../../common/helpers';
import { JwtPayload } from 'jsonwebtoken';
import { LinkExpiredError } from '../../common/constants/errors';
import { ISaveSaltMessageSchema } from '../schemas/salt-message.schema';

interface ITokenDecoded extends JwtPayload {
  id?: string;
  secret?: string;
}

export const getSecret = async (token: string) => {
  const idData = (await authentication.verifyToken(
    token,
    process.env.JWT_SECRET || '',
  )) as ITokenDecoded;

  const secretFound = await SaltMessageModel.findById(idData.id);

  if (!secretFound) {
    throw new LinkExpiredError();
  }

  const secretData = (await authentication.verifyToken(
    secretFound?.secret || '',
    process.env.JWT_MESSAGE_SECRET || '',
  )) as ITokenDecoded;

  await secretFound?.deleteOne();

  return secretData.secret;
};

export const saveSecret = async (body: ISaveSaltMessageSchema) => {
  const newSecret = await new SaltMessageModel().save();

  const idEncoded = authentication.generateToken(
    { id: newSecret._id },
    process.env.JWT_SECRET || '',
    body.expiresIn,
  );

  const secretEncoded = authentication.generateToken(
    { secret: body.secret },
    process.env.JWT_MESSAGE_SECRET || '',
    body.expiresIn,
  );

  newSecret.secret = secretEncoded;

  await newSecret.save();

  const url = `${process.env.FRONTEND_URL}/${idEncoded}`;

  return url;
};
