import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

  @Get()
  getAlltasks() {
    return this.taskService.getAllTasks()
  }

  @Get('/by-user/:userId')
  getTaskByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.taskService.getTaskByUserId(userId)
  }

  @Get(':taskId')
  getTaskById(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.getTaskById(taskId)
  }

  @Get('user-specific-task/:userId/:taskId')
  getUserSpecificTask(@Param('userId', ParseIntPipe) userId: number, @Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.getSpecificTaskForUser(userId, taskId)
  }
}
