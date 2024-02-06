import Image from "next/image";
import CurrentDrivers from "./components/CurrentDrivers";
import { getDriverData } from "@/store/api/driver-data";

export default async function Home() {
  const data = await getDriverData();
  return (
    <main className="flex flex-col gap-[20px]">
      <CurrentDrivers data={data}></CurrentDrivers>
    </main>
  );
}
