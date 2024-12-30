type BloodPressureReading = {
  _id?: number | "new";
  systolic?: string | undefined;
  diastolic?: string | undefined;
  pulse?: string | undefined;
  position?: "sitting" | "standing" | "lying" | undefined;
  arm?: "left" | "right" | undefined;
  notes?: string | undefined;
  createdAt?: string | undefined;
  updatedAt?: string | undefined;
};
