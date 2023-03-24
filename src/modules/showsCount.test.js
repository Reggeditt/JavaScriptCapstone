/**
* @jest-environment jsdom
*/

const showsCounter = require('./__MOCK__/countShows.js');

describe('test showsCounter function', () => {
  document.body.innerHTML = `
    <div class="show"></div>
    <div class="show"></div>
  `;

  test('Counter function should return', () => {
    expect(showsCounter('.show')).toEqual(2);
  });
});