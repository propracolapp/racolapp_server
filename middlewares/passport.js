import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Users from "../models/Users";
require("dotenv").config();

passport.use(
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password"
		},
		async (email, password, next) => {
			const user = await Users.findOne({ where: { email } });
			if (!user) {
				return next("User is undefined");
			}
			if (!(await user.checkPassword(password))) {
				return next("password incorrect");
			}
			return next(false, user);
		}
	)
);

passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.Token
		},
		async (jwtPayload, next) => {
			try {
				const user = await Users.findOne({ where: { id: jwtPayload.id } });
				if (!user) {
					return next("User doesn't exist");
				}
				return next(false, user);
			} catch (err) {
				return next(err.message);
			}
		}
	)
);
