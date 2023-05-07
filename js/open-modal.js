let slider = document.querySelector(".slider")
slider.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

const modal = document.querySelector("#modal");
const span = document.querySelector(".close");
const logIn = document.querySelector(".log-in");
const register = document.querySelector(".register");
const main = document.querySelector(".main");
const middle = document.querySelector(".middle-menu");
const main_menu = document.querySelector(".main-div");

register.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

span.addEventListener("click", () => {
    modal.classList.add("hidden");
});

const input = document.querySelector('.card-name');
let allCards = document.querySelector('#all-cards');

let allText = ""
function create() {
    let headingCounter = 1

    headingCounter += 1

    let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ullam corporis molestiae officiis repudiandae repellendus.";
    let h2TextNode = input.value ? input.value : `Card ${headingCounter}`

    let div = `
        <div class="card">
            <h2>${h2TextNode}</h2>
            <p>${lorem}</p>
            
        </div>
    `
    allCards.innerHTML += div
    input.value = ""
}





const loginName = document.querySelector("#login-name");
const loginPass = document.querySelector("#login-pass");

const regName = document.querySelector("#reg-name");
const regPass = document.querySelector("#reg-pass");

const loginBtn = document.querySelector(".closeBtn");
const regBtn = document.querySelector(".register-div button");

let users = localStorage.getItem('users') || "[]";
users = JSON.parse(users);

function createUser() {
    const user = {
        name: regName.value,
        password: regPass.value
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    regName.value = "";
    regPass.value = "";
}

function userExists(clientName, clientPass) {
    return users.find(user => user.name == clientName && user.password == clientPass);
}

loginBtn.addEventListener("click", () => {
    main.classList.remove("secret");

    modal.style.display = "none";
    middle.style.display = "none";

    logIn.style.margin = "23px";
    register.style.margin = "23px";

    document.querySelector(".heading").innerHTML = ` Welcome, ${regName.value}`;
    logIn.innerHTML = "Logout";

    logIn.addEventListener("click", () => {
        main.classList.add("secret");

        middle.style.display = "grid";
        logIn.innerHTML = "Login";

    });
})