import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

import { getFirestore, addDoc,collection} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyAWov7boQ9ZniID8kLR7GiWv8Ci9t2-JN0",
    authDomain: "spareparts-a2d26.firebaseapp.com",
    projectId: "spareparts-a2d26",
    storageBucket: "spareparts-a2d26.appspot.com",
    messagingSenderId: "677086045841",
    appId: "1:677086045841:web:16fbd4bedc4a9daaaf0130",
    measurementId: "G-QDELWPR77Z"
  };


 const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
      const db = getFirestore(app);



const submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', (event) => {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const spareparts = document.getElementById('spareparts').value;
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var telephone = document.getElementById('phone').value;


    addDoc(collection(db, "orders"),{
        Brand: brand,
        Model: model,
        Year: year,
        Spareparts: spareparts,
        Name: name,
        Address: address,
        Telephone: telephone


    });
    
    alert('Order has been placed');
    window.location.href = "index.html";
});

