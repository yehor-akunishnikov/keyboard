import React from 'react';

import { useKeyboard } from './hooks/useKeyboard';

export default function Keyboard({ buttonsMap, buttonClass }) {
  const [keyboardRef, handleKeyUp, number] = useKeyboard(buttonClass);

  const onSave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log(number);
  };

  return (
    <form onSubmit={onSave}>
      <p>{number}</p>
      <div ref={keyboardRef} onKeyUp={handleKeyUp}>
        {buttonsMap.map((buttonsRow, i) => {
          return (
            <div key={i}>
              {buttonsRow.map((buttonMeta) => {
                return (
                  <button
                    className={buttonClass}
                    type={buttonMeta.type}
                    key={buttonMeta.id}
                    id={buttonMeta.id}
                  >
                    {buttonMeta.text}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
}
