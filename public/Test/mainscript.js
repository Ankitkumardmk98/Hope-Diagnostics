// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB5GiXIMWVe1rm7IlZ0ocsV-tvS9tW-j_0",
    authDomain: "hope-diagnostics.firebaseapp.com",
    databaseURL: "https://hope-diagnostics-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hope-diagnostics",
    storageBucket: "hope-diagnostics.appspot.com",
    messagingSenderId: "883668231078",
    appId: "1:883668231078:web:80efd3f4893133e9c96567",
    measurementId: "G-1CRT5T6794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get ref to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function (el) {
    el.preventDefault();
    set(ref(db, 'user/' + document.getElementById("PatientName").value),
        {

            PatientName: document.getElementById("PatientName").value,
            Phone: document.getElementById("Phone").value,
            Symptoms: document.getElementById("Symptoms").value,
            DateOfBirth: document.getElementById("DateOfBirth").value,
            Age: document.getElementById("Age").value,
            //  Sex: document.getElementById("Sex").value,
            //  DateOfAppointment: document.getElementById("DateOfAppointment").value

        });
    alert("Your appointment is confirmed! We'll contact you shortly.");
})









// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// const firebaseConfig = {
//          apiKey: "AIzaSyB5GiXIMWVe1rm7IlZ0ocsV-tvS9tW-j_0",
//          authDomain: "hope-diagnostics.firebaseapp.com",
//          databaseURL: "https://hope-diagnostics-default-rtdb.asia-southeast1.firebasedatabase.app",
//          projectId: "hope-diagnostics",
//          storageBucket: "hope-diagnostics.appspot.com",
//          messagingSenderId: "883668231078",
//          appId: "1:883668231078:web:80efd3f4893133e9c96567",
//          measurementId: "G-1CRT5T6794"
//      };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get reference to database service
// const db = getDatabase(app);

// // Ensure the script runs after the DOM has fully loaded
// document.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById("submit").addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent the default form submission behavior

//         // Get form values
//         const patientName = document.getElementById("PatientName").value;
//         const phone = document.getElementById("Phone").value;
//         const symptoms = document.getElementById("Symptoms").value;
//         const dateOfBirth = document.getElementById("DateOfBirth").value;
//         const age = document.getElementById("Age").value;
//         // const sex = document.getElementById("Sex").value;
//         // const dateOfAppointment = document.getElementById("DateOfAppointment").value;

//         // Basic form validation
//         if (!patientName || !phone || !symptoms ||!age||!dateOfBirth ) {
//             alert("Please fill in all the fields.");
//             return;
//         }

//         // Set user data in Firebase Realtime Database
//         set(ref(db, 'user/' + patientName + phone), {
//             PatientName: patientName,
//             Phone: phone,
//             Symptoms: symptoms,
//             DateOfBirth: dateOfBirth,
//             Age: age,
//             // Sex: sex,
//             // DateOfAppointment: dateOfAppointment
//         }).then(() => {
//             alert("Data saved successfully!");
//         }).catch((error) => {
//             alert("Data could not be saved. " + error);
//         });
//     });
// });
