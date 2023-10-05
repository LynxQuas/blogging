import { formatDate, hideForm, displayForm } from "./helpers.js";
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// INITIAL DISPLAY
const logoutBtn = document.querySelectorAll(".btn_logout");
const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log(isLoggedIn === null);

const userDataJSON = localStorage.getItem("userData");
const userDataArray = userDataJSON ? JSON.parse(userDataJSON) : [];

async function getData() {
  try {
    const response = await fetch("data.JSON");

    if (!response.ok) {
      throw new Error("Data cannot be fetched!");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function checkWindowWidth() {
  if (window.innerWidth < 600) {
    // Window width is less than 500 pixels
    hideForm(document.querySelector(".desktop"));
    displayForm(document.querySelector(".mobile"));

    const humburger = document.querySelector("#humburger");

    humburger.addEventListener("click", () => {
      displayForm(document.querySelector(".humburger_menu"));
    });

    document
      .querySelector(".hide_menu-btn")
      .addEventListener("click", () =>
        hideForm(document.querySelector(".humburger_menu"))
      );
  } else {
    //     // Winow width is gredater than or equal to 500 pixels
    displayForm(document.querySelector(".desktop"));
    hideForm(document.querySelector(".mobile"));
  }
}

function displayContent(data) {
  const root = document.querySelector("#root");

  root.innerHTML = "";

  data?.reverse().forEach((data) => {
    root.innerHTML += `
    <div class="content" id="${data.id}">
                     <div class="image_container">
                         <img src="${data.image_url}" alt="blog">
                     </div>

                     <h3 class="title"> ${data.title}</h3>

                     <div class="content_info">
                         <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                             <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/>
                         </svg>

                         <span class="date">${formatDate(
                           data.created_at
                         )}</span>
                     </div>
                     <p class="content_text">${data.content}</p>
                     <div class="content_footer">
                         <span class="user_name">${data.created_by}</span>
                        <button class="btn_detail">Detail</button>
                     </div>
                 </div>
    `;
  });
}

const init_data = await getData();
localStorage.getItem("init_data")
  ? localStorage.getItem("init_data")
  : localStorage.setItem("init_data", JSON.stringify(init_data));
const initDataJSON = localStorage.getItem("init_data");
const initialData = initDataJSON ? JSON.parse(initDataJSON) : [];
checkWindowWidth();
window.addEventListener("resize", checkWindowWidth);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// REGISTER FORM
// select the require DOM elements.
const registerBtn = document.querySelectorAll(".btn_register");
const registerForm = document.querySelector(".register_form");
const hideRegisterForm = document.querySelectorAll(".hide_register-form");
const loginBtn = document.querySelectorAll(".btn_login");
const loginForm = document.querySelector(".login_form");

// validation functions
function checkValidation(username, data) {
  let accExist = false;
  data.forEach((data) => {
    if (username.toLowerCase() === data.created_by.toLowerCase()) {
      accExist = true;
    }
  });

  return accExist;
}

// display the registerFrom
registerBtn.forEach((btn) => {
  btn.addEventListener("click", () => displayForm(registerForm));
});

// to hide the register form
hideRegisterForm.forEach((btn) => {
  btn.addEventListener("click", () => {
    hideForm(registerForm);
    hideForm(loginForm);
  });
});

// REGISTER FORM SUBMITTION.

function submitHandler(e) {
  e?.preventDefault();

  // select the inputs.
  const userName = registerForm.name.value.toLowerCase();
  const password = registerForm.password.value.toLowerCase();
  const confirmation = registerForm.confirmation.value.toLowerCase();

  //check for validation.
  if (!userName || !password || !confirmation) {
    alert("Please fill the inputs.");
    return;
  }

  if (password.toLowerCase() !== confirmation.toLowerCase()) {
    alert("password do not match.");
    return;
  }
  if (
    checkValidation(userName, userDataArray) ||
    checkValidation(userName, initialData)
  ) {
    alert("USERNAME ALREADY EXIST.");
    return;
  }

  // hide the register form.
  hideForm(registerForm);

  const id = initialData[initialData.length - 1].id;
  console.log(id);

  // store the user's data.
  const userData = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: "",
    image_url: "https://via.placeholder.com/150",
    content: "",
    created_at: new Date(),
    created_by: userName,
    password,
  };

  // add the user's data to locale storage array.
  userDataArray.push(userData);

  // update the local storage.
  localStorage.setItem("userData", JSON.stringify(userDataArray));
}

registerForm.addEventListener("submit", submitHandler);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// LOGIN FORM

let currentUser;

function loginFormSubmitHandler(e) {
  e?.preventDefault();

  const userName = loginForm.name.value.toLowerCase();
  const password = loginForm.password.value.toLowerCase();
  let wrongPassword = false;

  // possible errors

  if (!userName || !password) {
    alert("INPUTS MUST BE FILLED");
    return;
  }

  const validUser = userDataArray.find(
    (data) =>
      data.created_by.toLowerCase() === userName &&
      data.password.toLowerCase() === password
  );

  if (!validUser) {
    alert("Wrong password");
    return;
  }

  hideForm(loginForm);

  registerBtn.forEach((btn) => hideForm(btn));
  loginBtn.forEach((btn) => hideForm(btn));
  logoutBtn.forEach((btn) => displayForm(btn));

  document.querySelectorAll(".list").forEach((list) => displayForm(list));

  hideForm(document.querySelector(".humburger_menu"));

  localStorage.setItem("isLoggedIn", "true");
  displayContent(initialData);

  const curUser = userDataArray.filter(
    (name) => name.created_by.toLowerCase() === userName.toLowerCase()
  );
  currentUser = curUser;
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "index.html";
}

// if login button is clicked.
loginBtn.forEach((btn) => {
  btn.addEventListener("click", () => displayForm(loginForm));
});

// if login form is submitted.
loginForm.addEventListener("submit", loginFormSubmitHandler);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// WHEN LOGOUT BUTTON IS CLICKED

function logoutHandler() {
  logoutBtn.forEach((btn) => hideForm(btn));

  loginBtn.forEach((btn) => displayForm(btn));
  registerBtn.forEach((btn) => displayForm(btn));

  hideForm(document.querySelector(".humburger_menu"));

  document.querySelectorAll(".list").forEach((list) => {
    list.textContent !== "Home" && hideForm(list);
  });

  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

logoutBtn.forEach((btn) => {
  btn.addEventListener("click", logoutHandler);
});

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// CREATE POSTS

const createPost = document.querySelectorAll(".create_post");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("create_post")) {
    window.location.href = "create-post.html";
  }
});

if (isLoggedIn === "true") {
  loginBtn.forEach((btn) => hideForm(btn));
  registerBtn.forEach((btn) => hideForm(btn));

  logoutBtn.forEach((btn) => displayForm(btn));
  document.querySelectorAll(".list").forEach((list) => displayForm(list));
}

isLoggedIn === null
  ? displayContent(initialData.slice(-20))
  : displayContent(initialData);

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn_detail")) {
    if (isLoggedIn === null) {
      alert("Please login to see the post.");
      return;
    }

    const contentID = parseInt(
      e.target.parentNode.parentNode.getAttribute("id")
    );

    const post = initialData.filter((post) => contentID === post.id);
    localStorage.setItem("posts", JSON.stringify(post));
    window.location.href = "details.html";
  }
});
