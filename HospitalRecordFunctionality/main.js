let prompt = require('prompt-sync')();
const {doctorRegistration, HospitalRecords} = require('./HospitalRecords');


let doctor = new HospitalRecords.doctorRegistration(hospital);

let welcomeMessage = `===== Welcome To Feyi's Hospital =====
                            1 -> Register As a Doctor
                            2 -> View Registered Doctors
                            
                            `
console.log(welcomeMessage);
let option = prompt("Select an option")
let choice = parseInt(option)
switch (choice) {
    case 1 :
        doctorName = prompt("Please enter a valid name: ");
        doctorContactInfo = prompt("Please enter your contact information: ");
        departmentName = prompt("What Department do you belong to?: ");
        console.log(hospital.doctorRegistration(doctorRegistration(doctorName, doctorContactInfo, departmentName)));
        break

    case 2:
        console.log(hospital.viewRegisteredDoctors())

}