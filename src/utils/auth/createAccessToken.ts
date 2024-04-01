import { GraphQLClientSingleton } from "src/graphql";
import { customerAccessTokenCreateMutation } from "src/graphql/mutations/customerAccessTokenCreate";
import { cookies } from "next/headers";

export const createAccessToken = async (client: string, password: string) => {
    const cookiesStore = cookies();
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient(); 
    const { customerAccessTokenCreate } =  await graphqlClient.request(customerAccessTokenCreateMutation, {
        "email": client,
        "password": password,
    });

    const { accessToken, expiresAt } = customerAccessTokenCreate?.customerAccessToken;


    if (accessToken) {
        cookiesStore.set("accessToken", accessToken, {
            path: "/",
            expires: new Date(expiresAt),
            httpOnly: true,
            sameSite: "strict",
        });
    }

}