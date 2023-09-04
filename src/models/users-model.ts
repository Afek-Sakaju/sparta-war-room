import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide a username.'],
    unique: [true, 'This username is already taken.'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },
});

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(12);
    const plaintextPassword: string = this.password ?? '';
    const hashed = bcrypt.hashSync(plaintextPassword, salt);

    this.password = hashed;
  }
  done();
});

export const UserModel = mongoose.model('user', userSchema);
