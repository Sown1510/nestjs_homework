import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Blog } from "./blog.entity";


@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn({name: 'tag_id'})
    tagId: number;

    @Column({length: 50})
    name: string;

    @Column({default: true})
    status: boolean;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    @ManyToMany(() => Blog, (blog) => blog.tags)
    blogs: Blog[];
}