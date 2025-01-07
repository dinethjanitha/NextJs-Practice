import Image from "next/image";
export default function Home() {



   const clickMe = () => {
    // setNum(num + 1);
  }

  const num = 1;
  return (
    <div>
      <h2>{num}</h2>
      <button >Click Me</button>
    </div>
  );
}
