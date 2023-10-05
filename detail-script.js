import { formatDate, hideForm, displayForm } from "./helpers.js";

const [user] = JSON.parse(localStorage.getItem("currentUser"));
const [post] = JSON.parse(localStorage.getItem("posts"));
const root = document.querySelector("#detail_root");
const initialData = JSON.parse(localStorage.getItem("init_data"));

const [currentUser] = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser.created_by.toLowerCase() === post.created_by.toLowerCase()) {
  root.innerHTML = `
<div class="content" id="${post.id}">


    <img src="${post.image_url}" alt="blog">

<div class="content_text-container">
    <div class="user_name">
        <span class="normal">Created by:</span>
        <span>${post.created_by}</span>
    </div>
    <h3 class="title"> ${post.title}</h3>
    <input type="text" placeholder="title" class="edit_title hidden" value=" ${
      post.title
    }"/>

    <div class="content_info">
        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/>
        </svg>

        <span class="date">${formatDate(post.created_at)}</span>
    </div>
    <p class="content_text">${post.content}</p>
    <input type="text" placeholder="content" class="edit_content hidden" value="${
      post.content
    }"/>

    <div class="btn_container">
        <button class="btn_edit">EDIT</button>
        <button class="btn_delete">DELTE</button>
        <button class="btn_save">SAVE</button>
    </div>
</div>
</div>

`;
} else {
  root.innerHTML = `
<div class="content" id="${post.id}">


    <img src="${post.image_url}" alt="blog">

<div class="content_text-container">
    <div class="user_name">
        <span class="normal">Created by:</span>
        <span>${post.created_by}</span>
    </div>
    <h3 class="title"> ${post.title}</h3>
    <input type="text" placeholder="title" class="edit_title hidden" value="${
      post.title
    }"/>

    <div class="content_info">
        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/>
        </svg>

        <span class="date">${formatDate(post.created_at)}</span>
    </div>
    <p class="content_text">${post.content}</p>
    <input type="text" placeholder="content" class="edit_content hidden" value=${
      post.content
    }/>
    <button class="btn_home">Home</button>
</div>
</div>

`;
}

document.addEventListener("click", (e) => {
  const editTitle = document.querySelector(".edit_title");
  const editContent = document.querySelector(".edit_content");

  if (e.target.classList.contains("btn_edit")) {
    hideForm(document.querySelector(".title"));
    displayForm(editTitle);

    hideForm(document.querySelector(".content_text"));
    displayForm(editContent);

    editTitle.autofocus = true;
  }

  if (e.target.classList.contains("btn_save")) {
    const currentPost = {
      ...post,
      title: editTitle.value,
      content: editContent.value,
    };

    const updatedData = initialData.map((data) =>
      data.id === post.id ? currentPost : data
    );
    localStorage.setItem("init_data", JSON.stringify(updatedData));

    window.location.href = "index.html";
  }

  if (e.target.classList.contains("btn_delete")) {
    displayForm(document.querySelector(".alert_bg"));
  }

  if (e.target.classList.contains("delete_alert")) {
    hideForm(document.querySelector(".alert_bg"));
  }

  if (e.target.classList.contains("yes")) {
    const updatedArray = initialData.filter((data) => data.id !== post.id);
    localStorage.setItem("init_data", JSON.stringify(updatedArray));

    window.location.href = "index.html";
  }

  if (e.target.classList.contains("no")) {
    hideForm(document.querySelector(".alert_bg"));
  }

  if (e.target.classList.contains("btn_home")) {
    window.location.href = "index.html";
  }
});
