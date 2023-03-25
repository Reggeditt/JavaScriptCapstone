const commentsCounter = (targetEl) => {
  const ourArray = document.querySelectorAll(`${targetEl}`);
  const count = ourArray.length;
  const commentsCounterEl = document.querySelector('.comments-title');
  commentsCounterEl.textContent = `Comments (${count})`;
  return count;
};

export default commentsCounter;