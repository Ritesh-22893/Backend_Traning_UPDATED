import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

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
}