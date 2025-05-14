const generateBtn = document.getElementById("generate-btn");
const colorBox = document.getElementById("color-box");
const colorCode = document.getElementById("color-code");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + hex.padStart(6, "0");
}

function setColor() {
  const color = getRandomColor();
  colorBox.style.backgroundColor = color;
  colorCode.textContent = color;

  // Adjust text color based on background brightness
  colorCode.style.color = getBrightness(color) < 128 ? "#fff" : "#000";
}

function getBrightness(hexColor) {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

// Generate on click
generateBtn.addEventListener("click", setColor);

// Copy to clipboard on color box click
colorBox.addEventListener("click", () => {
  navigator.clipboard.writeText(colorCode.textContent);
  alert("Color copied: " + colorCode.textContent);
});

// Generate first color on load
setColor();
