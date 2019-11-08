/**
 * Encoder customizado para tratamento de strings serializadas em parâmetros query string.
 *
 * ```typescript
 * const s = apiStandardEncoder(new Date); // 2019-01-01T00:00:00.000Z
 * ```
 */
export function apiStandardEncoder(v: any): string {

  if (typeof v !== 'string') {
    v = JSON.stringify(v)
      .replace(/^\"/, '')
      .replace(/\"$/, '');
  }

  return encodeURIComponent(v)
      .replace(/%40/gi, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/gi, '$')
      .replace(/%2C/gi, ',')
      .replace(/%3B/gi, ';')
      .replace(/%2B/gi, '+')
      .replace(/%3D/gi, '=')
      .replace(/%3F/gi, '?')
      .replace(/%2F/gi, '/');
}
