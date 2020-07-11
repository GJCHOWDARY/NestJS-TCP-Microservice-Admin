import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private Tcpclient: ClientProxy;

  constructor() {
    this.Tcpclient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8899,
      },
    });
  }

  getHello() {
    return 'Hello World!';
  }

  public saveData(data: any): Object {
    return {message: 'Hi I am TCP-Microservice to Save Data',data};
  }
  
  public getData() {
    return 'Hi I am TCP-Microservice';
  }
  
  public callUserMicroservice() {
    return this.Tcpclient.send('get_micro_user', '');
  }
}
