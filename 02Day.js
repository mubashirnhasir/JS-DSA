// Problem Statement
//Create array with 5 student name, after that create a function which take 2 parameters, iterate over all students and find that specific user 


let studentsData = ["Mubashir", "Affan", "zaid", "Imtiyaaz"]
const findStudent = (allStudents, studentName)=>{
    for(let i = 0; i <= studentsData.length; i++){
        if(allStudents[i] === studentName){
            console.log(`Found The Student ${studentName}`);
            return
        }
    }
    
        console.log("Student Not Found in the given list")
    
}

findStudent(studentsData,"Afan")


