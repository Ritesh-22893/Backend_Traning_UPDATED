import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata"
import { Student } from "./student"
import { join } from "path"

@Entity()
export class library {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    bookname:"string"

    @OneToOne(()=>Student)
     @JoinColumn()
     student=Student
}
