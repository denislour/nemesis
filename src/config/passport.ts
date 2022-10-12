// import { Context, Next } from "koa";
// import passport from "koa-passport";
// import passportLocal from "passport-local";
// import User, { IUser } from "../models/user";
// import bcrypt from "bcryptjs";
// import { request } from "http";

// const LocalStrategy = passportLocal.Strategy;

// passport.use(
//   new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//     User.findOne({ where: { email: email.toLowerCase() } }).then((user) => {
//       if (!user) {
//         return done(undefined, false, {
//           message: `Email ${email} not found.`,
//         });
//       }
//       bcrypt.compare(password, user!.password);
//       return done(undefined, user);
//     });
//   })
// );

// export const isAuthenticated = (ctx: Context, next: Next) => {
//   if (ctx.respond.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// };

// /**
//  * Authorization Required middleware.
//  */
// export const isAuthorized = (ctx: Context, next: Next) => {
//   const provider = ctx.request.path.split("/").slice(-1)[0];

//   const user = request.user as IUser;
//   if (find(user.tokens, { kind: provider })) {
//     next();
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };
