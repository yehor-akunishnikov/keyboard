import React from 'react';

import { getAxisByButtonKey, getNextBtn, getButtonValue } from '../utils';
import { useAutoFocus } from '../../../hooks/useAutoFocus';

export const useKeyboard = (buttonClass) => {
  const [value, setValue] = React.useState('');
  const keyboardRef = React.useRef(null);

  useAutoFocus(keyboardRef, `.${buttonClass}`);

  const onButtonPress = (currenButton) => {
    const buttonValue = getButtonValue(currenButton);

    if (isNaN(buttonValue)) {
      switch (buttonValue) {
        case 'clear':
          setValue('');
          break;
      }
    } else {
      setValue(value + Number(buttonValue));
    }
  };

  const handleKeyUp = (event) => {
    const { target: currenElement, key } = event;

    if (currenElement.classList.contains(buttonClass)) {
      const axis = getAxisByButtonKey(key);

      if (axis) {
        getNextBtn(axis, key, currenElement)?.focus();
      }

      if (key === 'Enter') {
        onButtonPress(currenElement);
      }
    }
  };

  return [keyboardRef, handleKeyUp, value, setValue];
};
