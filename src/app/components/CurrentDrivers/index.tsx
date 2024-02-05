import { getDriverData } from "@/store/api/driver-data";
import "./styles.css";

const CurrentDrivers = async () => {
  const data = await getDriverData();
  return (
    <div className="max-w-[1500px] mx-auto md:px-[30px] px-[16px] py-[80px] w-full">
      <div className="flex justify-center">
        <div className="grid min-[550px]:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] justify-items-stretch gap-[30px] w-full">
          {data.map((data: any, index: any) => (
            <div
              key={index}
              className="pl-[20px] flex flex-row p-[20px] border border-gray-500 rounded-[5px]"
            >
              <div
                className="inner-container relative pl-[10px]"
                style={{ color: `#${data.team_colour}` }}
              >
                <div className="text-black">
                  <div className="flex flex-row justify-between">
                    <p>{data.full_name}</p>
                  </div>
                  <p>{data.country_code}</p>
                  <img src={data.headshot_url} alt="" />
                  <p>{data.driver_number}</p>
                  <p>{data.team_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentDrivers;
