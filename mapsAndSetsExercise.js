//What does the following code return?
new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}

//What does the following code return?
[...new Set("referee")].join("") // "ref"

//What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/*
Map(2) {
    [1, 2, 3] => true,
    [1, 2, 3] => false
    } */


//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length


//vowelCount
const vowelCount = str => {
    const vowels = 'aeiou';
    const map = new Map();

    for(const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }
    return map;
};