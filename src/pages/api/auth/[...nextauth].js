import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
     providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRETE
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRETE
          }),
          CredentialsProvider({
            type: 'credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req){
              const user = { id: "1", name: "Ibrahim Sikder", email: "ibrahim@gmail.com" }
              if (user) {
               
                return user
              } else {            
                return null
              
              }
            },
          })
        ]

})