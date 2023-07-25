import katex from 'katex';

const element = document.getElementByTagName('p')

katex.render("(a+b)^2 = (a+b)(a+b)", element, {
    throwOnError: false
});
