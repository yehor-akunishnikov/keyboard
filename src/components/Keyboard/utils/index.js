export const getButtonValue = (element) => {
  return element.getAttribute('id').split('-')[1];
};

export const getButtonIndex = (button) => {
  return Array.from(button.parentNode.children).indexOf(button);
};

export const getAxisByButtonKey = (key) => {
  const x = ['ArrowLeft', 'ArrowRight'];
  const y = ['ArrowUp', 'ArrowDown'];

  if (x.includes(key)) {
    return 'x';
  }

  if (y.includes(key)) {
    return 'y';
  }

  return null;
};

export const getNextBtnForXAxis = (key, currentBtn) => {
  return key === 'ArrowLeft'
    ? currentBtn.previousSibling
    : currentBtn.nextSibling;
};

export const getNextBtnForYAxis = (key, currentBtn) => {
  const currentRow = currentBtn.parentElement;
  const nextRow =
    key === 'ArrowUp'
      ? currentBtn.parentElement.previousSibling
      : currentBtn.parentElement.nextSibling;

  if (nextRow) {
    const buttonIndex = getButtonIndex(currentBtn);
    const nextBtnIndex =
      currentRow.children.length === nextRow.children.length ? buttonIndex : 0;

    return nextRow.children[nextBtnIndex];
  }

  return null;
};

export const getNextBtn = (axis, key, currentBtn) => {
  return axis === 'x'
    ? getNextBtnForXAxis(key, currentBtn)
    : getNextBtnForYAxis(key, currentBtn);
};
