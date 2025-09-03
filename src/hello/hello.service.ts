import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
    getGreetings(): string {
        return 'Hello, Nest js';
    }
    sayName({name: name}: {name: string}): string {
        return `Hello, ${name.toUpperCase()}`;
    };
    plainName(name: string): string{
        return `Hey, ${name}!`;
    }
}
