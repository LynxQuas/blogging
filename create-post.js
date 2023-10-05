const createPostContainer = document.getElementById("create_post-root");
const btnUpload = document.querySelector(".upload");
const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
const initialData = JSON.parse(localStorage.getItem("init_data"));

document.querySelector(".userName").textContent = currentUserData[0].created_by;

const checkInputs = (title, url, text) => {
  if (!title || !url || !text) {
    alert("Empty inputs");
    return false;
  }

  return true;
};

const uploadHandler = (e) => {
  const title = document.querySelector("#title").value;
  const imageUrl = document.querySelector("#image_url").value;
  const contentText = document.querySelector("#content_text").value;

  if (!checkInputs(title, imageUrl, contentText)) return;

  const id = initialData[initialData.length - 1].id;
  console.log(id);

  const uploadData = {
    id: id + 1,
    title,
    image_url: imageUrl,
    content: contentText,
    created_at: new Date(),
    created_by: currentUserData[0].created_by,
  };

  initialData.push(uploadData);
  console.log(initialData);

  window.location.href = "index.html";
  localStorage.setItem("init_data", JSON.stringify(initialData));
};

btnUpload.addEventListener("click", uploadHandler);
