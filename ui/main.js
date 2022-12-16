// import "../_build/default/transpile.bc.js";
import "./transpile.js";

// console.log(transpile);
// console.log(transpile(""));

// console.log(add);

const orig = document.querySelector("#original_code");
const convert = document.querySelector("#convert");
const out = document.querySelector("#processed_code");
convert.addEventListener('click', (e) => {
  const code = orig.innerText.trim().replace(/\s*\n/g, '\n');
  console.log(code);
  try {
    out.innerText = transpile(code);
  } catch (e) {
    out.innerText = e;
  }
});