import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()

export class Teacher {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
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