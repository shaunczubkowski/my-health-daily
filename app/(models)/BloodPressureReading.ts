import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.DATABASE_URI as string);
mongoose.Promise = global.Promise;

const bloodPressureReadingSchema = new Schema(
  {
    systolic: Number,
    diastolic: Number,
    pulse: Number,
    position: String,
    arm: String,
    notes: String,
  },
  { timestamps: true }
);

const BloodPressureReading =
  mongoose.models.BloodPressureReading ||
  mongoose.model("BloodPressureReading", bloodPressureReadingSchema);

export default BloodPressureReading;
