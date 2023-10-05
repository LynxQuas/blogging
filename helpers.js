export function formatDate(time) {
  const date = new Date(time);

  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return date.toLocaleString("en-US", options);
}

// function for hide the registerForm
export function hideForm(target) {
  target.classList.add("hidden");
}

// function for display the register form.
export function displayForm(target) {
  target.classList.remove("hidden");
}
