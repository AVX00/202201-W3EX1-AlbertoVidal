export default class Statistics {
  nPatients;

  nAdults;

  constructor(patients) {
    this.nPatients = patients.length;
    this.nAdults = patients.filter(
      (patientData) => patientData.patient.age >= 18
    ).length;
    this.nDiabeticMen = patients.filter(
      (patientData) =>
        patientData.diet === "Diabetes" && patientData.patient.sexo === "M"
    ).length;
    this.totalDaysInHospital = patients
      .map((patientData) => patientData.daysInHospital)
      .reduce((acumulator, daysInHospital) => acumulator + daysInHospital);
    const averageAgeWomen = patients
      .filter((patientData) => patientData.patient.sexo === "W")
      .map((patientData) => patientData.patient.age)
      .reduce((acumulator, patientAge) => acumulator + patientAge);
    this.averageAgeWomen =
      averageAgeWomen /
      patients.filter((patientData) => patientData.patient.sexo === "W").length;
  }
}
