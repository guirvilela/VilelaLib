import { paramsSerializer } from './utils';

describe('HTTP paramsSerializer', () => {
  const params = {
    name: 'John Doe',
    condominio: [2780, 991, 41],
    unidade: '1010/123'
  };

  it('serialize normal', () => {
    expect(paramsSerializer(params)).toBe(
      'name=John Doe&condominio=2780,991,41&unidade=1010%2F123'
    );
  });
  it('serialize array repeat', () => {
    expect(paramsSerializer(params, { arrayRepeat: true })).toBe(
      'name=John Doe&condominio=2780&condominio=991&condominio=41&unidade=1010%2F123'
    );
  });
});
