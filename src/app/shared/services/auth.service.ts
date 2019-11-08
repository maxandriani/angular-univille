import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserEntity } from '../entities/user.entity';
import { IAbpLoginInput } from '../interfaces/i-abp-login-input';
import { IAbpLoginOutput } from '../interfaces/i-abp-login-output';
import { HttpClient } from '@angular/common/http';
import { IAbpResponse } from '../interfaces/i-abp-response';
import { map, first } from 'rxjs/operators';
import { API_URI } from '../tokens/api-uri.token';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly tokenKey = 'token';
  protected readonly auth$ = new BehaviorSubject<UserEntity | void>(undefined);

  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  set token(token: string) {
    localStorage.setItem(this.tokenKey, token);
    if (token) {
      this.loadCurrentUser();
    } else {
      this.auth$.next(undefined);
    }
  }

  get currentUser(): UserEntity | void {
    return this.auth$.value;
  }

  get authenticated(): boolean {
    return !!this.currentUser;
  }

  constructor(
    protected readonly http: HttpClient,
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly snackbar: MatSnackBar
  ) {
    if (this.token) {
      this.loadCurrentUser();
    }
  }

  asObservable(): Observable<UserEntity | void> {
    return this.auth$.asObservable();
  }

  logout() {
    this.token = '';
  }

  async login(input: IAbpLoginInput): Promise<void> {
    try {
      const session: IAbpLoginOutput = await this.http
        .post<IAbpResponse<IAbpLoginOutput>>(`${this.apiUri}/api/TokenAuth/Authenticate`, input)
        .pipe(
          first(),
          map(res => res.result)
        )
        .toPromise();

      this.token = session.accessToken;
    } catch (err) {
      this.snackbar.open(err.message, 'Entendi');
    }
  }

  protected async loadCurrentUser() {
    try {
      const user: UserEntity = await this.http
        .get<IAbpResponse<UserEntity>>(`${this.apiUri}/api/TokenAuth/Session`)
        .pipe(
          first(),
          map(res => res.result)
        )
        .toPromise();

      this.snackbar.open(`Seja bem vindo ${user.name}!`);

      this.auth$.next(user);
    } catch (err) {
      this.snackbar.open(err.message, 'Entendi');
    }
  }
}
