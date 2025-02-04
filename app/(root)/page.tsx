import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
const HomePage = async () => {
  const latestProduct = await getLatestProducts();
  return (
    <>
      <ProductList data={latestProduct} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
