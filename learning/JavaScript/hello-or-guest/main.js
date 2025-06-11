function greetUser() {
  let userName = prompt("Please enter your name:");
  let greeting = "Hello";

  if (userName === null || userName.trim() === "") {
    userName = "You, why not entering your name?!!";
    greeting = `${greeting} ${userName}!`;
    document.getElementById("output").innerHTML = `
      <p>${greeting}</p>
      <iframe src="https://giphy.com/embed/H4zeDO4ocDYqY" width="480" height="360" frameborder="0" class="giphy-embed" allowfullscreen></iframe>
      <p><a href="https://giphy.com/gifs/robot-lucy-orangutan-H4zeDO4ocDYqY">via GIPHY</a></p>
    `;
  } else {
    greeting = `Hello, ${userName}!`;
    document.getElementById("output").innerHTML = `
  <p>${greeting}</p>
  <img src="https://media.giphy.com/media/wYpiTsv2OCUs17cNl1/giphy.gif" width="480" height="480" />
  <p><a href="https://giphy.com/gifs/you-did-it-rainbow-bridge-the-wYpiTsv2OCUs17cNl1">via GIPHY</a></p>
`;
  }

  alert(greeting);
}
