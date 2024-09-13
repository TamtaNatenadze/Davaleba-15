function register() {
  let name = prompt("ჩაწერეთ თქვენი სახელი:");
  let password = prompt("ჩაწერეთ თქვენი პაროლი:");
  if (name === "admin" && password === "1234") {
      alert("Hello Admin");
  } else {
      alert("Hello guest");
  }
}
register();
