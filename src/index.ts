import { app } from "./app";

import { getProfessors } from "./endpoints/professors/getProfessors";
import { getStudentByName } from "./endpoints/students/getStudentByName";
import registerProfessors from "./endpoints/professors/registerProfessor";
import registerStudent from "./endpoints/students/registerStudent";
import changeClassProfessor from "./endpoints/professors/changeClassProfessor";
import changeClassStudent from "./endpoints/students/changeClassStudent";
import registerClass from "./endpoints/class/registerClass";
import changeModuleClass from "./endpoints/class/changeModuleClass";
import { getActiveClasses } from "./endpoints/class/getActiveClasses";
import { getStudentByHobby } from "./endpoints/students/getStudentsByHobby";




app.get("/students", getStudentByName)
app.get('/students/hobbies', getStudentByHobby) 
app.get("/professors", getProfessors)
app.get('/class', getActiveClasses)

app.post('/students/:student_id', changeClassStudent) 
app.post('/professors/:professor_id', changeClassProfessor) 
app.post('/class', changeModuleClass) 

app.put('/students', registerStudent)
app.put('/professors', registerProfessors)
app.put('/class', registerClass)