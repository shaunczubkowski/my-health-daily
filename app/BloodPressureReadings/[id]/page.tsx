import BloodPressureReadingForm from "@/app/(components)/BloodPressureReadings/BloodPressureReadingForm";

const getReadingById = async (id: string) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/BloodPressureReadings/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch reading: ${id}`);
    }

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

let updateReadingData: BloodPressureReading = {};
const BloodPressureReadingsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  const EDIT_MODE = id === "new" ? false : true;

  if (EDIT_MODE) {
    const currentReadingData = await getReadingById(id);
    updateReadingData = currentReadingData.foundReading;
  } else {
    updateReadingData = {
      _id: "new",
    };
  }

  return (
    <div className="p-4 flex flex-col">
      <h1 className="my-3 self-start text-xl">{EDIT_MODE ? "Edit" : "Add"}</h1>
      <BloodPressureReadingForm reading={updateReadingData} />
    </div>
  );
};

export default BloodPressureReadingsPage;
