export const conditionalListReverse = ({ test, list }) => (test ? list.reverse() : list);

export const keyGenerator = (x = Math.random(), y = Math.random()) =>
  `${x}_${y}_${Math.ceil(Math.random() * 100)}`;
