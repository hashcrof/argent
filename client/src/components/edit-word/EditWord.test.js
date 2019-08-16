import { fixture, fixtureCleanup } from '@open-wc/testing-helpers';
import EditWord from './EditWord';

describe('EditWord Component', () => {
  let el;

  beforeEach(async () => {
    customElements.define('my-el', EditWord);
    el = await fixture('<my-el>TEST</my-el>');
  });

  afterEach(() => {
    fixtureCleanup();
  });

  it('is instantiated without crashing', async () => {
    expect(el.textContent).toEqual('TEST');
  });
});
