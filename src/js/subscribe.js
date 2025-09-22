console.log("Welcome to SEO Home Page");

let subscribeForm = document.getElementById("subscribeForm");
document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let usernameInput = document.getElementById("subscibeName");
    let emailInput = document.getElementById("subscibeEmail");

    if (usernameInput.value && emailInput.value) {
      console.log("Username:", usernameInput.value);
      console.log("Email:", emailInput.value);

      subscribeForm.reset();
      alert("Form Successfully Submitted.");
    }
    else{
        alert("Please Fill The Details Bellow.");
    }
  });
