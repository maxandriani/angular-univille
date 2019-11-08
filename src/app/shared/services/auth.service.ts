import { Injectable, Inject } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { API_URI } from '../tokens/api-uri.token';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from '../entities/user.entity';
import { flatMap, first, map, tap } from 'rxjs/operators';
import { IAbpLoginInput } from '../interfaces/i-abp-login-input';
import { IAbpLoginOutput } from '../interfaces/i-abp-login-output';
import { MatSnackBar } from '@angular/material';
import { IAbpResponse } from '../interfaces/i-abp-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  protected readonly tokenKey = 'token';
  protected readonly auth$ = new BehaviorSubject<UserEntity | void>(undefined);

  get token(): string {
    return localStorage.getItem(this.tokenKey);
  }

  set token(t: string) {
    localStorage.setItem(this.tokenKey, t);
    if (t) {
      this.getCurrentUser();
    } else {
      this.auth$.next(undefined);
    }
  }

  get user(): UserEntity | void {
    return this.auth$.value;
  }

  get authenticated(): boolean {
    return (!!this.user);
  }

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    if (this.token) {
      this.getCurrentUser();
    }
  }

  async login(input: IAbpLoginInput): Promise<void> {
    try {
      const auth: IAbpLoginOutput = await this.http
        .post<IAbpResponse<IAbpLoginOutput>>(`${this.apiUri}/api/TokenAuth/Authenticate`, input)
        .pipe(
          first(),
          map(res => res.result)
        )
        .toPromise();

      this.token = auth.accessToken;
    } catch (err) {
      this.snackbar.open(err.message, 'Entendi');
    }
  }

  logout() {
    this.token = '';
  }

  asObservable(): Observable<UserEntity|void> {
    return this.auth$.asObservable();
  }

  protected async getCurrentUser(): Promise<UserEntity> {
    return this.http
      .get<IAbpResponse<UserEntity>>(`${this.apiUri}/api/TokenAuth/Session`)
      .pipe(
        first(),
        map(res => res.result),
        tap(user => this.auth$.next(user)),
        tap(user => this.snackbar.open(`Seja bem vindo ${user.name}!`))
      )
      .toPromise();
  }

}
