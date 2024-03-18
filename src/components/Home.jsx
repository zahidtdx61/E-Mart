import { Navbar } from "./Navbar";
import ProductCard from "./ProductCard";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] h-fit p-10 pt-[5%] flex flex-wrap">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};
