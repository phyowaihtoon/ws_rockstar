function getTotal(num){
    let total=0;
    for(let n=1;n<=num;n++){
        total +=n;
    }

    return total;
}

const callback= () => { console.log("setTimeout >> Total :",getTotal(100)) };

console.log("setTimeout >> Some Processes");
setTimeout(callback, 1);
console.log("setTimeout >> More Processes");

async function getTotalAsync(){
    const result = await getTotal(1000000000);
    console.log("Async & await >> Total :",result);
}

console.log("Async & await >> Some Processes");
getTotalAsync();
console.log("Async & await >> More Processes");


const getTotalPromise = new Promise( (resolve,reject) => {
    const result = getTotal(test);
    if(result) resolve(result);
    else reject("Failed to execute");
} );


console.log("Promise >> Some Processes");
// getTotalPromise.then( result => console.log("Promise >> Total :",result))
//                  .catch(error => console.log("Promise >> system cannot process data"));
getTotalPromise.then( result => console.log("Promise >> Total :",result), error => console.log("system cannot process data"));
console.log("Promise >> More Processes");


function getUserData(){
    var url="https://jsonplaceholder.typicode.com/todos/1";
    fetch(url).then( res => res.json(), () => console.log("Failed to fetch api"))
              .then( data => {
                //result = JSON.stringify(list);
                console.log("Fetch result :", data);
                return data.title;
              } )
             .then ( item => console.log("Fetch result :", item));
}

console.log("Fetch >> Some Processes");
getUserData();
console.log("Fetch >> More Processes");

