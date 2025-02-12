var noBtn = document.getElementById("noBtn");
var yesBtn = document.getElementById("yesBtn");

var messageContent = [
  "Are you sure ?",
  "Can you please date me ?",
  "Click Yes",
  "You have no choice! Click yes",
];
var gifLink = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnY0Z2owaGVkMm52cTlxNTc3ZWhmNmkzM214Z3p2bGJuYXg2dDdvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JtB1e6rnzVEOKV4Ox2/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHk5bGxzbndrczFlbGh4bWhxeTMwc212OHVndHpxdWRwbWsxazk2NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fqTl8YsjVPm7bjBJTT/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXEwbjV5cDU2YjFsaGw3dDBtYjR1cGptcXQyYmFxY2Z2NndlbnRnYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AOitRwIgx2wcOxZaIH/giphy.gif",
  "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5xYXNjMHd1NTNqcHd3anExeTY5bXA1MGwzN3J6cDk2emxldW91dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kKUoc5lhM1OrkZcMeT/giphy.gif",
];
var counter = 0;

noBtn.addEventListener("click", () => {
  if (counter > 3) {
    counter = 0;
  }
  document.getElementById("display-img").src = gifLink[counter];
  document.getElementById("msg").innerHTML = messageContent[counter];
  counter++;
});

yesBtn.addEventListener("click", () => {
  document.getElementById("display-img").src =
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnJ1NDZiOHVzZW8yM2VzM2s2ZDA4bzFqeml4MG4xNHhpYnVvamliayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oz8xsaLjLVqVXr3tS/giphy.gif";
  document.getElementById("msg").innerHTML =
    "Yaaaaay I LOVE YOU !<br> See you on Feb 15, 2025!";
  document.getElementById("contentFooter").classList.add("d-none");
});
