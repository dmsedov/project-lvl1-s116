const getRandNum = (min, max) => {
  const rand = min + (Math.random() * ((max - min) + 1));
  return Math.floor(rand);
};

export default getRandNum;
