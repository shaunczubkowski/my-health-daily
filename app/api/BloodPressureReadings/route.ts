import { NextResponse } from "next/server";
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
