"use client";

import React, { ChangeEvent, useState } from "react";
import { Label } from "./forms/Label";
import { Input } from "./forms/Input";

const BloodPressureReadingForm = () => {
  const startingReadingData: BloodPressureReading = {
    systolic: undefined,
    diastolic: undefined,
    pulse: undefined,
    position: undefined,
    arm: undefined,
    medicationTaken: undefined,
    notes: undefined,
    symptoms: undefined,
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [formData, setFormData] =
    useState<BloodPressureReading>(startingReadingData);
  return (
    <div>
      <Label htmlFor="systolic">
        Systolic
        <Input
          id="systolic"
          name="systolic"
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          required={true}
          value={formData.systolic}
        />
      </Label>

      <Label htmlFor="diastolic">
        Diastolic
        <Input
          id="diastolic"
          name="diastolic"
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
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
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleOnChange(e)}
          required={true}
          value={formData.pulse}
        />
      </Label>
    </div>
  );
};

export default BloodPressureReadingForm;
