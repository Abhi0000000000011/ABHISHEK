// let a = document.querySelector("div");
// console.dir(a);

// a.innerText = a.innerText + "  jai shree Ram"; // we are conactenating ie adding here


let b = document.querySelectorAll("div");
console.dir(b);
let ind = 1;
for(i of b)
{
    i.innerText = `new unique value is ${ind}`;
    ind++;
}
// change the text of div in html by js


