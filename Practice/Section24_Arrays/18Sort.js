// [].sort();// sorts in ascending alphabetically by default

// [].sort( function(a,b){ return 0,1 or -1}); // comparer function include comparison logic 
//returns  then 
// less than 0 : a comes first ;and then b;
// equal to 0   : a and b are left unchaged ;
// greater than 0 : b comes first ; and then a;


// / sort-numerical array

var numericalArray = [56, 3, 5, 32, 66, 24, 710];
console.log("before Sorting :", numericalArray);
numericalArray.sort(
    (a, b) => {
        return a - b;
    }
);
// console.log("after Sorting :",numericalArray ); //asceding

// descending sorting 
numericalArray.sort(
    (a, b) => {
        return (a - b) * -1;
    }
);
// or use reverse
// numericalArray.reverse();
console.log("after Descending Sorting :", numericalArray); //asceding



// sort- string array ;

var stringArray = ["jane", "allen", "Ford", "smith", "Doe"];
console.log("before Sorting :", stringArray);
stringArray.sort(
    (a, b) => {
        if (a > b) { // compares ascii
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        else {
            return 0;
        }
    }
)
// Capital letters always comes before small letters 
// ASII :  A-Z: 65-90;   a-z :97-122
console.log("after Ascending Sorting :", stringArray);

// stringArray.reverse();
stringArray.sort(
    (a, b) => {
        if (a > b) { // compares ascii
            result = 1;
        }
        else if (a < b) {
            result = -1;
        }
        else {
            result = 0;
        }
        return (result * -1);
    }
)
console.log("after descending  Sorting :", stringArray);


// sort object arrays

var products = [
    { id: 1, productName: 'TV', price: 5000 },
    { id: 2, productName: 'Monitor', price: 1200 },
    { id: 3, productName: 'iPad', price: 2000 },
    { id: 4, productName: 'Phone', price: 1800 },
    { id: 5, productName: 'imax', price: 5000 },
    { id: 6, productName: 'fan', price: 12004 },
    { id: 7, productName: 'cooler', price: 5000 },
    { id: 8, productName: 'Phacone', price: 1780 }
];

// console.log("before Sorting ",products)
// //based on numeric property
products.sort((a, b) => { return a.price - b.price; });
console.log("after Sorting ", products)
products.sort((a, b) => { return (a.price - b.price) * -1; });
// products.reverse();
console.log("after Desceding  based on price  ", products)


// based on string property 
// products.sort(
//     (a, b) => {
//         if (a.productName> b.productName) { // compares ascii
//             return 1;
//         }
//         else if (a.productName < b.productName) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     }
// )
// console.log("after ascending  ased on string name  ",products)


//descending sorting
products.sort(
    (a, b) => {
        let result;
        if (a.productName > b.productName) { // compares ascii
            result = 1;
        }
        else if (a.productName < b.productName) {
            result = -1;
        }
        else {
            result = 0;
        }

        return result *= -1;
    }
);
console.log("after Descending  ased on string name  ", products)



// // let arr=["10","22","3",'4',"55","33","644","65","24","553","9","7","443"];
// let arr=[10,22,3,4,55,33,644,65,24,553,9,7,443];

// console.log(arr);

// arr=arr.sort();//without comparer parameter
// console.log("Without comparer :\n"+arr)

// arr=arr.sort(myComparer);// comparer function passed
// console.log("after sorting with comparer  ::\n"+arr);

// function myComparer (a,b){
//     return a-b;
// }
// /*
// a=10,b=2
// a-b=8 positive swap a=b b=a;| value>next
// a=10,b=12
// a-b=-2 negative  no swap pass key forward  |value<next
// a=10,b=10;
// a-b=0 0 matched value no swap |  value==next

// */