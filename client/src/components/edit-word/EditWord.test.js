import { fixture, fixtureCleanup } from '@open-wc/testing-helpers';
import EditWord from './EditWord';

describe('EditWord Component', () => {
  let el;

  beforeAll(async () => {
    customElements.define('my-el', EditWord);
    el = await fixture('<my-el>TEST</my-el>');
  });

  afterEach(() => {
    fixtureCleanup();
  });

  it('is instantiated without crashing', async () => {
    expect(el.textContent).toEqual('TEST');
  });

  it('has child nodes', () => {
    expect(el.hasChildNodes()).toEqual(true);
  });

  it('has shadowRoot attached', () => {
    expect(el.shadowRoot).not.toBeNull();
  });
});
