import { GraphQLClientSingleton } from "src/graphql"
import { getOrdersQuery } from "src/graphql/queries/getOrders"
import { cookies } from "next/headers"


export const getCustomerOrders = async () => {
  const cookiesStorage = cookies()
  const accessToken = cookiesStorage.get("accessToken")?.value || ""
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    customerAccessToken: accessToken
  }

  const { customer } = await graphqlClient.request<any>(getOrdersQuery, variables)
  const orders = customer?.orders?.edges.map((edge: any) => edge.node)
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  }
}