import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Student } from "./student"

@Entity()
export class employe {

    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number

    @ManyToOne(()=>Student,(Student)=>Student.employe)
    student:Student
}