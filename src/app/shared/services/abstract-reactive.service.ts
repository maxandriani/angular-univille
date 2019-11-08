import { Subject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { ApiUrlEncodingCodec } from '../codecs/api-url-encoding-codec';

export abstract class AbstractReactiveService {

  protected readonly changes$ = new Subject<void>();

  asObservable(): Observable<void> {
    return this.changes$.asObservable();
  }

  refresh() {
    this.changes$.next();
  }

  protected reactive<T>(observable: Observable<T>): Observable<T> {
    return this.changes$
      .pipe(
        switchMap(() => observable)
      );
  }

  protected parseHttpParams(params?: { [param: string]: any | any[] }): HttpParams | undefined {
    if (params) {
      const filteredParams = {};

      for (const [key, param] of Object.entries(params)) {
        filteredParams[key] = (Array.isArray(param)) ? param : (param) ? [ param ] : [];
      }

      return new HttpParams({ fromObject: filteredParams, encoder: new ApiUrlEncodingCodec() });
    }
  }
}
