export const inbodyDataset = [
  {
    value: 68.5,
    type: 'Weight',
  },
  {
    value: 36.5,
    type: 'Muscle',
  },
  {
    value: 7.5,
    type: 'Body fat',
  }
];

export function valueFormatter(value) {
  return `${value}kg`;
}