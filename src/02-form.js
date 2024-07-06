
const form = document.querySelector("form");
const localStorageKey = "feedback-form-state";

const textarea = form.elements.message;
const email = form.elements.email;


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
email.value = savedData.email || "";
textarea.value = savedData.message || "";


form.addEventListener("input", () => {
    const formData = {
        email: form.elements.email.value,
        message: form.elements.message.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailCheck = form.elements.email.value;
    const messageCheck = form.elements.message.value;

    if (emailCheck === "" || messageCheck === "")
    { alert("uzupełnij puste pola;)");
    return;}
        
    const formData = JSON.parse(localStorage.getItem(localStorageKey));
    console.log(formData);


    localStorage.removeItem(localStorageKey);
     form.reset();
});
