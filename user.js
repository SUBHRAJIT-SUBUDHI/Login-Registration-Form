const users = [];

function registerUser(username, password) {
  if (users.some((user) => user.username === username)) {
    alert("Username is already taken. Please choose a different one.");
    return false;
  }

  const user = { username, password };
  users.push(user);
  return true;
}

function loginUser(username, password) {
  const user = users.find((user) => user.username === username);

  if (user && user.password === password) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (registerUser(username, password)) {
      alert("Registration successful!");
      document.getElementById("registrationForm").reset();
    }
  });

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  loginUser(username, password);

  document.getElementById("loginForm").reset();
});
