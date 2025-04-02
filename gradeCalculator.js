
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let studentMarks = 33;
if(studentMarks>=90 && studentMarks<=100){
    console.log("A");
}
else if(studentMarks>=80 && studentMarks<=89){
    console.log("B");
}

else if(studentMarks>=70 && studentMarks<=79){
    console.log("C");
}

else if(studentMarks>=60 && studentMarks<=69){
    console.log("D");
}

else if(studentMarks>=0 && studentMarks<=59){
    console.log("F");
}