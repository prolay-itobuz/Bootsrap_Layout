console.log("Welcome to SEO Home Page");

let subscribeForm = document.getElementById("subscribeForm");

document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let usernameInput = document.getElementById("subscribeName");
    let emailInput = document.getElementById("subscribeEmail");
    const msgBox = document.getElementById("message");
    let nameBox = document.getElementById("namemsg");
    let emailBox = document.getElementById("emailmsg");
    let successBox = document.getElementById("success");

    if (usernameInput.value && emailInput.value) {
      const nameRegex = /^[A-Za-z\s]*$/;
      const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (nameRegex.test(usernameInput.value)) {
        if (mailRegex.test(emailInput.value)) {
          console.log("Username:", usernameInput.value);
          console.log("Email:", emailInput.value);

          subscribeForm.reset();
          successBox.classList.remove("demo-toast-animate-out");
          successBox.classList.add("demo-toast-animate-in");

          setTimeout(function () {
            successBox.classList.remove("demo-toast-animate-in");
            successBox.classList.add("demo-toast-animate-out");
          }, 3000);

          usernameInput.style.border = "1px solid #c3c6d0";
          emailInput.style.border = "1px solid #c3c6d0";
          msgBox.style.display = "none";
        } else {
          emailInput.style.border = "1px solid red";

          msgBox.style.display = "none";
          nameBox.style.display = "none";
          emailBox.style.display = "Block";
          emailBox.innerHTML = "* Please Enter a Valid Email.";
        }
      } else {
        usernameInput.style.border = "1px solid red";
        msgBox.style.display = "none";
        emailBox.style.display = "none";
        nameBox.style.display = "block";
        nameBox.innerHTML = "* Please Enter a Valid Name.";
      }
    } else {
      msgBox.style.display = "block";
      emailBox.style.display = "none";
      nameBox.style.display = "none";
      msgBox.innerHTML = "* Please Fill The Form Before Submit.";
    }
  });
