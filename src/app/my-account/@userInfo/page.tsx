import { validateAccessToken } from "src/utils/auth/validateAccessToken";

export const dynamic = 'force-dynamic'
export default async function MyAccountPage() {
  const customer = await validateAccessToken();
  return (
    <div>
      <section>
        <h2>Tu Información</h2>
        <h1>Bienvenido {customer?.firstName}</h1>
        <p>email: {customer?.email}</p>
      </section>
    </div>
  );
}