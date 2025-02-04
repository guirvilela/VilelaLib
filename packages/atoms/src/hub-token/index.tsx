import React from 'react';

import { array, factoryTestId, numberFormatter } from '@hubert/shared';
import { TokenInputStyle, TokenStyle } from './styles';
import { HubTokenProps } from './types';

export type { HubTokenProps };

export function HubToken({
  onlyNumber,
  length = 4,
  value = '',
  onChange,
  ...props
}: HubTokenProps) {
  const refs: HTMLInputElement[] = [];

  const amount = React.useMemo(() => array(length, 0, true), [length]);

  function mountRefs(e) {
    if (e && !refs.some((x) => x.id === e.id)) {
      refs.push(e);
    }
  }

  function handleChange(i: number, v: string) {
    let newValue = '';

    if (onlyNumber) {
      newValue = numberFormatter(v);
    } else {
      newValue = v;
    }

    if (newValue) {
      refs[i + 1]?.select();
    } else if (!v) {
      refs[i - 1]?.select();
    }

    refs[i].value = newValue;
    onChange?.(refs.reduce((acc, x) => (acc += x.value), ''));
  }

  function handlePaste(e) {
    e.preventDefault();
    const paste = (e.clipboardData || window.Clipboard).getData('text');
    onChange?.(paste);
  }

  React.useEffect(() => {
    refs.forEach((ref, i) => {
      if (value && value[i]) {
        ref.value = value[i];
      } else {
        ref.value = '';
      }
    });
  }, [amount, value]);

  return (
    <TokenStyle {...props}>
      {amount.map((x, i) => (
        <TokenInputStyle
          key={`hub-token-input-${x}`}
          data-testid={factoryTestId(props, 'input')}
          id={`hub-token-input-${x}`}
          ref={mountRefs}
          type="text"
          maxLength={1}
          value={refs[i]?.value}
          onChange={(e) => handleChange(i, e.target.value)}
          onPaste={handlePaste}
        />
      ))}
    </TokenStyle>
  );
}
