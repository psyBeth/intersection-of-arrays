alert("Check the console to see the intersection of two Javascript arrays.")

function findIntersection(array1, array2){
    return array1.filter(item => array2.includes(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = findIntersection(array1, array2);
console.log(result);
