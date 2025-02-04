import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Tag } from './entities/tag.entity';
import { Equal, In, Like, Repository } from 'typeorm';

@Injectable()
export class BlogService {
  private readonly logger = new Logger(BlogService.name);
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find({
      relations: ['status', 'createdBy', 'tags'],
    });
  }

  async findLimit({
    page,
    limit,
    search,
    tags,
  }: {
    page: number;
    limit: number;
    search: string;
    tags: string[];
  }): Promise<Blog[]> {
    const offset = (page - 1) * limit;
    const where = {
      ...(search && { title: Like(`%${search}%`) }),
      ...(tags.length > 0 && {
        tags: { name: In(Array.isArray(tags) ? tags : [tags]) },
      }),
    };
    return this.blogRepository.find({
      where,
      skip: offset,
      take: limit,
      relations: ['status', 'createdBy', 'tags'],
    });
  }

  async findOne(id: number): Promise<Blog> {
    return this.blogRepository.findOne({
      where: { blogId: id },
      relations: ['status', 'createdBy', 'tags'],
    });
  }

  async findAllTag(): Promise<Tag[]> {
    return this.tagRepository.find();
  }
}
