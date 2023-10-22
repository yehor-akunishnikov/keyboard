import React from 'react';

export const useAutoFocus = (ref, selector) => {
  React.useEffect(() => {
    ref.current.querySelector(selector).focus();
  }, []);
};
