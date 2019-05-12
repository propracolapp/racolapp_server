import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import Users from "../models/Users";
require("dotenv").config();

passport.use(
	"local",
	new LocalStrategy(
		{
			pseudo: "username",
			password: "password",
			active: 1
		},
		async (pseudo, password, active, next) => {
			const user = await Users.findOne({ where: { pseudo, active: 1 } });
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
	"jwt",
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.Token
		},
		async (jwtPayload, next) => {
			try {
				const user = await Users.findOne({ where: { pseudo: jwtPayload.pseudo } });
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
