import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User";

const localStrategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  verify
);

passport.use(localStrategy);

async function verify(username: string, password: string, done: any) {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      try {
        const newUser = await signUp(username, password);
        return done(null, newUser);
      } catch (error) {
        return done("An error occurred while signing up:");
      }
    }

    const match = await bcrypt.compare(password, user.dataValues.password);
    return match
      ? done(null, user)
      : done(null, false, { message: "Invalid password" });
  } catch (error) {
    return done(error);
  }
}

async function signUp(username: string, password: string) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

passport.serializeUser(function (user: any, cb) {
  process.nextTick(function () {
    cb(null, {
      id: user.id,
      username: user.username,
      requiredPackage: user.requiredPackage
    });
  });
});
passport.deserializeUser(function (user: any, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

export default passport;
