const cells = document.querySelectorAll("td");
let currentPlayer = "X";

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (e.target.textContent === "") {
      e.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});
