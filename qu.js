/*

let y = "duh ok";
console.log(y.charAt(4)); // or (y.[4]) same same but diff.



let x = prompt(" hoyaaaa");
console.log(x);

// checking of di divisibility of a no. by prompt
let a = prompt("enter a no. gndi");
if ( a % 5 === 0)
{
    console.log("multiple of 5");
}
else
{
    console.log("not multiple of 5");
}   

let g = 65;
if ( 0 <= g && g <= 49 )
{
    console.log("F");
}
else if ( 50 <= g && g <= 59)
{
    console.log("D");
}
else if ( 60 <= g && g <= 69)
{
    console.log("C");
}
else if ( 70 <= g && g <= 89)
{
    console.log("B")
}
else
{
    console.log("A");
}

// Q for print all even no. below 100 
for(let i=0; i<100; i++)
{
    if (i%2===0)
    {
    console.log("i =", i);
    i++;
    }
}

for(let i=0; i<100; i++)
{
    if (i%2===1)
    {
    console.log("i =", i);
    i++;
    }
}

// game create kr no. wala boi
let gameno = 25;
let userno = prompt("Guess the no. boi");
while(userno != gameno)
{
   userno = prompt("That's not the one boi, try another one!");
}
console.log("badhai ho beta tum safal hue, ye shi no h");

// find the length of the input text 
jik = "okbahinode";
console.log(jik); //after output write jik.length and get the length of the text 

let jj = prompt("enter your full name without any space for simplification ");
console.log(jj);
let uu = "@" + jj + jj.length ;
console.log(uu);

let price = [ 250, 645, 300, 900, 50];
let i = 0;
for(let v of price)
{
    console.log(`price of the item ${i+1} = ${v}`);
    let o = v*10/100;
    price[i] = price[i] - o;
    console.log('new price of item =', price[i])
    i++
}

let a = [ 2,3,4];
let sum = 0;
for(let i =0; i<a.length; i++)
{
    sum = sum + a[i];
   // sum++;                // this sum making value of sum +1 more;
}
console.log(sum);

let a = [ 5, 5, 6, 8 ];
let b = [ "abhi", "rwt", "011" ]; // IN JS THE VALUE OF 011 IS ASSIGNED AS 9
console.log(a.concat(b));

let a = [ 5, 5, 6, 8 ];
for(let i = 0; i<a.length; i++)
{
    if(6===a[i])
    {
        console.log("the no. is in the array.");
    }
    else
    {
        console.log("the no. is not in the array.");
    }
} 

let a = [ 5, 5, 6, 8 ];
    if(a.includes(8))
    {
        console.log("the no. 8 is in the array a .");
    }
    else 
    {                                                       // includes 
        console.log("the no. 8 is not in the array a .");
    }

let you = [ 2,4,5,6,7,8,];
console.log(`the first no. is ${you[0]} and the second last no. is ${you[ you.length - 2 ]}`);

let arr = [ 5, 69, 7, 8, 11, 19, 2, 3];
let largest = 0;
for(let i = 0; i<arr.length; i++)
{
    if(largest < arr[i])                       // find largest no. in an array
        {
            largest = arr[i];
        }
}
console.log(`largest number in the array is ${largest}`);

let arr = [ 5, 6, 7, 8, 11, 19, 2, 3];
let smallest = arr[1];
for(let i = 0; i<arr.length; i++)
{
    if(smallest > arr[i])                       // find largest no. in an array
        {
            smallest = arr[i];
        }
}
console.log(`smallest number in the array is ${smallest}`);

let a = prompt(" wirte your age ");
let days = 365*a;
console.log(days);

let r = [9];
let y = [7];
let a = r.concat(y);                // concat only applicable for strings 
console.log(a);

// Q on array and array methods

let ryy = [ [1,2], [3,4], [8,9]];
let yy = ryy.flat();         
console.log(yy);

// find duplicate terms in a array

let yo = [ 2, 3, 4, 9, 0, 2, 5, 4, 9];
for(let i=0; i<yo.length; i++)
{
    for(let j=i+1; j<yo.length; j++)
    {
        if(yo[i]===yo[j])
        {
            console.log("duplicate element =", yo[i]);
        }
    }
}

let uu = [ 1,3,5,7,8,2,9 ];
for(let i of uu)
{
    if(i>4)
    {
        console.log(`no. greater then 4 is ${i},`);
    }
}
*/

// to check weather all elements are uniques






























































































































































































































































