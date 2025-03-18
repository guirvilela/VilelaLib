import { HubBadge, HubButton, HubGrid, HubIcon, HubModal } from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import { factoryTestId } from '@hubert/shared';
import { Align, Col, Space, useResponsive } from '@hubert/styles';
import IconOutlineFilter from '@hubert/styles/lib/icons/icon-outline-filter.svg';
import React from 'react';

interface HubFiltersProps {
  header?: React.ReactNode;
  gap?: Space;
  cols?: Array<Col | string>;
  align?: Align;
  justify?: Align | 'space-between' | 'space-around';
  count?: number;
  contentHeight?: string;
  actions?: React.ReactNode;
  onSearch?: () => void;
  children: React.ReactNode;
}

export type { HubFiltersProps };

export function HubFilters({
  header,
  gap = '3',
  cols,
  align,
  justify,
  contentHeight,
  count,
  children,
  actions,
  onSearch,
  ...props
}: HubFiltersProps) {
  const t = useI18nMessage();
  const { isMobile } = useResponsive();

  const [showModal, setShowModal] = React.useState<boolean>(false);

  return isMobile ? (
    <>
      <HubBadge
        float
        content={count}
        rounded
        color="error"
        colorLevel="500"
        textColor="white"
      >
        <HubButton
          data-testid={factoryTestId(props, 'show')}
          variant="icon"
          onClick={() => setShowModal(true)}
        >
          <HubIcon icon={IconOutlineFilter} />
        </HubButton>
      </HubBadge>

      {showModal && (
        <HubModal
          opened
          header={header || t('hub-filters_title')}
          minContentHeight="72vh"
          contentHeight={contentHeight || '92vh'}
          actions={
            actions || (
              <HubButton
                data-testid={factoryTestId(props, 'search')}
                variant="default"
                full
                onClick={() => {
                  setShowModal(false);
                  onSearch?.();
                }}
              >
                {t('hub-filters_btn-search')}
              </HubButton>
            )
          }
          onClose={() => setShowModal(false)}
        >
          <HubGrid gap={gap} align={align} justify={justify}>
            {children}
          </HubGrid>
        </HubModal>
      )}
    </>
  ) : (
    <HubGrid
      row
      cols={cols}
      gap={gap}
      align={align}
      justify={justify}
      responsive="md"
    >
      {children}
    </HubGrid>
  );
}
