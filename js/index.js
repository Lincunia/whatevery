import katex from "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.mjs";

function toRender(arg, id) {
  katex.render(arg, document.getElementById(id), {
    throwOnError: false,
  });
}

function KaTeXRenderWithAttributes(elmtParent, elmtChild, arg, id) {
  elmtChild.setAttribute("id", id);
  elmtParent.appendChild(elmtChild);
  elmtParent.appendChild(document.createElement("br"));
  toRender(arg, id);
}
function RenderInnerHTML(elmtParent, elmtChild, innerContent) {
  elmtChild.innerHTML = innerContent;
  elmtParent.appendChild(elmtChild);
}
function KaTeXRenderWithInnerHTML(
  elmtParent,
  elmtChild,
  innerContent,
  arg,
  id,
) {
  RenderInnerHTML(elmtParent, elmtChild, innerContent);
  toRender(arg, id);
}
export {
  KaTeXRenderWithAttributes,
  RenderInnerHTML,
  KaTeXRenderWithInnerHTML,
};

