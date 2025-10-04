class Doctor {
    constructor() {
        this.doctors = [];
    }

    doctorRegistration(doctorName, doctorContactInfo, departmentName) {
        let doctor = {
            doctorName,
            doctorContactInfo,
            departmentName,
            availability: true
        };
        this.doctors.push(doctor);
        return "Registration Successful";
    }

    viewRegisteredDoctors() {
        return this.doctors;
    }

    logAvailability(doctorIndex, choice) {
        if (this.doctors[doctorIndex]) {
            this.doctors[doctorIndex].availability = choice;
        }
    }
}

class Patient {
    constructor() {
        this.patients = [];
    }

    registerPatient(patientName, patientContactInfo, patientAge, reasonForVisit) {
        let patient = {
            patientName,
            patientContactInfo,
            patientAge,
            reasonForVisit
        };
        this.patients.push(patient);
        return "Patient Registered Successfully";
    }

    viewRegisteredPatients() {
        return this.patients;
    }
}

class HospitalRecords {
    constructor() {
        this.doctor = new Doctor();
        this.patient = new Patient();
    }
}

module.exports = { HospitalRecords };
