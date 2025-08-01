const arr = [1,2,3,4,5,6]
//Polyfills

//.forEach
if(!Array.prototype.myForEach){
    Array.prototype.myForEach= function(userFn){
        const originalArr = this
        for (let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i],i)            
        }
    }
}

arr.myForEach(function(value,index){
    console.log(`Value at Index ${index} is ${value}`);
    
})

//.map
if(!Array.prototype.myMap){
    Array.prototype.myMap= function(userFn){
        const result =[]

        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i],i)
             result.push(value);          
        }
        return result
    }
}

const n = arr.map((e)=> e*2);
console.log(n);

console.log(arr);

const n2 = arr.myMap((e) => e * 3);
console.log(n2);


//.filter()
const arr1 = [1, 2, 3, 4, 5, 6];

const n3 = arr1.filter((e)=> e % 2 == 0)
console.log(n3);


if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = []
        for (let i = 0; i < this.length; i++) {
            if(userFn(this[i]) ){
                result.push(this[i])
            }           
        }
        return result;
    };
}

const n4 = arr.myFilter((e) => e % 2 == 0);
console.log(n4);
