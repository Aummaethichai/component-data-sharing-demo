"use client"
// import Image from "next/image";
import { useState } from "react";
import Cart from "./components/Cart";
export default function Home() {

  const [data, setData] = useState([
    {
      id: 1,
      img: "/images/profile.jpg",
      // img: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
      name: "Maethichai Kobkam",
      birth: '2001-08-28',
      city: "Bangkok",
      email: "Maethichai8968@gmail.com",
      likes: 99,
      photos: 100
    }
  ])
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Cart dataProfile={data} />
    </div>
  );
}
