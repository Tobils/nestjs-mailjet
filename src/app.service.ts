import { EmailMessage, MailjetService } from '@clever-app/nestjs-mailjet';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly mailjetService: MailjetService
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  sendMail(){
    return this.mailjetService.sendMail([
      {
        "From": {
          "Email": "dev.suhada@gmail.com",
          "Name": "ade"
        },
        "To": [
          {
            "Email": "dev.suhada@gmail.com",
            "Name": "ade"
          }
        ],
        "Subject": "Greetings from Mailjet suhada.",
        "TextPart": "My first Mailjet email",
        "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!"
      }
    ])
  }
}
