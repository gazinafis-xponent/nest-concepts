import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class TaskService {
  constructor(private readonly userService: UserService) {}

  getAllTasks() {
    return [
      {
        id: 1,
        title: 'Complete project proposal',
        description:
          'Draft and finalize the Q4 project proposal for the marketing campaign',
        userId: 1,
      },
      {
        id: 2,
        title: 'Review code changes',
        description:
          'Review pull requests for the authentication system updates',
        userId: 2,
      },
      {
        id: 3,
        title: 'Schedule team meeting',
        description:
          'Organize weekly standup meeting and send calendar invites to all team members',
        userId: 1,
      },
      {
        id: 4,
        title: 'Update documentation',
        description:
          'Revise API documentation to reflect recent endpoint changes',
        userId: 3,
      },
      {
        id: 5,
        title: 'Fix bug in checkout process',
        description:
          'Investigate and resolve the payment gateway timeout issue reported by users',
        userId: 2,
      },
      {
        id: 6,
        title: 'Prepare quarterly report',
        description:
          'Compile sales data and create presentation for Q3 performance review',
        userId: 4,
      },
      {
        id: 7,
        title: 'Conduct user interviews',
        description:
          'Interview 5 customers about their experience with the new dashboard feature',
        userId: 3,
      },
      {
        id: 8,
        title: 'Set up CI/CD pipeline',
        description:
          'Configure automated testing and deployment pipeline for the mobile app',
        userId: 2,
      },
      {
        id: 9,
        title: 'Design landing page',
        description: 'Create mockups for the new product launch landing page',
        userId: 5,
      },
      {
        id: 10,
        title: 'Database optimization',
        description:
          'Optimize slow queries and add indexes to improve application performance',
        userId: 2,
      },
    ];
  }

  getTaskByUserId(userId: number) {
    return this.getAllTasks().filter((task) => task.userId === userId);
  }

  getTaskById(taskId: number) {
    return this.getAllTasks().find((task) => task.id === taskId);
  }

  getSpecificTaskForUser(userId: number, taskId: number) {
    const user = this.userService.getUserById(userId);
    if(user){
        const task = this.getAllTasks().find((task) => task.id === taskId && task.userId === userId);

        return {
            task,
            user
        }
    }
  }
}
