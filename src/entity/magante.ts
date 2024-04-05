import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class magante {

    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number

}