import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, OneToMany, } from 'typeorm'
import { employe } from './employe'

@Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: true })
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

    @OneToMany(()=>employe,(employe)=>employe.student,{cascade:true, eager:true})
    employe:employe
}