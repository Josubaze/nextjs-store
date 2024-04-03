import { cookies } from 'next/headers';
import { GraphQLClientSingleton } from 'src/graphql';
import { customerName } from 'src/graphql/queries/customerName';

export const validateAccessToken = async () => {

 const cookiesStore = cookies();
 const accessToken = cookiesStore.get('accessToken')?.value;

 if (!accessToken) {
    return null;
 }else{
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
    const { customer } = await graphqlClient.request(customerName, { customerAccessToken: accessToken });
    return customer;
 }
}