import express, {Request, Response} from 'express'
//import  Professor  from '../../../types'
import connection from "../../connection";

export const changeClassStudent = async(req: Request, res:Response) : Promise <void> => {
    try {
        const class_id = req.body.class_id
        const student_id = req.query.student_id
        if(!class_id || !student_id ){
            throw new Error ("Um ou mais campos não foram preenchidos")
        }

        await connection.raw(`
          UPDATE Students
          SET class_id = ${class_id}
          WHERE id = ${student_id};
      `)
        
        res.status(200).send({message: 'Classe do aluno alterada!'})

    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default changeClassStudent