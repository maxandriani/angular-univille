import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'tda-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  protected _class: string[] = [];
  @Input()
  @HostBinding('class')
  set class(css: string) {
    this._class = css.split(' ');
  }
  get class(): string {
    return ['login-layout', ...this._class].join(' ');
  }

  constructor() { }

  ngOnInit() {
  }

}
