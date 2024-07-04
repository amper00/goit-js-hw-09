const form = document.querySelector("form");
const localStorageKey = "feedback-form-state";
const textarea = form.elements.message;
const email = form.elements.email;


textarea.value = localStorage.getItem(localStorageKey);

form.addEventListener("input", event =>
{
    localStorage.setItem(localStorageKey, event.target.value);


    }
)

form.addEventListener("submit", event =>
{
    event.preventDefault();
    console.log(event.target.elements.message.value);
    
    form.reset();

    }
)


