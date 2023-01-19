// Show the appropriate section when a button is clicked
document.getElementById("home-button").addEventListener("click", function() {
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
});

document.getElementById("about-button").addEventListener("click", function() {
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "block";
});
