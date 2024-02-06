"use client";

import { useState } from "react";
import "./styles.css";
import Image from "next/image";

const CurrentDrivers = ({ data }: { data: any }) => {
  const [driverHover, setDriverHover] = useState(null);

  const sortedData = data.sort((a: any, b:any) => {
    if (a.team_colour < b.team_colour) return -1;
    if (a.team_colour > b.team_colour) return 1;
    return 0;
  });
  return (
    <div className="max-w-[1500px] mx-auto md:px-[30px] px-[16px] py-[80px] w-full">
      <div className="flex justify-center">
        <div className="grid min-[550px]:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] justify-items-stretch gap-y-[20px] gap-x-[10px] w-full">
          {sortedData.map((data: any, index: any) => {
            return (
              <div
                key={index}
                onMouseEnter={() => setDriverHover(index)}
                onMouseLeave={() => setDriverHover(null)}
                style={{
                  backgroundColor:
                    index === driverHover ? `#${data.team_colour}` : "#fff",
                }}
                className="driver-container pl-[20px] flex flex-row p-[20px] border border-gray-500 rounded-[5px] duration-500 bg-white hover"
              >
                <div
                  className="inner-container relative pl-[10px]"
                  style={{ color: `#${data.team_colour}` }}
                >
                  <div
                    style={{ color: index === driverHover ? `#fff` : "#000" }}
                  >
                    <div className="flex flex-row justify-between">
                      <p>{data.full_name}</p>
                    </div>
                    <p>{data.country_code}</p>
                    {data.headshot_url != null ? (
                      <div className="max-w-[100px]">
                        <Image
                          src={data.headshot_url}
                          alt="Driver Headshot"
                          width={1500}
                          height={1500}
                        />
                      </div>
                    ) : (
                      <div></div>
                    )}
                    <p>{data.driver_number}</p>
                    <p>{data.team_name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurrentDrivers;
