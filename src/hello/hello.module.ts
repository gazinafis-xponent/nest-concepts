import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { Hello } from './hello';
import { HelloService } from './hello.service';

@Module({
  controllers: [HelloController],
  providers: [Hello, HelloService]
})
export class HelloModule {}
