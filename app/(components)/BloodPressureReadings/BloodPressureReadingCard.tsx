"use client";
import { Card, CardContent } from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import classifyBloodPressure from "@/app/(utils)/classifyBloodPressure";

interface BloodPressureReadingCardProps {
  reading: BloodPressureReading;
}

const BloodPressureReadingCard = ({
  reading,
}: BloodPressureReadingCardProps) => {
  const { _id, systolic, diastolic, pulse, updatedAt } = reading;

  const systolicCopy = systolic ? parseInt(systolic) : 0;
  const diastolicCopy = diastolic ? parseInt(diastolic) : 0;

  const {
    color: { background, text },
  } = classifyBloodPressure(systolicCopy, diastolicCopy);

  return (
    <Link href={`/BloodPressureReadings/${_id}`}>
      <Card
        className={`cla my-2 w-80 rounded-lg shadow-inner drop-shadow-md hover:cursor-pointer`}
        style={{ color: text, background: background }}
      >
        <CardContent className="flex h-full w-full justify-between p-3">
          <div>
            <div className="flex items-baseline justify-end">
              <h3 className="text-6xl font-bold">{systolic}</h3>
              <p className="ml-2 text-bp-secondary-text opacity-75">SYS</p>
            </div>
            <div className="flex items-baseline justify-end">
              <h3 className="text-6xl font-bold">{diastolic}</h3>
              <p className="ml-2 text-bp-secondary-text opacity-75">DIA</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-grow items-center">
              <FontAwesomeIcon icon={faHeart} className="mx-2 text-2xl" />
              <h3 className="text-6xl font-bold">{pulse}</h3>
            </div>
            <p className="text-right text-xs text-bp-secondary-text">
              {new Date(updatedAt || "").toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BloodPressureReadingCard;
