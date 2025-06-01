import {Injectable} from '@angular/core';
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  send(form: any) {
    emailjs.send(environment.emailjs.serviceId, environment.emailjs.templateId, {...form}, environment.emailjs.emailKey).then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', (error as EmailJSResponseStatus).text);
      },
    );
  }
}
