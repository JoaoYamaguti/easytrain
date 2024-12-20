import { Injectable } from '@nestjs/common';
import 'dotenv/config'

const apiKey = process.env.GEMINI_API_KEY

@Injectable()
export class AppService {
  public async getTraining(
    days: number,
    sex: string,
    age: number,
    level: string,

  ) {

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
`

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
    })).json()

    let data = response.candidates[0].content.parts[0].text

    console.log(typeof data)

    data = data.replace('```json', '')

    data = data.replace('```', '')

    console.log(typeof data)

    console.log(data)

    if (typeof data === 'string') {

      data = JSON.parse(data)
    }

    const training = data

    console.log(training)

    return training;
  }
}
