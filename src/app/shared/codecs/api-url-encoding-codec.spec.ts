import { ApiUrlEncodingCodec } from './api-url-encoding-codec';

describe('ApiUrlEncodingCodec', () => {

  let codec: ApiUrlEncodingCodec;

  beforeEach(() => {
    codec = new ApiUrlEncodingCodec();
  });

  it('Should encode an simple query param key', () => {
    expect(codec.encodeKey('jonas-brother')).toBe('jonas-brother');
  });

  it('Should decode an simple query param value', () => {
    expect(codec.encodeValue('jonas-brother')).toBe('jonas-brother');
  });

  it('Should encode key @:,;+=?/', () => {
    expect(codec.encodeKey('@')).toBe('@');
    expect(codec.encodeKey(':')).toBe(':');
    expect(codec.encodeKey(',')).toBe(',');
    expect(codec.encodeKey(';')).toBe(';');
    expect(codec.encodeKey('+')).toBe('+');
    expect(codec.encodeKey('=')).toBe('=');
    expect(codec.encodeKey('?')).toBe('?');
    expect(codec.encodeKey('/')).toBe('/');
  });

  it('Should encode values @:,;+=?/', () => {
    expect(codec.encodeValue('@')).toBe('@');
    expect(codec.encodeValue(':')).toBe(':');
    expect(codec.encodeValue(',')).toBe(',');
    expect(codec.encodeValue(';')).toBe(';');
    expect(codec.encodeValue('+')).toBe('+');
    expect(codec.encodeValue('=')).toBe('=');
    expect(codec.encodeValue('?')).toBe('?');
    expect(codec.encodeValue('/')).toBe('/');
  });

  it('Should decode key "jonas-brother%2034%25"', () => {
    expect(codec.decodeKey('jonas-brother%2034%25')).toBe('jonas-brother 34%');
  });

  it('Should decode value "jonas-brother%2034%25"', () => {
    expect(codec.decodeKey('jonas-brother%2034%25')).toBe('jonas-brother 34%');
  });

  it('Should decode enhaned value "2019-10-10T01:01:01Z"', () => {
    const date = codec.decodeValue('2019-10-10T01:01:01Z');

    expect(date.constructor).toEqual(Date.prototype.constructor);
  });

});
