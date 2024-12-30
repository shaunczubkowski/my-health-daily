"use client";
import { Card, CardContent } from "../card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface BloodPressureReadingCardProps {
  reading: BloodPressureReading;
}

const BloodPressureReadingCard = ({
  reading,
}: BloodPressureReadingCardProps) => {
  return (
    <Link href={`/BloodPressureReadings/${reading._id}`}>
      <Card className="shadow-inner drop-shadow-md rounded-lg w-80 bg-bp-normal-bg text-bp-normal-primary-text hover:cursor-pointer">
        <CardContent className="p-3 flex h-full w-full justify-between">
          <div>
            <div className="flex items-baseline justify-end">
              <h3 className="text-6xl font-bold">{reading.systolic}</h3>
              <p className="text-bp-secondary-text opacity-75 ml-2">SYS</p>
            </div>
            <div className="flex items-baseline justify-end">
              <h3 className="text-6xl font-bold">{reading.diastolic}</h3>
              <p className="text-bp-secondary-text opacity-75 ml-2">DIA</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center flex-grow">
              <FontAwesomeIcon icon={faHeart} className="text-2xl mx-2" />
              <h3 className="text-6xl font-bold">{reading.pulse}</h3>
            </div>
            <p className="text-right text-xs text-bp-secondary-text">
              {new Date(reading.updatedAt || "").toLocaleString("en-US", {
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
