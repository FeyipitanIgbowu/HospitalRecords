const prompt = require('prompt-sync')();
const { HospitalRecords } = require('./HospitalRecords');

const hospital = new HospitalRecords();

const menu = `
            ===== Welcome To Feyi's Hospital =====
                1 -> Register Doctor
                2 -> View Registered Doctors
                3 -> Update Doctor Availability
                    `
console.log(menu);
let menuOption = parseInt(prompt("Select an option: "));

switch (menuOption) {
    case 1:
        const doctorName = prompt("Doctor name: ");
        const doctorContact = prompt("Contact info: ");
        const departmentName = prompt("Department: ");
        console.log(hospital.doctor.doctorRegistration(doctorName, doctorContact, departmentName));
        break;

    case 2:
        const doctors = hospital.doctor.viewRegisteredDoctors();
            doctors.forEach(
                doctor => console.log(` 
                "Doctor Name" - ${doctor.doctorName} /n 
                "Doctor's Department" - ${doctor.departmentName} /n 
                "Doctor's Availability" - ${doctor.availability ? "Available" : "Unavailable"}`
                ));
        break;

    case 3:
        const index = parseInt(prompt("Enter doctor number (starting from 0): "));
        const answer = prompt("Is the doctor available? (yes/no): ").toLowerCase();
        const isAvailable = answer === "yes";
        hospital.doctor.logAvailability(index, isAvailable);
        console.log("Availability updated!");
        break;


}
