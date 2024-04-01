"use server"
import { redirect } from "next/navigation";
import { GraphQLClientSingleton } from "src/graphql"
import { createUserMutation } from "src/graphql/mutations/createUserMutation";
import { createAccessToken } from "src/utils/auth/createAccessToken";

 // Server Actions , evita que se renderice en el cliente

export const handlerCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    delete formDataObject["password_confirmation"] 
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

    const variables = {
        input: {
            ...formDataObject,
            phone: "+58" + formDataObject.phone,
        }
    }
    
    const { customerCreate } = await graphqlClient.request(createUserMutation, variables)
    const { customerUserErrors, customer } = customerCreate
    
    if (customer?.firstName) {
        await createAccessToken(formDataObject.email as string, formDataObject.password as string);
        redirect("/store")
        
    }
}    