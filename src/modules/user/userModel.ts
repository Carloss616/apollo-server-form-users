import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  note: string;
}

const Schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    note: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

export default mongoose.model<User>('User', Schema);
