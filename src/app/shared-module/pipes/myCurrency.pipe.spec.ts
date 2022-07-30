import { MyCurrencyPipe } from './myCurrency.pipe';

describe('MycurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
