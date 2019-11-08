import { HttpParameterCodec } from '@angular/common/http';
import { apiStandardEncoder } from '../helpers/api-standard-encoder';
import { ngStandardEncoder } from '../helpers/ng-standard-encoder';

/**
 * Versão otimizada do encode de dados nativo do ângular para assegurar a notação
 * JSON padrão dos objetos na serialização de parâmetros queryString.
 *
 * ```typescript
 * new HttpParams(undefined, new ApiUrlEncodingCodec);
 * ```
 */
export class ApiUrlEncodingCodec implements HttpParameterCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key: string): string { return ngStandardEncoder(key); }

  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */
  encodeValue(value: string): string { return apiStandardEncoder(value); }

  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */
  decodeKey(key: string): string { return decodeURIComponent(key); }

  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */
  decodeValue(value: string): any { return decodeURIComponent(value); }
}
