const { HospitalRecords } = require('../HospitalRecordFunctionality/HospitalRecords');
const assert = require("node:assert");


describe("HospitalRecords", () => {
    test('Test that you can register a doctor', () => {
        let hospital = new HospitalRecords();

        let response = hospital.doctor.doctorRegistration("Feyipitan Igbowu", "09053293671", "Dental");
        expect(response).toBe("Registration Successful");
    });

    test('Test that you cannot register a doctor without entering any value', () => {
        let hospital = new HospitalRecords();

        expect(() => hospital.doctor.doctorRegistration("", "", ""))
            .toThrow("No doctors registered yet.");
    });

    test('Test that you must fill in all details', () => {
        let hospital = new HospitalRecords();

        expect(() => hospital.doctor.doctorRegistration("Feyipitan Igbowu", "", "Dental") )
            .toThrow("No doctors registered yet.");
    })

    test('Test that you can view registered doctors', () => {
        let hospital = new HospitalRecords();
        hospital.doctor.doctorRegistration("Feyipitan Igbowu", "09053293671", "Dental");

        let response = hospital.doctor.viewRegisteredDoctors();

        assert.equal(response.length, 1);
        assert.equal(response[0].doctorName, "Feyipitan Igbowu");
        assert.equal(response[0].doctorContactInfo, "09053293671");
        assert.equal(response[0].doctorContactInfo, "Dental");
    });











});
