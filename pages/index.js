import { BaseLayout } from "@components/layout";
import { CourseList } from "@components/course"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"
import { Breadcrumbs, Hero } from "@components/common";

export default function Home() {
  return (
        <>
            <Hero />
            <Breadcrumbs />
            <WalletBar/>
            <EthRates />
            <OrderCard />
            <CourseList />
        </>
       
  );
}
Home.Layout = BaseLayout