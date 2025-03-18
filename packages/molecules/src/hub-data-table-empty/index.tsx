import { HubGrid, HubText } from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import { Color, Space, useTheme } from '@hubert/styles';
import React from 'react';

import IlusEmptyState from './ilus-empty-state';

interface HubDataTableEmptyProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  horizontal?: boolean;
  color?: Color;
  size?: string;
  pad?: Space | Space[];
}

export type { HubDataTableEmptyProps };

export function HubDataTableEmpty({
  title,
  content,
  horizontal,
  color,
  size,
  pad,
  ...props
}: HubDataTableEmptyProps) {
  const theme = useTheme();
  const t = useI18nMessage();

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
        <IlusEmptyState
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
          {typeof title === 'string' || typeof title === 'undefined' ? (
            <HubText
              typo="h2"
              color={color || 'primary'}
              weight="500"
              align="center"
            >
              {title || t('hub-data-table-empty_title')}
            </HubText>
          ) : (
            title
          )}
          <HubText
            typo="subtitle"
            color="neutral"
            weight="600"
            align={horizontal ? 'start' : 'center'}
          >
            {content || t('hub-data-table-empty_content')}
          </HubText>
        </HubGrid>
      </HubGrid>
    </HubGrid>
  );
}
