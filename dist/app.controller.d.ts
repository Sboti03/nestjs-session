import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(session: Record<string, any>): {
        dobas: string;
    };
}