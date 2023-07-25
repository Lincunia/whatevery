import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.mjs';
document.addEventListener('DOMContentLoaded', ()=>{
  const myMappings = [
    ['a', 'y = x^2', '../images/pic1.png'],
    ['b', 'y = x^2 +3', '../images/pic2.png'],
    ['c', 'y = x^2 -3', '../images/pic3.png'],
    ['d', 'y = \\left(x+3\\right)^2', '../images/pic4.png'],
    ['e', 'y = \\left(x-3\\right)^2', '../images/pic5.png'],
    ['f', 'y = 3x^2', '../images/pic6.png'],
    ['g', 'y = -3x^2', '../images/pic7.png'],
    ['h', 'y = \\frac{x^3}{3}', '../images/pic8.png'],
    ['i', 'y = \\left(x-3\\right)^2 +2', '../images/pic9.png'],
    ['j', 'y = -\\left(x-3\\right)^2 +2', '../images/pic10.png']
  ];
  const pics=document.getElementById('pictures');
  for(const val of myMappings){
    const newElmt=document.createElement('div');
    newElmt.innerHTML=`<div class="uk-background-muted uk-padding uk-panel">
              <p id="${val[0]}" style="color: black"></p>
              <div
                class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
                data-src="${val[2]}"
                uk-img
              ></div>
            </div>`;
    pics.appendChild(newElmt)
    katex.render(val[1], document.getElementById(val[0]), {
      throwOnError: false,
    });
  }
});
