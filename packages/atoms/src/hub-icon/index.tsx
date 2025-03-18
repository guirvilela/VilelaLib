import React from 'react';

import { IconStyle } from './styles';
import { HubIconProps } from './types';

export type { HubIconProps };

export function HubIcon({ icon: Icon, rotate, ...props }: HubIconProps) {
  const iconProps = React.useMemo(() => {
    const props: React.SVGAttributes<SVGElement> = {
      style: {}
    };
    if (props.style) {
      if (rotate) {
        props.style.transform = `rotate(${rotate}deg)`;
      }
    }
    return props;
  }, [rotate]);

  return (
    <IconStyle {...props}>
      <Icon {...iconProps} />
    </IconStyle>
  );
}
