// Signup
function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  if (name === "" || email === "") {
    msg.textContent = "Fadlan buuxi dhammaan meelaha!";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Waad isdiiwaangelisay si guul leh!";
  msg.style.color = "green";
}

// Voting
let a = 0, b = 0, c = 0;

function vote() {
  let selected = document.querySelector('input[name="candidate"]:checked');
  let message = document.getElementById("message");

  if (!selected) {
    message.textContent = "Fadlan dooro musharax!";
    message.style.color = "red";
    return;
  }

  if (selected.value === "A") {
    a++;
    document.getElementById("a").textContent = a;
  }
  if (selected.value === "B") {
    b++;
    document.getElementById("b").textContent = b;
  }
  if (selected.value === "C") {
    c++;
    document.getElementById("c").textContent = c;
  }

  message.textContent = "Waad ku mahadsan tahay codkaaga!";
  message.style.color = "green";
  selected.checked = false;
}