/**
 * Cópia local do encoder padrão do ângular. Essa cópia foi necessária pois a função é privada na biblioteca oficial.
 */
export function ngStandardEncoder(s: string): string {
  return encodeURIComponent(s)
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
