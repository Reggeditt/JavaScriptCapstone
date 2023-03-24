const showsCounter = (targetEl) => {
  const ourArray = document.querySelectorAll(`${targetEl}`);
  const count = ourArray.length;
  return count;
};

module.exports = showsCounter;