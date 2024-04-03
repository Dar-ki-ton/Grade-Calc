// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", calc);

function calc() {
  let mark1 = parseInt(document.getElementById("css1").value);
  let mark2 = parseInt(document.getElementById("sp1").value);
  let mark3 = parseInt(document.getElementById("sp2").value);
  let mark4 = parseInt(document.getElementById("css2").value);
  let mark5 = parseInt(document.getElementById("project").value);

  let average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

  document.getElementById("percent").innerHTML = average;
}
