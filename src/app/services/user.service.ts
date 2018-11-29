import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { UserApi } from '../../fw/users/user-api';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = true;
  tokenreference:string;
  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({}).pipe(delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password')));
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
      this.isAuthenticated = false;
      this.router.navigate(['/signin']);
      return of({});
  }

}
