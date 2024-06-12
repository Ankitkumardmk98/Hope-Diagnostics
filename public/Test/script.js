 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

 document.getElementById("submit").addEventListener('click', function (e) {
     e.preventDefault();
     set(ref(db, 'user/' + document.getElementById("username").value),
         {

             username: document.getElementById("username").value,
             email: document.getElementById("email").value,
             PhoneNumber: document.getElementById("phone").value

         });
     alert("Login Sucessfull  !");
 })