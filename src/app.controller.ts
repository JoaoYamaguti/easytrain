import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post()
    public async index(@Body() body) {
        const service = await this.appService.getTraining(body.days, body.sex, body.age, body.level);

        return service
    }
}
