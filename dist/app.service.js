"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
require("dotenv/config");
const apiKey = process.env.GEMINI_API_KEY;
let AppService = class AppService {
    async getTraining(days, sex, age, level) {
        const text = `Monte um treino de ${days} dias na semana para uma pessoa de ${age} anos, do sexo ${sex}, ${level} na academia. Retorne somente uma json string com a estrutura básica abaixo, note que entre parenteses contem o que de ser preenchido.
{
    "description": "string (breve descrição do treino montado)",
    "warning": "string (aqui deve descrever alguns avisos levando em consideração a situação da pessoa)",
    "days": [
        {
            "title": "string (titulo do dia + foco do treino do dia )",
            "warm-up": "string (descrição do aquecimento)",
            "exercises": [
                {
                    "name": "string (nome do exercicio)",
                    "sets": "string (quantidade de series)",
                    "repetitions": "string",
                    "rest": "string ",
                    "description": "string (motivo desse exercicio estar no treino)"
                }
            ],
            "cardio": "string (descrição do cardio pós treino)"
        }
    ]
}
`;
        const response = await (await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "contents": {
                    "parts": {
                        "text": text
                    }
                }
            })
        })).json();
        let data = response.candidates[0].content.parts[0].text;
        data = data.replace('```json', '');
        data = data.replace('```', '');
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        return data;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map