function checkPasswordStrength() {
  const strengthMessage = document.getElementById("strengthMessage");
  const password = document.getElementById("password").value;
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  const strengths = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
  const colors = ["red", "orangered", "orange", "green", "lightgreen"];

  strengthMessage.textContent = strengths[strength];
  strengthMessage.style.color = colors[strength];
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("yearSpan").textContent = new Date().getFullYear();
});
