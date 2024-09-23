import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'usuario' })
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string;

    @Column({ default: false })
    active: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}