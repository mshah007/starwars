const person = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let character = Math.ceil(Math.random() * 40) + 1;
  let url = `https://swapi.dev/api/people/${character}/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayDetails(data);
    });
});
function displayDetails(data) {
  datastring = `name: ${data.name} 
  height: ${data.height} 
  hair color: ${data.hair_color}
  eye color: ${data.eye_color}`;
  person.innerText = datastring;
}
