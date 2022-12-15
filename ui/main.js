import "../_build/default/transpile.bc.js";

console.log(transpile);
// console.log(transpile(""));

console.log(add);

const i = document.querySelector("#in");
const o = document.querySelector("#out");
i.addEventListener('change', (event) => {
  const val = i.value;
  o.innerText = transpile(val);
});