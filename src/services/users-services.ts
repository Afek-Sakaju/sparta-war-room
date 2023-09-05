import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { JWT_ACCESS_PRIVATE_KEY } from '../utils';
import { UserModel } from '../models';
import type { User, UserDoc } from '../interfaces';

export async function getUserByUsername(username: string): Promise<UserDoc> {
  const userDoc: UserDoc = await UserModel.findOne({ username });
  return userDoc;
}

export async function registerUser(user: User): Promise<UserDoc> {
  const isExistingUser: UserDoc = await UserModel.findOne({
    username: user.username,
  });
  if (isExistingUser) return;

  const userData = new UserModel(user);
  const userDoc = (await userData.save()) as UserDoc;
  return userDoc;
}

export async function loginUser(
  username: string,
  password: string
): Promise<string> {
  const user: UserDoc = await getUserByUsername(username);
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password ?? ''
  );

  let accessToken = '';
  if (!!user && isPasswordCorrect) {
    accessToken = jwt.sign({ user }, JWT_ACCESS_PRIVATE_KEY, {
      expiresIn: '24h',
    });
  }

  return accessToken;
}
