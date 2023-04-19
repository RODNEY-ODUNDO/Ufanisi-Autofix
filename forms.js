import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";

import { getFirestore, addDoc,collection} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyA_sySowHUsSba-8Go2EUPlc1UWe1FXtKQ",
  authDomain: "spareparts-system-project.firebaseapp.com",
  projectId: "spareparts-system-project",
  storageBucket: "spareparts-system-project.appspot.com",
  messagingSenderId: "142393836943",
  appId: "1:142393836943:web:7ea55cd403e35bbb2cb7fa",
  measurementId: "G-ZBXYQKEPDW"
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
    var quantity= document.getElementById('quantity').value;

    

  addDoc(collection(db, "orders"),{
    Brand: brand,
    Model: model,
    Year: year,
    Spareparts: spareparts,
    Name: name,
    Address: address,
    Telephone: telephone,
    Quantity: quantity

});

    alert('Your Order has been placed. Our team will get in touch with you');
    // window.location.href = "index.html";
});


