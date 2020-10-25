const randomArray = (length, max) => {
  return Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));
};

export default randomArray;
