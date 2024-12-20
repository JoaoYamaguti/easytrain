import 'dotenv/config';
export declare class AppService {
    getTraining(days: number, sex: string, age: number, level: string): Promise<any>;
}
