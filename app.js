const numbers = [1,2,4,6,9];
const words = ['this', 'that', 'birds', 'dogs'];
const letters = ['a', 'b', 'c', 'e', 'i', 'd'];
const people = [
    {name: 'Anna', isCool: true}, 
    {name: 'Emma', isCool: true}, 
    {name: 'Chris', isCool: false}, 
    {name: 'Nico', isCool: false}];


// -----------------------forEach-------------------------------

function doubleValues(arr){
    let dubVals = [];
    arr.forEach(function(vals){
        dubVals.push(vals * 2);
    });
    return dubVals;
};


function onlyEvenValues(arr){
    let evens = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            evens.push(val);
        }
    });
    return evens;
};


function showFirstAndLast(arr){
    let firstLast = [];
    arr.forEach(function(val){
        firstLast.push(`${val[0]}${val[val.length-1]}`)
    });
    return firstLast;
};


function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
};


function vowelCount(str){
    let newArr = str.split(' ');
    let vowels = 'aeiou';
    let fin = {};
    let count = 0;
    
    newArr.forEach(function(val){
        for(let i = 0; i < str.length; i++){
            if(val[i] !== vowels){
                count = 0;
            }
            else if(val[i] === vowels.split(' ')){
                count += 1;
                val[i] = count;
            }
        }
    })
    return fin;
};


// ---------------------------Map--------------------------------

function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val * 2;
    });
};


function valTimesIndex(arr){
    return arr.map(function(val, i){
        return val * i;
    });
};


function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
};


function extractFullName(arr, first, last){
    return arr.map(function(val){
        return val[first].concat(' ', val[last]);
    });
};



// -----------------------------filter----------------------------


function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
};


function find(arr, val){
    return arr.filter(function(value){
        if(val === value){
            return val;
        }
        else if(val !== value){
            return undefined;
        }
    });
};


function findInObj(arr, key, value){
   return arr.filter(function(val){
    if(val.key === true){
        return val.key
    }
   })
};


function removeVowels(str){
    let newArr = str.split('', str.length)
    let vows = 'aeiou'
    return newArr.filter(function(val){
        return vows.indexOf(val) === -1;
        
    })
    .join('');
};


function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(valu){
        return valu * 2;
    });
};