import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
export default function Home() {



   const clickMe = () => {
    // setNum(num + 1);
  }

  const num = 1;
  return (
    <div>
      <ProductCard />
    </div>
  );
}
