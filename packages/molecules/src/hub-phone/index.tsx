import {
  HubGrid,
  HubModal,
  HubTable,
  HubTableColumns,
  HubTableRow,
  HubTextField
} from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import { numberFormatter, phoneFormatter } from '@hubert/shared';
import React from 'react';
import styled from 'styled-components';
import { DDI } from './ddi';
import { HubPhoneProps, HubPhoneValue } from './types';

export type { HubPhoneProps, HubPhoneValue };

type Country = typeof DDI[0];

const Trigger = styled.div<{ disabled?: boolean }>`
  font-family: 'Flags';

  width: ${({ theme }) => theme.spaces[7]};
  min-width: ${({ theme }) => theme.spaces[7]};
  min-height: ${({ theme }) => theme.spaces[7]};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutralGrey[100]};
  border-radius: ${({ theme }) => theme.spaces[1]};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Flag = styled.div`
  font-family: 'Flags';
`;

const defaultSource = {
  ddd: '',
  ddi: '55',
  phone: ''
};

function countriesForRows(
  items: Country[],
  selected: string
): HubTableRow<Country>[] {
  return items.map((item) => ({
    ...item,
    configs:
      selected === item.code
        ? {
            color: 'neutralGrey',
            colorLevel: '100'
          }
        : undefined
  }));
}

export function HubPhone({
  id,
  ddd,
  ddi,
  phone,
  disabled,
  onChange,
  children,
  ...props
}: HubPhoneProps) {
  const t = useI18nMessage();

  const [showModal, setShowModal] = React.useState(false);
  const [source, setSource] = React.useState({
    ddd,
    ddi: ddi || defaultSource.ddi,
    phone
  });
  const [countries, setCountries] = React.useState(DDI);
  const [search, setSearch] = React.useState('');

  const label = React.useMemo(
    () => (source ? phoneFormatter(source.phone, source.ddd) : ''),
    [source]
  );

  const currentCountry = React.useMemo(
    () => DDI.find((x) => x.code === source.ddi),
    [source.ddi]
  );

  const countriesRows = React.useMemo(
    () => countriesForRows(countries, source.ddi),
    [countries, source.ddi]
  );

  const handleChange = React.useCallback(
    (v: string) => {
      const value = { ...defaultSource, ddi: source.ddi };

      if (!v) {
        setSource(value);
        onChange?.(value);
        return;
      }

      const nums = numberFormatter(v);

      if (value.ddi === '55') {
        value.ddd = nums.substring(0, 2);
        value.phone = nums.substring(2);
      } else {
        value.phone = nums;
      }

      setSource(value);
      onChange?.(value);
    },
    [source, onChange]
  );

  const handleSearch = React.useCallback(
    (v: string) => {
      setSearch(v);

      if (v) {
        setCountries(
          DDI.filter((x) =>
            `${x.label};${x.code}`
              .toLowerCase()
              .includes(String(v).toLowerCase())
          )
        );
      } else {
        setCountries(DDI);
      }
    },
    [countries]
  );

  const handleSelectCountry = React.useCallback(
    (v: Country) => {
      const value = { ...source, ddi: v.code };
      setSource(value);
      onChange?.(value);
      setShowModal(false);
    },
    [source]
  );

  const countriesColumns: HubTableColumns<Country> = [
    [
      {
        key: 'flag',
        width: '36px',
        render: ({ item }) => <Flag>{item.flag}</Flag>
      },
      {
        key: 'label',
        align: 'start'
      },
      {
        key: 'code',
        align: 'end',
        width: '120px',
        render: ({ item }) => `+${item.code}`
      }
    ]
  ];

  React.useEffect(() => {
    setSource({ ddd, ddi: ddi || defaultSource.ddi, phone });
  }, [ddd, ddi, phone]);

  return (
    <>
      <HubTextField
        {...props}
        id={`hub-phone-number-${id}`}
        pad={['0', '2', '0', '0']}
        disabled={disabled}
        value={label}
        onChange={handleChange}
        left={
          <Trigger
            title={currentCountry?.label}
            onClick={() => !disabled && setShowModal(true)}
            disabled={disabled}
          >
            {currentCountry?.flag}
          </Trigger>
        }
      >
        {children}
      </HubTextField>

      <HubModal
        opened={showModal}
        header={t('hub-phone-modal-title')}
        onClose={() => setShowModal(false)}
        width="400px"
        pad={['0', '3', '3', '3']}
      >
        <HubGrid gap="2">
          <HubTextField
            id={`hub-phone-search-${id}`}
            placeholder={t('hub-phone-modal-search')}
            value={search}
            onChange={handleSearch}
            clearable
          />

          <HubTable
            columns={countriesColumns}
            data={countriesRows}
            configs={{
              headless: true
            }}
            height="300px"
            onClickRow={handleSelectCountry}
          />
        </HubGrid>
      </HubModal>
    </>
  );
}
