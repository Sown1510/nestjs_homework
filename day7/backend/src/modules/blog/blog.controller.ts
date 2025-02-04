import { Controller, Get, Param, Query } from '@nestjs/common';
import { BlogService } from './blog.service';
import { log } from 'console';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('tags')
  async getAllTags() {
    return await this.blogService.findAllTag();
  }

  @Get('')
  async getBlogLimit(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 9,
    @Query('search') search: string = '',
    @Query('tags') tags: string[] = [],
  ) {
    return await this.blogService.findLimit({ page, limit, search, tags });
  }

  @Get(':id')
  async getBlogById(@Param('id') id: number) {
    return await this.blogService.findOne(id);
  }
}
