import React from 'react';

export default ({ size }) => {
  return (
    <svg
      width={size === 'lg' ? 14 : 10}
      height={size === 'lg' ? 12 : 8}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m 0.16861827,4.4683842 v 3 H 13.832982 v -3 z" fill="white" />
    </svg>
  );
};
