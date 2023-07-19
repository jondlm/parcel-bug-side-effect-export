import { tokens } from "./tokens";

const passFail =
  tokens?.color?.blue != null
    ? "✅ PASS"
    : "❌ FAIL - see `src/tokens.js` for fixes";

const appElement = document.querySelector("#app");
const preElement = document.createElement("pre");

appElement.appendChild(preElement);
preElement.innerText = `${passFail}\n\n${JSON.stringify(tokens, null, 2)}`;
