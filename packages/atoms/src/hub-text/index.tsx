import React from 'react';

import {
  TextHeading1Style,
  TextHeading2Style,
  TextHeading3Style,
  TextHeading4Style,
  TextOthersStyle
} from './styles';
import { HubTextProps } from './types';

export type { HubTextProps };

function format(v?: React.ReactNode, max?: number) {
  if (!v || !max) return v;

  if (typeof v === 'string') {
    const str = v.substring(0, max);
    return String(str).length !== String(v).length ? str + '...' : str;
  }
  return v;
}

export function HubText({ max, children, ...props }: HubTextProps) {
  return React.useMemo(() => {
    const child = format(children, max);

    switch (props.typo) {
      case 'h1':
        return <TextHeading1Style {...props}>{child}</TextHeading1Style>;
      case 'h2':
        return <TextHeading2Style {...props}>{child}</TextHeading2Style>;
      case 'h3':
        return <TextHeading3Style {...props}>{child}</TextHeading3Style>;
      case 'h4':
        return <TextHeading4Style {...props}>{child}</TextHeading4Style>;
      default:
        return <TextOthersStyle {...props}>{child}</TextOthersStyle>;
    }
  }, [props]);
}
