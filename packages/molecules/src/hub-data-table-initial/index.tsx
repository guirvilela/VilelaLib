import { HubGrid, HubText } from '@hubert/atoms';
import { Color, Space, useTheme } from '@hubert/styles';
import React from 'react';

import IlusSearchEllipse from './ilus-search-ellipse';

interface HubDataTableInitialProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  horizontal?: boolean;
  color?: Color;
  size?: string;
  pad?: Space | Space[];
}

export type { HubDataTableInitialProps };

export function HubDataTableInitial({
  title,
  content,
  horizontal,
  color,
  size,
  pad,
  ...props
}: HubDataTableInitialProps) {
  const theme = useTheme();

  return (
    <HubGrid
      pad={pad || ['8', '4']}
      justify="center"
      align="center"
      gap="5"
      {...props}
    >
      <HubGrid
        row={horizontal}
        justify="center"
        align="center"
        gap="3"
        width="540px"
        responsive="md"
      >
        <IlusSearchEllipse
          width={size || 144}
          height={size || 144}
          bg={color ? theme.colors[color][100] : theme.colors.neutral[200]}
          fg={color ? theme.colors[color][500] : theme.colors.primary[500]}
        />
        <HubGrid
          justify="center"
          align={horizontal ? 'start' : 'center'}
          gap="3"
        >
          <HubText
            typo="h2"
            color={color || 'primary'}
            align="center"
            weight="500"
          >
            {title}
          </HubText>
          <HubText
            typo="subtitle"
            color="neutral"
            weight="600"
            align={horizontal ? 'start' : 'center'}
          >
            {content}
          </HubText>
        </HubGrid>
      </HubGrid>
    </HubGrid>
  );
}
