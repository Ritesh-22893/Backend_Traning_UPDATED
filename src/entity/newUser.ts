import { Entity, PrimaryGeneratedColumn, Column,Index, Unique } from "typeorm"

@Entity()
// @Index(['email'],{unique:true}) // use any one 
@Unique(['email'])
export class newUser {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

}