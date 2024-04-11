
import { MainProducts } from "src/components/Home/MainProducts";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "NextGen World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world","technology"],
}
export default function Home() {
  return (
    <main >
      <MainProducts/>
    </main>
  );
}
