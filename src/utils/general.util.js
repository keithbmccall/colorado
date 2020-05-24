export const conditionalListReverse = ({ test, list }) => (test ? list.reverse() : list);

export const keyGenerator = (x, y) => `${x}_${y}_${Math.ceil(Math.random() * 100)}`;
