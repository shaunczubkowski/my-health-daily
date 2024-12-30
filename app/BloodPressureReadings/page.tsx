import BloodPressureReadingCard from "../(components)/BloodPressureReadings/BloodPressureReadingCard";

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

  if (!data?.readings) {
    // TODO: Make pretty
    return <p>No Readings</p>;
  }

  const readings: BloodPressureReading[] = data.readings;

  return (
    <div className="flex flex-col justify-center items-center my-1">
      {readings.map((reading, index) => (
        <BloodPressureReadingCard reading={reading} key={index} />
      ))}
    </div>
  );
};

export default BloodPressureReadings;
