import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { Tipo } from 'src/tipo/entities/tipo.entity';

@Module({

  imports: [TypeOrmModule.forFeature([Post, User, Tipo])],

  controllers: [PostsController],
  providers: [PostsService],

})
export class PostsModule { }
