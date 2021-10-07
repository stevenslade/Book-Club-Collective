const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#user-user-name").value.trim();
  const email = document.querySelector("#user-email").value.trim();
  const password = document.querySelector("#user-password").value.trim();
  const confirmPassword = document
    .querySelector("#user-password-confirm")
    .value.trim();
  const faveGen = document.querySelector("#user-faveGenre").value.trim();
  const faveBook = document.querySelector("#user-faveBook").value.trim();
  const faveQ = document.querySelector("#user-faveQuote").value.trim();

  if (name && email && password && (password === confirmPassword)) {
      const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        faveGen,
        faveBook,
        faveQ,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("success");
      document.location.replace("/profile");
      // rerouted to home
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector(".register-form").addEventListener("submit", signupFormHandler);
