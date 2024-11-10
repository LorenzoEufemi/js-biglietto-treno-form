// INPUT
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const kmInput = document.getElementById("km");
const btnElem = document.getElementById("btn-submit")
const usernameElem = document.getElementById("username-card");
const ageElem = document.getElementById("age-card");
const kmElem = document.getElementById("km-card");
const priceElem = document.getElementById("price-card");
const cardElem = document.getElementById("table");
const formElem = document.getElementById("user-form");
const TicketElem = document.querySelector(".biglietto");

// ESECUZIONE

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const age = parseInt(ageInput.value.trim());
    const km = parseInt(kmInput.value.trim());
    console.log(typeof age, km);

    usernameElem.innerHTML = username;
    ageElem.innerHTML = age;

    // calcolo biglietto
    const fullPrice = km * 0.21;
    console.log(fullPrice)
    const price20 = fullPrice - (fullPrice * 0.2); // 0.2 = 20%
    const price40 = fullPrice - (fullPrice * 0.4); // 0.4 = 40%

    let result;

    if (age < 18) {
        result = `Prezzo scontato:${price20.toFixed(2)}`;
    } else if (age >= 65) {
        result = `Prezzo scontato:${price40.toFixed(2)}`;
    } else {
        result = fullPrice.toFixed(2);
    }
    console.log(result)
    priceElem.innerHTML = result + "&#8364";
    // rimozione d-none
    cardElem.classList.remove("d-none");
    TicketElem.classList.remove("d-none");
    // reset input
    formElem.reset();
    // numero random carrozza
    let number = ""
    for (let i = 0; i < 1; i++) {
        number = Math.floor(Math.random() * 10) + 1

    }
    kmElem.innerHTML = number;
}
)