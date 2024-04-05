import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Student } from "./student";
@Entity()

export class Teacher {
    @PrimaryGeneratedColumn()
    id: string

    @Column({nullable:true})
    profile: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number

    @DeleteDateColumn()
    deletedate: Date

    @CreateDateColumn()
    createdate: Date

    @UpdateDateColumn()
    updatedate: Date

    @OneToOne(()=>Student)
    @JoinColumn()
    student:Student
}