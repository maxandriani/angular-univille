import { InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';

export const API_URI: InjectionToken<string> = new InjectionToken<string>('API_URI', {
  providedIn: 'root',
  factory: () => environment.apiUri
});
