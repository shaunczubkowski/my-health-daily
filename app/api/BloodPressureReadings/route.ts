import { NextRequest, NextResponse } from "next/server";
import BloodPressureReading from "../../(models)/BloodPressureReading";

export async function GET() {
  try {
    const readings = await BloodPressureReading.find();
    return NextResponse.json({ readings }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "[BloodPressureReadings API] Error",
      error,
    });
  }
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const bloodPressureReadingData = body.formData;
    await BloodPressureReading.create(bloodPressureReadingData);
    return NextResponse.json({ message: "Reading Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "[BloodPressureReadings]: Error", error },
      { status: 500 },
    );
  }
}
