import React from 'react';

/**
 * Wrap up Components
 * @param ReactNode[] sequence of elements
 * @return wrapper (first element as father and others as children)
 */
export function wrapse(...comps) {
  return comps.reduceRight(
    (wrap, comp) =>
      ({ children }) =>
        React.createElement(
          wrap,
          null,
          React.createElement(comp, null, children)
        )
  );
}
