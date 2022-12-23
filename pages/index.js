import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead
        title="Shivansh Packaging"
        siteName="Shivansh Packaging"
        description="Shivansh Packaging, Paper Bag Wholesaler & Dealer, Pune"
        url="http://www.shivanshpackaging.com/"
      />
      <Layout>
        <Hero />
        <Feature />
      </Layout>
    </>
  );
}
