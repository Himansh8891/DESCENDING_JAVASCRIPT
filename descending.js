function descending(array)
{
    array.sort((a,b) => b-a);
    //arr.reverse();
    return array;
}
let arr=[34,56,22,44,54,64];
console.log(descending(arr));
