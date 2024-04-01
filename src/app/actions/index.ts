"use server"
import { GraphQLClientSingleton } from "src/graphql"
import { createUserMutation } from "src/graphql/mutations/createUserMutation";

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
    console.log(customer)
    console.log(customerUserErrors)
}    