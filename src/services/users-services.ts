import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { accessPrivateKey } from '../app';
import { UserModel } from '../models';
import type { User } from '../interfaces';

export async function getUserByUsername(
  username: string
): Promise<User | undefined> {
  const userDoc: any = await UserModel.findOne({ username });

  return userDoc as unknown as User | undefined;
}

export async function registerUser(user: User): Promise<number> {
  const isExistingUser: User | undefined | null = await UserModel.findOne({
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
): Promise<any> {
  const user = (await getUserByUsername(username)) as User;
  const isPasswordCorrect = await bcrypt.compare(
    password,
    user?.password ?? ''
  );

  if (!!user && isPasswordCorrect) {
    const accessToken = jwt.sign({ user }, accessPrivateKey, {
      expiresIn: '24h',
    });

    return accessToken;
  }
}
