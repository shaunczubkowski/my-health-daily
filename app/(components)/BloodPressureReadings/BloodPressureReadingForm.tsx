"use client";

import React, { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/(components)/buttons/Button";
import { Label } from "@/app/(components)/forms/Label";
import { Input } from "@/app/(components)/forms/Input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/app/(components)/forms/RadioGroup";
import { Textarea } from "@/app/(components)/forms/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/(components)/forms/Select";

// TODO: Add better form validation
const BloodPressureReadingForm = ({
  reading,
}: {
  reading: BloodPressureReading;
}) => {
  const EDIT_MODE = reading._id === "new" ? false : true;
  const router = useRouter();

  const startingReadingData: BloodPressureReading = {
    _id: EDIT_MODE ? reading._id : "new",
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
  }

  const [formData, setFormData] =
    useState<BloodPressureReading>(startingReadingData);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnChange = (e: any) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;

    console.log(e);
    console.log(value, name);

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
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <Label htmlFor="systolic">
          Systolic
          <Input
            id="systolic"
            name="systolic"
            type="number"
            onChange={handleOnChange}
            required={true}
            value={formData.systolic}
            autoFocus
          />
        </Label>

        <Label htmlFor="diastolic">
          Diastolic
          <Input
            id="diastolic"
            name="diastolic"
            type="number"
            onChange={handleOnChange}
            required={true}
            value={formData.diastolic}
          />
        </Label>

        <Label htmlFor="pulse">
          Pulse
          <Input
            id="pulse"
            name="pulse"
            type="number"
            onChange={handleOnChange}
            required={true}
            value={formData.pulse}
          />
        </Label>
        <Select onValueChange={handleOnChange} defaultValue={formData.arm}>
          <SelectTrigger className="w-44">
            <SelectValue placeholder="Arm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="right">Right</SelectItem>
            <SelectItem value="left">Left</SelectItem>
          </SelectContent>
        </Select>
        {/* <RadioGroup
          id="arm"
          defaultValue={formData.arm}
          onChange={handleOnChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="left" id="left" />
            <Label htmlFor="left">Left Arm</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="right" id="right" />
            <Label htmlFor="right">Right Arm</Label>
          </div>
        </RadioGroup> */}
        <Label htmlFor="position">Position</Label>
        <RadioGroup
          id="position"
          defaultValue={formData.position}
          onValueChange={handleOnChange}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sitting" id="sitting" />
            <Label htmlFor="sitting">Sitting</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="standing" id="standing" />
            <Label htmlFor="standing">Standing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="lying" id="lying" />
            <Label htmlFor="lying">Lying</Label>
          </div>
        </RadioGroup>
        <Textarea
          onChange={handleOnChange}
          placeholder="Symptoms, medication, notes..."
        />
        {/* TODO: dynamically change button value to edit if changing a reading */}
        <Button variant={"default"} type="submit">
          {EDIT_MODE ? "Update" : "Save"}
        </Button>
      </form>
    </div>
  );
};

export default BloodPressureReadingForm;
