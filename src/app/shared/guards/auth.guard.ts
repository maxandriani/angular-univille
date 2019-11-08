import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';

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
    if (!this.auth.authenticated) {
      this.snackbar.open('Você não está autorizado!', 'Entendi');
      this.router.navigateByUrl('/login');
    }
    return this.auth.authenticated;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.auth.authenticated) {
      this.snackbar.open('Você não está autorizado!', 'Entendi');
      this.router.navigateByUrl('/login');
    }
    return this.auth.authenticated;
  }
}
