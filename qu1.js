console.log("hi");
// odd or even number:(assignment question 1)

let num=prompt("enter a number",0);
console.log(num);
if(num%2==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}

// ---------------------------------------

//os name and version:(assignment question 2)

let name=prompt("enter the name & version",0);
console.log(name.split('  '));


// -------------------------------------


//Marks : (assignment question 3)

let marks=prompt("enter marks:",0);
console.log(marks);
let result=(marks ==100 )? 'grade a+':
           (marks ==90  )? 'grade a' :
           (marks ==80  )? 'grade b' :
           (marks ==70  )? 'grade c' :
           (marks ==60  )? 'grade d' :
           (marks ==50  )? 'grade e' :
        //    (marks ==40  )? 'grade f' :
        'u r fail in exams';
        console.log(result);