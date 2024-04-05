"use server"
import { redirect } from "next/navigation";
import { GraphQLClientSingleton } from "src/graphql"
import { createUserMutation } from "src/graphql/mutations/createUserMutation";
import { createAccessToken } from "src/utils/auth/createAccessToken";
import { cookies } from "next/headers"
import { validateAccessToken } from "src/utils/auth/validateAccessToken";
import { createCartMutation } from "src/graphql/mutations/createCartMutation";

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

export const handlerLogin = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData);
    const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string);

    if (accessToken) {
        redirect("/store");
    }
}

export const handleCreateCart = async (items: CartItem[]) => {
    const cookiesStore = cookies()
    const accesToken = cookiesStore.get('accessToken')?.value as string
  
    if(!accesToken) redirect('/login')
  
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const customer = await validateAccessToken()
    const variables = {
      input: {
        buyerIdentity: {
          customerAccessToken: accesToken,
          email: customer?.email
        },
        lines: items.map(item => ({
          merchandiseId: item.merchandiseId,
          quantity: item.quantity
        }))
      }
    }
  
    const { cartCreate }: {
      cartCreate?: {
        cart?: {
          checkoutUrl: string
        }
      }
    } = await graphqlClient.request(createCartMutation, variables)

    return cartCreate?.cart?.checkoutUrl
  }