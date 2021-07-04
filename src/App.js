import _ from "lodash";
import "./app.css";

const App = ({ name, man }) => {
  return `

  <div class="app-main-div">
    <div class="main-img-div">
    <img src="${man}"  alt="build icon" />
    </div>
    <h2> ${_.join(["Welcome,", name], " ")} </h2>
    </div>
    <p class="app-editing-tag"> Start Editing Files in src folder to see Chenges </p>
   
    `;
};

export default App;
