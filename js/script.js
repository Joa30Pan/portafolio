//Import the functions you need from the SDKs you need
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");

    const imagenes = document.querySelectorAll(".flip-card-back img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtXXCCHNzo0eUbDXAann8wUZNDVL9UE8I",
    authDomain: "portafolio-form-9d78e.firebaseapp.com",
    projectId: "portafolio-form-9d78e",
    storageBucket: "portafolio-form-9d78e.firebasestorage.app",
    messagingSenderId: "436868979975",
    appId: "1:436868979975:web:ad550d4b1d58d9d3f079a2",
    measurementId: "G-Q7CK7R6PGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

const form = document.getElementById("contacto-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = new Date();

    try {
        await addDoc(collection(db, "Clientes"), {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            fecha: fecha
        });
        console.log("Mensaje enviado");
        alert("Mensaje enviado correctamente");
        form.reset();
    } catch (error) {
        console.error("Error al enviar el mensaje");
        alert("Error al enviar el mensaje, por favor intente nuevamente");
    }
});