const { HospitalRecords } = require('../HospitalRecordFunctionality/HospitalRecords');

describe("HospitalRecords", () => {
    test('Test that you can register a doctor', () => {
        let hospital = new HospitalRecords();
        let response = hospital.doctor.doctorRegistration("Feyipitan Igbowu", "09053293671", "Dental");
        expect(response).toBe("Registration Successful");
    });
});
