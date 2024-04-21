import NextAuth from "next-auth/next";
import CognitoProvider from "next-auth/providers/cognito"

const handler = {
    providers: [
        CognitoProvider(
            {
                clientId: process.env.COGNITO_CLIENT_ID as string,
                clientSecret: process.env.COGNITO_CLIENT_SECRET as string,
                issuer: process.env.COGNITO_ISSUER,
            }
        )
    ]
}

export { handler as GET, handler as POST}