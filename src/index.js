import "./index.css";
import welcome from "./welcome.jpg";
import man from "./man.jpg";
let root;

function init() {
  root = document.getElementById("root");
  root.innerHTML = `
  <h2 class="learning-tag-home">Learning WebPack from Neog</h2>
  <div class="welcome-img-div">
  <img src="${welcome}" />
  </div>

  <div class="enter-input-div">
  <label for="FirstName">Your Sweet Name:</label>
  <input type="text" id="FirstName" name="firstName" placeholder="Enter Your Name here..."><br>
  <button id="about">Welcome Me !</button>
  <div id="route"></div>
  </div>
  `;
}

init();

const btn = document.querySelector("#about");
btn.addEventListener("click", loadShow);

function loadShow() {
  import("./App").then(({ default: App }) => {
    var first = document.getElementById("FirstName").value;
    const about = App({ name: `${first}`, man: `${man}` });
    document.querySelector("#route").innerHTML = about;
  });
}
