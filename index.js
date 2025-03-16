const element = document.querySelector("main#main");
if (element) {
  element.remove();
}
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Emmanuel is the champion";
document.body.append(newHeader);

