import { expect } from 'chai';
import { getEAN } from './random-number';

describe('Random number generators', () => {
  it('generated EAN has 13 digits', () => {
    const code = getEAN();
    expect(code.length).equals(13);
  });
});
