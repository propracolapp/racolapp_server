import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrateg, ExtractJwt } from "passport-jwt";
// import Users from "../models/Users";

passport.use(
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password"
		},
		(username, password, next) => {
			
		}
	)
);
