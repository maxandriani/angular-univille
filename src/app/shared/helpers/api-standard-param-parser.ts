import { HttpParameterCodec } from '@angular/common/http';

/**
 * Converte uma string de parâmetros query string em um mapeamento.
 *
 * ```typescript
 * const m = apiStandardParamParser('chave=1&chave2=T01:00:00'); // Map('chave': ', 'chave2': Time(1,0,0));
 * ```
 */
export function apiStandardParamParser(rawParams: string, codec: HttpParameterCodec): Map<string, string[]> {
  const map = new Map<string, string[]>();

  if (rawParams.length > 0) {
    const params: string[] = rawParams.split('&');

    for (const param of params) {
      const eqIdx = param.indexOf('=');
      const [key, val]: string[] = eqIdx === -1 ?
          [codec.decodeKey(param), ''] :
          [codec.decodeKey(param.slice(0, eqIdx)), (codec.decodeValue(param.slice(eqIdx + 1)))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    }
  }
  return map;
}
