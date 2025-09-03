import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {

    constructor(private readonly helloService: HelloService){}


    @Get('/:name')
    plainName(@Param('name') name: string): string {
        return this.helloService.plainName(name);
    }

    @Get()
    getName(@Query('name') name: string): string{
        return this.helloService.plainName(name || 'no name')
    }

    @Post()
    sayName(@Body() {name:name}: {name:string}): string{
        return this.helloService.sayName({name:name});
    }
}
