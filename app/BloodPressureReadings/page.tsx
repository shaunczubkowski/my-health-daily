import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BloodPressureReadingCard from "../(components)/BloodPressureReadings/BloodPressureReadingCard";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const getReadings = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/BloodPressureReadings", {
      method: "get",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blood pressure readings.");
    }

    return res.json();
  } catch (error) {
    console.error("[BloodPressureReadings]: Error fetching readings", error);
  }
};

const BloodPressureReadings = async () => {
  const data = await getReadings();

  const readings: BloodPressureReading[] = data.readings;

  return (
    <div className="flex h-screen flex-col justify-between">
      {!data?.readings || data?.readings.length === 0 ? (
        <h1 className="mt-10 text-center text-2xl">No Readings</h1>
      ) : (
        <div className="my-1 flex flex-col items-center justify-center">
          {readings.map((reading, index) => (
            <BloodPressureReadingCard reading={reading} key={index} />
          ))}
        </div>
      )}

      <Link
        href="/BloodPressureReadings/new"
        className="absolute bottom-0 self-end"
      >
        <FontAwesomeIcon
          icon={faHeartCirclePlus}
          size="2xl"
          className="m-3 rounded-full bg-indigo-300 p-6 text-indigo-900 shadow-inner drop-shadow-md hover:cursor-pointer active:bg-indigo-900 active:text-indigo-300"
        />
      </Link>
    </div>
  );
};

export default BloodPressureReadings;
