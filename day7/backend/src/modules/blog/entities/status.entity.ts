import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Blog } from "./blog.entity";

@Entity('status')
export class Status {
    @PrimaryGeneratedColumn({name: 'status_id'})
    statusId: number;

    @Column({name: 'status_name', length: 20})
    statusName: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(() => Blog, (blog) => blog.status)
    blog: Blog[]
}