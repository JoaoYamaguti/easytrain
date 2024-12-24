import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GenerateScriptDto {
    @IsNotEmpty()
    @IsNumber()
    days: number

    @IsNotEmpty()
    @IsString()
    sex: string

    @IsNotEmpty()
    @IsNumber()
    age: number

    @IsNotEmpty()
    @IsString()
    level: string
}
