import { ApiUrlEncodingCodec } from '../codecs/api-url-encoding-codec';
import { apiStandardParamParser } from './api-standard-param-parser';

describe('apiStandardParamParser(params: string): Map<string, string[]>', () => {

  const codec = new ApiUrlEncodingCodec();

  it('should convert an string encoded param to a param map', () => {
    const map = apiStandardParamParser('jonas=Brother&teste=weeee%20eeee', codec);

    expect(map.has('jonas')).toBeTruthy();
    expect(map.has('teste')).toBeTruthy();
    expect(map.get('jonas')).toContain('Brother');
    expect(map.get('teste')).toContain('weeee eeee');
  });

});
