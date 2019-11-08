import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    protected readonly router: Router,
    protected readonly snackbar: MatSnackBar,
    protected readonly auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return from(this.auth.authenticatedAsync)
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            this.snackbar.open('Você não está autorizado!', 'Entendi');
            this.router.navigateByUrl('/login');
          }
        })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return from(this.auth.authenticatedAsync)
      .pipe(
        tap(isAuth => {
          if (!isAuth) {
            this.snackbar.open('Você não está autorizado!', 'Entendi');
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
}
