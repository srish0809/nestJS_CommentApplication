import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';


@Module({
  imports: [UserModule, PrismaModule, CommentModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
