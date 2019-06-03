import {fixure} from '@open-wc/testing-helpers'

it('should be true', () => {
  expect(true).toEqual(true);
})

it('should work', async () => {
  const el = await fixture('<div>TESTING</div>')
  expect(el).toBeTruthy();
  expect(el.innerHTML).toEqual('');
})
