function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cfb3738ab8aab7fec482474d490to0a6";
  let prompt = `User Instructions: Generate poem about corporate life using the theme in ${instructionsInput.value}`;
  let context = `You are a corporate poem writer and write about corporate life. Do not be unnecessarily optimistic, you are representing the jaded and burnt out corporate employee. Stick to four lines. Include the topic in ${instructionsInput.value}.Follow User Instructions. Please format the poem with <br/> between each verse, except the last one`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating blink">📝Writing your poem about corporate grind under the theme: ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
