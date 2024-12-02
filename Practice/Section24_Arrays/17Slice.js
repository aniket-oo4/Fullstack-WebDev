// [].slice(startIndex,endIndex); / returnnew  array 
// Selects the element  starting at the given 'startIndex' ,argument and
// ends at ,but does not include   the given 'endIndex ' argument;

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

var p2=products.slice(2,5); // return from index 2 to 4;
console.log(p2);

