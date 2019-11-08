import { apiStandardEncoder } from './api-standard-encoder';

describe('apiStandardEncoder(s: any): string', () => {

  it('should not convert some special chars "@:$,;+=?/"', () => {
    expect(apiStandardEncoder('@')).toBe('@');
    expect(apiStandardEncoder(':')).toBe(':');
    expect(apiStandardEncoder('$')).toBe('$');
    expect(apiStandardEncoder(',')).toBe(',');
    expect(apiStandardEncoder(';')).toBe(';');
    expect(apiStandardEncoder('+')).toBe('+');
    expect(apiStandardEncoder('=')).toBe('=');
    expect(apiStandardEncoder('?')).toBe('?');
    expect(apiStandardEncoder('/')).toBe('/');
  });

  it('should convert an object to JSON notations tring', () => {
    expect(apiStandardEncoder({ id: 1 })).toBe('%7B%22id%22:1%7D');
  });

  it('should convert a string w/ \"', () => {
    expect(apiStandardEncoder('Jonas')).toBe('Jonas');
  });

  it('should convert a number to string number', () => {
    expect(apiStandardEncoder(1)).toBe('1');
  });

});
