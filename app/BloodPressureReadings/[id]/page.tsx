import BloodPressureReadingForm from "@/app/(components)/BloodPressureReadings/BloodPressureReadingForm";

const getReadingById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/BloodPressureReadings/${id}`,
      {
        cache: "no-store",
      },
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
  params: Promise<{ id: string }>;
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
    <div className="flex flex-col p-4">
      <h1 className="my-3 self-start text-xl">{EDIT_MODE ? "Edit" : "Add"}</h1>
      <BloodPressureReadingForm reading={updateReadingData} />
    </div>
  );
};

export default BloodPressureReadingsPage;
