import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany, JoinTable, UpdateDateColumn } from 'typeorm';
import { Tag } from './tag.entity';
import { Status } from './status.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity('blogs')
//PascalCase
export class Blog {
  @PrimaryGeneratedColumn({name: 'blog_id'})
  blogId: number;

  @Column({length: 200})
  title: string;

  @Column({name: 'time_reading', type: 'int'})
  timeReading: number;

  @Column({name: 'featured_image', length: 255})
  featuredImage: string;

  @Column({name: 'short_description', type: 'text'})
  shortDescription: string;

  @Column({type: 'text'})
  content: string;

  @Column({length: 255})
  path: string

  @ManyToOne(() => Status, (status) => status.blog, {nullable: false})
  status: Status;

  @ManyToOne(() => User, (user) => user.blogs, {nullable: false})
  createdBy: User;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @ManyToMany(() => Tag, (tag) => tag.blogs)
    @JoinTable({
        name: 'blog_tag',
        joinColumn: {name: 'blog_id', referencedColumnName: 'blogId'},
        inverseJoinColumn: {name: 'tag_id', referencedColumnName: 'tagId'},
    })
    tags: Tag[]
}