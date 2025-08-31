import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
});
