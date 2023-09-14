import katex from "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.mjs";

export function renderFormula(arg, id) {
  katex.render(arg, document.getElementById(id), {
    throwOnError: false,
  });
}

