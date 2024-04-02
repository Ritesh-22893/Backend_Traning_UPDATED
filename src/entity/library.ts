import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class library {
    @PrimaryGeneratedColumn()
    id:string

    @Column()
    bookname:"string"
}
