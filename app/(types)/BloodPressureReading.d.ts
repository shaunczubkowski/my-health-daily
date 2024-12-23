type BloodPressureReading = {
  systolic: number | undefined;
  diastolic: number | undefined;
  pulse: number | undefined;
  position?: Position | undefined;
  arm?: Arm | undefined;
  medicationTaken?: boolean | undefined;
  notes?: string | undefined;
  symptoms?: Symptoms[] | undefined;
};

enum Position {
  SITTING = "Sitting",
  STANDING = "Standing",
  LYING = "Lying",
}

enum Arm {
  LEFT = "Left",
  RIGHT = "Right",
}

enum Symptoms {
  HEADACHE = "Headache",
  DIZZINESS = "Dizziness",
  CHEST_PAIN = "Chest pain",
  SHORTNESS_OF_BREATH = "Shortness of breath",
}
