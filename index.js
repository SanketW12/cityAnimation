



document.addEventListener("keydown", function(event) {
  event.preventDefault();
  const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
  switch (key) { // change to event.key to key to use the above variable
    case "ArrowLeft":
      // Left pressed
      alert("Left");
      break;
    case "ArrowRight":
      // Right pressed
        alert("Right");
      break;
    case "ArrowUp":
      // Up pressed
      alert("up");
      break;
    case "ArrowDown":

      // Down pressed

    document.getElementById("cara").style.bottom="100px";

      break;
  }
});
