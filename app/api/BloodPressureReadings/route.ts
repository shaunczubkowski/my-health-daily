import BloodPressureReading from "../../(models)/BloodPressureReading";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const bloodPressureReadingData = body.formData;
    await BloodPressureReading.create(bloodPressureReadingData);
    return NextResponse.json({ message: "Reading Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
