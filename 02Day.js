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
//     console.log("Student Not Found in the given list")
    
// }

// findStudent(studentsData,"Mubashir")



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
    pop(){
       const lastItem = this.data[this.length - 1] 
       delete this.data[this.length - 1]
       this.length--
       return lastItem
    
    }

    shift(){
        const firstItem = this.data[0]
        
        for(let i =0; i < this.length;i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--

        return firstItem
        
    }


    deleteByIndex(index){
        const item = this.data[index]

        for(let i = 0; i<this.length;i++){
            this.data[i] = this.data[i+1]
        }

        delete this.data[this.length - 1]
        this.length--
        return item

    }
}

const myDefinedArray = new myArray()

myDefinedArray.push("Affab")
myDefinedArray.push("salman")
myDefinedArray.push("Ahmed")
myDefinedArray.push("mjj")

console.log(myDefinedArray);

myDefinedArray.pop()

console.log(myDefinedArray)

myDefinedArray.shift() 

console.log(myDefinedArray);

myDefinedArray.deleteByIndex(1)

console.log(myDefinedArray);

myDefinedArray.deleteByIndex(2)

console.log(myDefinedArray);

