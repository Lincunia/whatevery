import katex from "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.mjs";
const txt = '((a+b)^2 = a^2 + 2ab + b^2\\\\ (a-b)^2 = a^2 - 2ab + b^2\\\\ (a+b)(a-b) = a^2 - b^2',
  elmt = document.getElementById("koopa");

katex.render(txt, elmt, {
  throwOnError: false,
});
