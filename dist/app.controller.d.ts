import { AppService } from './app.service';
import { GenerateScriptDto } from './app.req.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(body: GenerateScriptDto): Promise<any>;
}
