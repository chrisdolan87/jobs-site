import connectMongoDB from "@/libs/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import User from "@/models/user";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { loginEmail, loginPassword } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email: loginEmail });

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(loginPassword, user.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;

                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/loginRegister",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
