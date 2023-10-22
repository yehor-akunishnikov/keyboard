import React from 'react';

import Keyboard from './components/Keyboard';

import './style.css';

export default function App() {
  const buttonsMap = [
    [
      { id: 'btn-1', text: '1', type: 'button' },
      { id: 'btn-2', text: '2', type: 'button' },
      { id: 'btn-3', text: '3', type: 'button' },
    ],
    [
      { id: 'btn-4', text: '4', type: 'button' },
      { id: 'btn-5', text: '5', type: 'button' },
      { id: 'btn-6', text: '6', type: 'button' },
    ],
    [
      { id: 'btn-7', text: '7', type: 'button' },
      { id: 'btn-8', text: '8', type: 'button' },
      { id: 'btn-9', text: '9', type: 'button' },
    ],
    [
      { id: 'btn-clear', text: 'CLEAR', type: 'button' },
      { id: 'btn-0', text: '0', type: 'button' },
    ],
    [{ id: 'btn-save', text: 'SAVE', type: 'submit' }],
  ];

  return (
    <>
      <Keyboard buttonsMap={buttonsMap} buttonClass="keyboard-btn"></Keyboard>
    </>
  );
}
