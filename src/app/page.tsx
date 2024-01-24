import Image from "next/image";
import CurrentDrivers from "./components/CurrentDrivers";

export default async function Home() {

  return (
    <main className="flex flex-col gap-[20px]">
      <CurrentDrivers></CurrentDrivers>
    </main>
  );
}