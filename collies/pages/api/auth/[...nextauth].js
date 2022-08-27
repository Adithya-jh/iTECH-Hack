import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import RedditProvider from "next-auth/providers/reddit";
import InstagramProvider from "next-auth/providers/instagram";
import LinkedInProvider from "next-auth/providers/linkedin";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "619457204981-anrsub5h11phahls2n9pskfd8kll3535.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here

    RedditProvider({
      clientId: "XD9pbLMNExAHfcv-UZoYTQ",
      clientSecret: "welHs7HMKCqmTsRVUoiHw6WbyLE8_w",
    }),

    InstagramProvider({
      clientId: "542646807356294",
      clientSecret: "951f6bc3a6a93d49c5291aaec8369ada"
    }),

  
      LinkedInProvider({
        clientId: "86w01au60kd2c9",
        clientSecret: "zmlxeSeTy5Fl6kX6"
      }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
});
