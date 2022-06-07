let clickCounter = 0;

const clickBtn = document.getElementById("btn");
const totalTitle = document.querySelector("#total-ttl");

function handleClick() {
  clickCounter = clickCounter + 1;
  totalTitle.innerText = `Total clicks: ${clickCounter}`;
}

clickBtn.addEventListener("click", handleClick);
