import { fixture, fixtureCleanup } from '@open-wc/testing-helpers';

afterEach(() => {
  fixtureCleanup();
});

it('can instantiate an element', async () => {
  const el = await fixture('<my-el foo="bar"></my-el>');
  expect(el.getAttribute('foo')).toEqual('bar');
});