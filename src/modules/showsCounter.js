const showsCounter = (targetEl) => {
  const ourArray = document.querySelectorAll(`${targetEl}`);
  const count = ourArray.length;
  const displayCount = document.querySelector('.shows-count');
  displayCount.textContent = `TVshows (${count})`;
  return count;
};

export default showsCounter;