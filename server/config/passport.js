import { Strategy as JwtStrategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import User from "../models/user.model";

export default passport => {
  const opts = {};
  opts.secretOrKey = process.env.SECRET;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ id: jwt_payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
