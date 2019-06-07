import {fixure} from "@open-wc/testing-helpers"
import {expect} from "chai"


it('should be true', () => {
  expect(true).to.be.true;
})

it('should work', async () => {
  const el = await fixture('<div>TESTING</div>')
  expect(el).to.be.true;
  expect(el.innerHTML).to.equal('');
})
