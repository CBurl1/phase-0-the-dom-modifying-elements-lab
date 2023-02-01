let main = document.getElementById("main")
main.parentNode.removeChild(main)

let newHeader = document.createElement("h1")
document.body.appendChild(newHeader);

const victory = document.getElementById(victory)
newHeader.setAttribute("id", "victory")
victory.textContent = "Collin Burleigh is the champion"