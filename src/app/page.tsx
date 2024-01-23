import Image from "next/image";
import { getDriverData } from "@/store/api/driver-data";

export default async function Home() {
  const data = await getDriverData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>hello world</div>
      {data.map((data: any, index: any) => (
        <div key={index}>
          <p>{data.full_name}</p>
          <img src={data.headshot_url} alt="" />
        </div>
      ))}
    </main>
  );
}
