const formOneAttributes = {
  name: "", // Section 1
  age: "",
  area: "",
  location: "",
  education: "",
  educationLevel: "",
  smoking: "",
  alcohol: "",
  weight: "",
  height: "",
  caesarean: "", // Section 2
  complication: "",
  gravida: "",
  parity: "",
  mensuralDate: "",
  expectedDeliveryDate: "",
  gestationalAge: "",
  systolicBP: "",
  diastolicBP: "",
  haemoglobin: "",
  fetalHeartRate: "",
  highComplication: "",
  hiv: "", // Section 3
  syphilis: "",
  maleria: "",
  hepatitisB: "",
  activePlacita: "", // Section 4
  labourInduction: "",
  megasulfIinjection: "",
  oxytocinInjection: "",
  antibiotic: "",
  bloodTransfusion: "",
};

const areaDropDown = ["Rural Area", "Urban Area"];

const educationDropDown = ["Literate", "Illiterate"];

const gravidaDropDown = [
  "G1",
  "G2",
  "G3",
  "G4",
  "G5",
  "G6",
  "G7",
  "G8",
  "G9",
  "G10",
];

const parityDropDown = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const heartRateDropDown = [
  "100-109",
  "110-119",
  "120-129",
  "130-139",
  "140-149",
  "150-159",
  "160-170",
];

export {
  formOneAttributes,
  areaDropDown,
  educationDropDown,
  gravidaDropDown,
  parityDropDown,
  heartRateDropDown,
};
