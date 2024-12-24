import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateScriptDto } from './app.req.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Post()
    public async index(@Body() body: GenerateScriptDto) {
        const service = await this.appService.getTraining(body.days, body.sex, body.age, body.level);

        return service
    }
}
