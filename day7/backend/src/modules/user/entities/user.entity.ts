import { Blog } from "src/modules/blog/entities/blog.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({name: 'user_id'})
    userId: number;

    @Column({name: 'user_name', length: 20, unique: true})
    userName: string;

    @Column({length: 100})
    fullname: string;

    @Column({length: 20, nullable: true})
    country: string;

    @Column({type: 'int', nullable: true})
    age: number;

    @Column({length: 100})
    email: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @OneToMany(() => Blog, (blog) => blog.createdBy)
    blogs: Blog[]
}
