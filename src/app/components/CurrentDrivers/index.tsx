import { getDriverData } from "@/store/api/driver-data";
import './styles.css'

const CurrentDrivers = async () => {
  const data = await getDriverData();
  return (
    <div className="flex flex-col gap-[30px]">
      {data.map((data: any, index: any) => (
        <div key={index} className="pl-[20px] flex flex-row">
          {/* <div
            className="w-[4px] h-[30px]"
            style={{ backgroundColor: `#${data.team_colour}` }}
          ></div> */}
          <div className="inner-container relative pl-[10px]" style={{ color: `#${data.team_colour}` }}>
            <div className="text-black">
              <div className="flex flex-col">
                <p>{data.first_name}</p>
                <p>{data.last_name}</p>
              </div>
              <p>{data.country_code}</p>
              <p>{data.team_name}</p>
              <img src={data.headshot_url} alt="" />
              <p>{data.driver_number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CurrentDrivers;
