import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor(private readonly appService: AppService) {}

  @MessagePattern('add')
  async saveData(data: any)  {
    this.logger.log('Post Data Microservice.... from TCP');
    return this.appService.saveData(data);
  }

  @MessagePattern('get')
  async getData(data: any)  {
    this.logger.log('Get Microservice.... from TCP');
    return this.appService.getData();
  }
  
  @MessagePattern('get_micro_user')
  async CallAdminMicroservice(data: any)  {
    this.logger.log('Admin Microservice.... from TCP');
    return this.appService.callUserMicroservice();
  }

  @EventPattern('event')
  async getByEvent(data: any)  {
    this.logger.log('Get Microservice.... from TCP using Event');
  }

}
