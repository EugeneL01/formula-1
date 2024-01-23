import Image from "next/image";

async function getData() {
  const res = await fetch('https://api.openf1.org/v1/drivers?session_key=latset', {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  // console.log("here", data);

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
