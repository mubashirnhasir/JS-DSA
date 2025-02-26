// Problem Statement
//Create array with 5 student name, after that create a function which take 2 parameters, iterate over all students and find that specific user 


// let studentsData = ["Mubashir", "Affan", "zaid", "Imtiyaaz"]
// const findStudent = (allStudents, studentName)=>{
//     for(let i = 0; i <= studentsData.length; i++){
//         if(allStudents[i] === studentName){
//             console.log(`Found The Student ${studentName}`);
//             return
//         }
//     }
    
//         console.log("Student Not Found in the given list")
    
// }

// findStudent(studentsData,"Afan")



// Make your own custom array using class and constructors 

class myArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    push(item){
        this.data[this.length] = item
        this.length++
        return this.length;
    }

    get(key){
        return this.data[key]
    }
}

const myDefinedArray = new myArray()

myDefinedArray.push("Affab")
myDefinedArray.push("salman")
myDefinedArray.push("Ahmed")

console.log(myDefinedArray);


console.log(myDefinedArray.get(1))

