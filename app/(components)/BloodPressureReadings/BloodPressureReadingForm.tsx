"use client";

import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/(components)/buttons/Button";
import { Label } from "@/app/(components)/forms/Label";
import { Input } from "@/app/(components)/forms/Input";
import { Textarea } from "@/app/(components)/forms/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(components)/forms/Select";
import Link from "next/link";

// TODO: Add better form validation
const BloodPressureReadingForm = ({
  reading,
}: {
  reading: BloodPressureReading;
}) => {
  const EDIT_MODE = reading._id === "new" ? false : true;
  const router = useRouter();

  const startingReadingData: BloodPressureReading = {
    _id: EDIT_MODE ? reading._id : undefined,
    systolic: "",
    diastolic: "",
    pulse: "",
    position: "sitting",
    arm: "left",
    notes: "",
  };

  if (EDIT_MODE) {
    startingReadingData["systolic"] = reading.systolic;
    startingReadingData["diastolic"] = reading.diastolic;
    startingReadingData["pulse"] = reading.pulse;
    startingReadingData["arm"] = reading.arm;
    startingReadingData["position"] = reading.position;
    startingReadingData["notes"] = reading.notes;
    startingReadingData["updatedAt"] = reading.updatedAt;
  }

  const [formData, setFormData] =
    useState<BloodPressureReading>(startingReadingData);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (EDIT_MODE) {
      const res = await fetch(`/api/BloodPressureReadings/${reading._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("[BloodPressureReadings] Failed to update reading");
      }
    } else {
      const res = await fetch(`/api/BloodPressureReadings`, {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("[BloodPressureReadings] Failed to create reading");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3">
      <Label htmlFor="date">Date</Label>
      <Input
        id="updatedAt"
        value={
          reading.updatedAt
            ? new Date(reading.updatedAt || "").toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Now"
        }
        name="updatedAt"
        type="text"
        disabled={true}
      />
      <Label htmlFor="systolic">Systolic</Label>
      <Input
        id="systolic"
        name="systolic"
        type="number"
        onChange={handleOnChange}
        required={true}
        value={formData.systolic}
        autoFocus
      />

      <Label htmlFor="diastolic">Diastolic</Label>
      <Input
        id="diastolic"
        name="diastolic"
        type="number"
        onChange={handleOnChange}
        required={true}
        value={formData.diastolic}
      />

      <Label htmlFor="pulse">Pulse</Label>
      <Input
        id="pulse"
        name="pulse"
        type="number"
        onChange={handleOnChange}
        required={true}
        value={formData.pulse}
      />
      <Label htmlFor="arm">Arm</Label>
      <Select
        onValueChange={(val) =>
          setFormData((prev) => ({ ...prev, arm: val as "left" | "right" }))
        }
        defaultValue={formData.arm}
      >
        <SelectTrigger className="w-44">
          <SelectValue placeholder="Arm" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="right">Right</SelectItem>
          <SelectItem value="left">Left</SelectItem>
        </SelectContent>
      </Select>
      <Label htmlFor="position">Position</Label>
      <Select
        onValueChange={(val) =>
          setFormData((prev) => ({
            ...prev,
            position: val as "sitting" | "standing" | "lying",
          }))
        }
        defaultValue={formData.position}
      >
        <SelectTrigger className="w-44">
          <SelectValue placeholder="position" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sitting">Sitting</SelectItem>
          <SelectItem value="standing">Standing</SelectItem>
          <SelectItem value="lying">Lying</SelectItem>
        </SelectContent>
      </Select>
      <Textarea
        onChange={handleOnChange}
        placeholder="Symptoms, medication, notes, etc..."
        value={formData.notes}
        id="notes"
        name="notes"
        rows={5}
      />
      {/* TODO: dynamically change button value to edit if changing a reading */}
      <Button variant={"default"} type="submit">
        {EDIT_MODE ? "Update" : "Save"}
      </Button>

      <Button variant={"link"}>
        <Link href={"/BloodPressureReadings/"}>Cancel</Link>
      </Button>
    </form>
  );
};

export default BloodPressureReadingForm;
