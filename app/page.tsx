"use client"
// import Image from "next/image";
import { useState, createContext } from "react";
import Cart from "./components/Cart";
import FirstComponent from "./components/FirstComponent";
import { Profile } from "./types/data.types";
export const DataContext = createContext<Profile[]>([]);;

export default function Home() {
  const [data, setData] = useState<Profile[]>([
    {
      id: 1,
      img: "/images/profile.jpg",
      // img: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg",
      name: "Maethichai Kobkam",
      birth: '2001-08-28',
      city: "Bangkok",
      email: "Maethichai8968@gmail.com",
      likes: 99,
      photos: 100,
      github: "https://github.com/Aummaethichai"
    }
  ])
  return (
    <div className="flex w-full flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Cart dataProfile={data} />
      <DataContext.Provider value={data}>
        <FirstComponent />
      </DataContext.Provider>
    </div>
  );
}
