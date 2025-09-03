import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {
  constructor(private readonly helloService: HelloService) {}

  getAllUsers() {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
      {
        id: 3,
        name: 'Jim Doe',
      },
      {
        id: 4,
        name: 'Jake Doe',
      },
      {
        id: 5,
        name: 'Jill Doe',
      },
    ];
  }

  getUserById (id: number) {
    const user = this.getAllUsers().find((user) => user?.id === id);
    console.log(user ? true : false)
    if(!user){
        return undefined;
    }
    return user;
  }

  getWelcome (userId: number) {
    const currentUser = this.getUserById(userId);
    if(!currentUser) {
        return "No user to greet!";
    }
    else{
        return this.helloService.plainName(currentUser.name);
    }
  }

}