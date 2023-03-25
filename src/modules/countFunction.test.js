/**
* @jest-environment jsdom
*/

const showsCounter = require('./__MOCK__/countShows.js');
const commentsCounter = require('./__MOCK__/countComments.js');

document.body.innerHTML = `
    <div class="show"></div>
    <div class="show"></div>
    <div class ="comments-popup">
      <div class ="comment"></div>
      <div class ="comment"></div>
      <div class ="comment"></div>
    </div>
`;

describe('test showsCounter function', () => {
  test('Counter function should return', () => {
    expect(showsCounter('.show')).toEqual(2);
  });
});

describe('test commentsCounter function', () => {
  test('Counter function should return 3', () => {
    expect(commentsCounter('.comment')).toEqual(3);
  });
});