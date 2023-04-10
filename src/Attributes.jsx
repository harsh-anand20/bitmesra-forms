// FORM ATTRIBUTES

const formAttributes = {
  searchID: "", // Database Index
  name: "", // Section 1
  age: "",
  area: "",
  location: "",
  education: "",
  educationLevel: "",
  smoking: "",
  alcohol: "",
  bloodGroup: "",
  weight: "",
  height: "",
  caesarean: "", // Section 2
  complication: "",
  complicationRemarks: "",
  gravida: "",
  parity: "",
  mensuralDate: "",
  expectedDeliveryDate: "",
  gestationalAge: "",
  systolicBP: "",
  diastolicBP: "",
  haemoglobin: "",
  fetalHeartRate: "",
  hypertension: "",
  highComplication: "",
  highComplicationRemarks: "",
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
  deliveryDateTime: "", // Section 1
  deliveryType: "",
  statusOfWomen: "",
  numberOfDelivery: "",
  birthType: "",
  newBornGender: "", // Section 2
  newBornWeight: "",
  lowBirthWeight: "",
  newBornStatus: "",
  vitaminK1: "", // Section 3
  BCG: "",
  OPV: "",
  hepatitis: "",
  motherComplication: "", // Section 4
  newBornComplication: "",
  formOneStatus: "", // Form One Filled?
  formTwoStatus: "", // Form Two Filled?
};

const areaDropDown = ["Rural Area", "Urban Area"];

const educationDropDown = ["Literate", "Illiterate"];

const bloodGroupDropDown = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

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

const deliveryTypeDropDown = ["Normal", "LSCS"];

const numberOfDeliveryDropDown = ["1", "2", "more than 2"];

const birthTypeDropDown = ["Preterm", "Non Preterm"];

// EXPORTS

export {
  formAttributes,
  areaDropDown,
  educationDropDown,
  bloodGroupDropDown,
  gravidaDropDown,
  parityDropDown,
  heartRateDropDown,
  deliveryTypeDropDown,
  numberOfDeliveryDropDown,
  birthTypeDropDown,
};
