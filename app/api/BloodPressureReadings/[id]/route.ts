import BloodPressureReading from "../../../(models)/BloodPressureReading";
import { NextRequest, NextResponse } from "next/server";

interface ReqProps {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: ReqProps) {
  try {
    const { id } = await params;
    const foundReading = await BloodPressureReading.findOne({ _id: id });
    return NextResponse.json({ foundReading }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "[BloodPressureReadings]: Error", error },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: ReqProps) {
  try {
    const { id } = await params;

    const body = await req.json();
    const readingData = body.formData;

    const updateReadingData = await BloodPressureReading.findByIdAndUpdate(id, {
      ...readingData,
    });

    return NextResponse.json(updateReadingData, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "[BloodPressureReadings]: Error", error },
      { status: 500 }
    );
  }
}
