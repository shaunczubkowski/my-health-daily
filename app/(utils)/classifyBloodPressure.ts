/**
 * Classifies a blood pressure reading based on systolic and diastolic values.
 * Uses guidelines from the American Heart Association.
 *
 * @param {number} systolic - The systolic blood pressure reading (top number)
 * @param {number} diastolic - The diastolic blood pressure reading (bottom number)
 * @returns {Object} The classification object containing ranges and color coding
 * @throws {Error} If the input values are invalid
 */
function classifyBloodPressure(
  systolic: number | undefined,
  diastolic: number | undefined,
) {
  // Input validation
  if (
    !Number.isFinite(systolic) ||
    !Number.isFinite(diastolic) ||
    systolic === undefined ||
    diastolic === undefined
  ) {
    throw new Error("Blood pressure values must be numbers");
  }

  if (systolic < 70 || systolic > 250 || diastolic < 40 || diastolic > 150) {
    throw new Error("Blood pressure values are outside valid range");
  }

  // Classification definitions
  const classifications = {
    normal: {
      systolic: { min: 0, max: 120 },
      diastolic: { min: 0, max: 80 },
      name: "Normal",
      color: {
        background: "#DCFCE7",
        text: "#166534",
      },
    },
    elevated: {
      systolic: { min: 120, max: 129 },
      diastolic: { min: 0, max: 80 },
      name: "Elevated",
      color: {
        background: "#FEF9C3",
        text: "#854D0E",
      },
    },
    hypertension_stage1: {
      systolic: { min: 130, max: 139 },
      diastolic: { min: 80, max: 89 },
      name: "Hypertension Stage 1",
      color: {
        background: "#FFEDD5",
        text: "#9A3412",
      },
    },
    hypertension_stage2: {
      systolic: { min: 140, max: 180 },
      diastolic: { min: 90, max: 120 },
      name: "Hypertension Stage 2",
      color: {
        background: "#FEE2E2",
        text: "#991B1B",
      },
    },
    hypertensive_crisis: {
      systolic: { min: 180, max: 999 },
      diastolic: { min: 120, max: 999 },
      name: "Hypertensive Crisis",
      color: {
        background: "#FECACA",
        text: "#7F1D1D",
      },
    },
  };

  // Classification logic
  // Note: We check from highest to lowest severity since readings
  // that qualify for higher categories automatically qualify for lower ones

  // First check for hypertensive crisis (either systolic OR diastolic can trigger this)
  if (
    systolic >= classifications.hypertensive_crisis.systolic.min ||
    diastolic >= classifications.hypertensive_crisis.diastolic.min
  ) {
    return classifications.hypertensive_crisis;
  }

  // Then check for stage 2 (either systolic OR diastolic can trigger this)
  if (
    systolic >= classifications.hypertension_stage2.systolic.min ||
    diastolic >= classifications.hypertension_stage2.diastolic.min
  ) {
    return classifications.hypertension_stage2;
  }

  // Then check for stage 1 (either systolic OR diastolic can trigger this)
  if (
    systolic >= classifications.hypertension_stage1.systolic.min ||
    diastolic >= classifications.hypertension_stage1.diastolic.min
  ) {
    return classifications.hypertension_stage1;
  }

  // Check for elevated (special case: only systolic matters, diastolic must be normal)
  if (
    systolic >= classifications.elevated.systolic.min &&
    systolic < classifications.elevated.systolic.max &&
    diastolic < classifications.elevated.diastolic.max
  ) {
    return classifications.elevated;
  }

  // If none of the above, it's normal
  return classifications.normal;
}

// Example usage:
// const reading = classifyBloodPressure(128, 78);
// console.log(reading.name); // "Elevated"
// console.log(reading.color.primary); // "#facc15"

export default classifyBloodPressure;
