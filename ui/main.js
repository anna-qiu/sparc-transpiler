// import "../_build/default/transpile.bc.js";
import "./transpile.js";

const orig = document.querySelector("#original_code");
const convert = document.querySelector("#convert");
const tabs = document.querySelector("#tab_size");
const chars = document.querySelector("#char_limit");
const out = document.querySelector("#processed_code");
convert.addEventListener('click', (e) => {
  const code = orig.innerText.trim().replace(/\s+/g, ' ');
  const ts = parseInt(tabs.innerText);
  const cs = parseInt(chars.innerText);
  out.innerText = "thinking...";
  try {
    // out.innerText = transpile(code,ts,cs);
    out.innerHTML = Prism.highlight(transpile(code,ts,cs), Prism.languages.sml, 'sml');
  } catch (e) {
    out.innerText = e;
  }
});

document.querySelector("#fun_button").addEventListener('change', (e) => {
  document.querySelector("body").classList.toggle("fun");
});