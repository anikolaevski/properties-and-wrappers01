import { creaSortedArr } from '../src/js/creaSortedArr';

test('Test creaSortedArr', () => {
  const sourceData = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const orderReq = ['name', 'level'];

  const result = creaSortedArr(sourceData, orderReq);

  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];

  expect(result).toEqual(expected);
});
