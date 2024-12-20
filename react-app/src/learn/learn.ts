let value =123;
type User ={
    name : String;
    age : Number;
    gender?: 'Male' | 'Female';
};

let bob: User ={
    name:'Bob',
    age : 22,
    gender: "Male"
}

interface Student {
    name : String;
    age : Number;
}

interface Student {
    grade : "A" | "B"|"C";
}
let alice : Student ={
    name : 'Alice',
    age : 22,
    grade: "A"
}

function hello (user: User){
    return `Hello ${user.name}`;
}

function hi (user : {username : String, email: String}){
    return `Hello ${user.username}`;
}