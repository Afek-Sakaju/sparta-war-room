import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { JWT_ACCESS_PRIVATE_KEY } from '../utils';
import { UserModel } from '../models';
import type { User, UserDoc } from '../interfaces';

export async function getUserByUsername(username: string): Promise<UserDoc> {
  const userDoc: UserDoc = await UserModel.findOne({ username });

  return userDoc;
}

export async function registerUser(user: User): Promise<number> {
  const isExistingUser: UserDoc = await UserModel.findOne({
    username: user.username,
  });
  if (isExistingUser) return 409;

  const userDoc = new UserModel(user);
  const result: any = await userDoc.save();
  return result ? 201 : 409;
}

export async function loginUser(
  username: string,
  password: string
): Promise<string | undefined> {
  const user: UserDoc = await getUserByUsername(username);
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password ?? ''
  );

  if (!!user && isPasswordCorrect) {
    const accessToken = jwt.sign({ user }, JWT_ACCESS_PRIVATE_KEY, {
      expiresIn: '24h',
    });

    return accessToken;
  }
}
