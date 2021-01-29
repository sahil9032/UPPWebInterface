import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  public ip = 'https://uppbackend.azurewebsites.net/captcha/';

  constructor(private http: HttpClient) {
  }

  sendToken(token: string): Observable<any> {
    return this.http.post<any>(this.ip + 'validate', {
      token
    });
  }
}
