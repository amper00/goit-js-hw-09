
const form = document.querySelector("form");
const localStorageKey = "feedback-form-state";

const textarea = form.elements.message;
const email = form.elements.email;


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
email.value = savedData.email || "";
textarea.value = savedData.message || "";


form.addEventListener("input", () => {
    const formData = {
        email: email.value,
        message: textarea.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

   
    const formData = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(formData);


    localStorage.removeItem(localStorageKey);
     form.reset();
});
