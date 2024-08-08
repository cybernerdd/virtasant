import mongoose from 'mongoose';

interface ISaltMessage {
  secret?: string;
}

const { Schema } = mongoose;

export const schema = new Schema<ISaltMessage>(
  {
    secret: {
      type: String,
    },
  },
  { timestamps: true },
);

const model = mongoose.model<ISaltMessage>('SaltMessage', schema);

export default model;
