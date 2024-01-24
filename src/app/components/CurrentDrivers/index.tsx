import { getDriverData } from "@/store/api/driver-data";

const CurrentDrivers = async () => {
  const data = await getDriverData();
  return (
    <div>
      {data.map((data: any, index: any) => (
        <div key={index} className="pl-[20px]">
          <p>{data.full_name}</p>
          <p>{data.country_code}</p>
          <p>{data.driver_number}</p>
          <div
            className="w-[3px] h-[10px]"
            style={{ backgroundColor: `#${data.team_colour}` }}
          ></div>
          <p>{data.team_name}</p>
          <img src={data.headshot_url} alt="" />
        </div>
      ))}
    </div>
  );
};

export default CurrentDrivers;
