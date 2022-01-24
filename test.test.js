/* eslint-disable import/extensions */

import Statistics from "./function.js";
import patients from "./index.js";

describe("given a statistics class ", () => {
  describe("when it's constructed an array of patients", () => {
    test("then it should return an objec with the number of patients, count of patients over 18, count of diabetic men, totalDays in Hospital and average woman age", () => {
      const expectedResult = {
        nPatients: 6,
        nAdults: 5,
        nDiabeticMen: 1,
        totalDaysInHospital: 20,
        averageAgeWomen: (56 + 38 + 63) / 3,
      };

      const result = new Statistics(patients);

      expect(expectedResult).toEqual(result);
    });
  });
});
