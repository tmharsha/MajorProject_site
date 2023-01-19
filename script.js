window.onload = function() {
  // Show the appropriate section when a button is clicked
  document.getElementById("home-button").addEventListener("click", function() {
    document.getElementById("home").style.display = "block";
    document.getElementById("home").style.backgroundColor = "#F5F5DC";
    document.getElementById("home").style.color = "#000000";
    document.getElementById("home").style.borderRadius = "25px"; //add rounded corners
    document.getElementById("home").style.fontSize = "20px"; //increase font size
    document.getElementById("home").style.padding = "30px"; //add padding
    document.getElementById("about").style.display = "none";
  });

  document.getElementById("about-button").addEventListener("click", function() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("about").style.backgroundColor = "#F5F5DC";
    document.getElementById("about").style.color = "#000000";
    document.getElementById("about").style.borderRadius = "25px"; //add rounded corners
    document.getElementById("about").style.fontSize = "20px"; //increase font size
    document.getElementById("about").style.padding = "30px"; //add padding
  });
};
