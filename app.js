let forms = document.getElementsByClassName("email-form");

for (let form of forms) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  });
}
