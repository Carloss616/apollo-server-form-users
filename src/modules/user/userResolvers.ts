import userModel from './userModel';

type AddUserArgs = {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    note: string;
  };
};

type UserQueryArgs = {
  _id: string;
};

type DeleteUserArgs = {
  _id: string;
};

export default {
  Query: {
    user: async (root, { _id }: UserQueryArgs, context) => {
      const user = await userModel.findOne({ _id });

      if (!user) {
        throw new Error('User not found');
      }

      return user;
    },
    users: async () => await userModel.find(),
  },
  Mutation: {
    addUser: async (root, { user }: AddUserArgs, context) => {
      const userFound = await userModel.findOne({ email: user.email });

      if (userFound) throw new Error('This email is already in use');

      const newUser = new userModel(user);

      await newUser.save();

      return newUser;
    },
    deleteUser: async (root, { _id }: DeleteUserArgs, context) => {
      const user = await userModel.findOneAndRemove({ _id });

      return _id;
    },
  },
};
