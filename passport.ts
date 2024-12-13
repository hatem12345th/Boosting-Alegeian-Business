import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { PrismaClient } from "@prisma/client";
import { comparePassword } from "./utilities/bcrypt";
 

const prisma = new PrismaClient();

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async (email, password, done) => {
      try {
        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });

        // Check if user exists
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await comparePassword(password, user.passwordHash);
        if (!isPasswordValid) {
          return done(null, false, { message: "Invalid password" });
        }

        // If everything is valid, return the user
        return done(null, user);
      } catch (error) {
        console.error("Error in LocalStrategy:", error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.userID); // Serialize the user's ID
});

passport.deserializeUser(async (userID: number, done) => {
  try {
    // Find user by ID
    const user = await prisma.user.findUnique({ where: { userID } });

    if (!user) {
      return done(new Error("User not found"), null);
    }

    done(null, user); // Pass user object to the session
  } catch (error) {
    console.error("Error in deserializeUser:", error);
    done(error, null);
  }
});

export default passport;
