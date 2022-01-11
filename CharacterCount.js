const occurenceByReduce = (param) => {
    return [...param].reduce((result, nextChar) => { 
            result[nextChar] = result[nextChar] ? result[nextChar] + 1 : 1; 
            return result 
        }, {}); 
}
console.log(occurenceByReduce("How are you?"));
// output
// {H: 1, o: 2, w: 1, " ": 2, a: 1, …}