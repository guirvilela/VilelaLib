import styled from 'styled-components';

import { HubCalendarItem, HubCalendarProps } from './types';

export const CalendarHeadStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spaces[3]};
  width: 100%;
`;

export const CalendarHeadTitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces[2]};

  font-family: ${({ theme }) => theme.typography.h4.family};
  font-size: ${({ theme }) => theme.typography.h4.size};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  font-weight: 500;
`;

export const CalendarHeadLinkStyle = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary[200]};
  border: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CalendarHeadNextStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 50%;
  cursor: pointer;

  height: ${({ theme }) => theme.spaces[6]};
  width: ${({ theme }) => theme.spaces[6]};
`;

export const CalendarHeadPrevStyle = styled(CalendarHeadNextStyle)`
  transform: rotate(-180deg);
`;

export const CalendarDaysStyle = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: ${({ theme }) => theme.spaces[2]};
  grid-template-columns: auto auto auto auto auto auto auto;
  width: 100%;
`;

export const CalendarMonthsStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

export const CalendarYearsStyle = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
`;

export const CalendarPeriodStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: ${({ theme }) => theme.typography.body3.family};
  font-size: ${({ theme }) => theme.typography.body3.size};
  line-height: ${({ theme }) => theme.typography.body3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body3.letterSpacing};
  font-weight: 400;
`;

export const CalendarDayStyle = styled.button<HubCalendarItem>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({
    theme,
    selected,
    active,
    previous,
    next,
    disabled,
    today,
    event
  }) => {
    if (selected || active) {
      if (previous || next) {
        if (event && event.color) {
          return theme.colors[event.color][300];
        }
        return theme.colors.neutral[500];
      }
      return theme.colors.white[500];
    }
    if (previous || next) {
      if (event && event.color) {
        return theme.colors[event.color][200];
      }
      return theme.colors.neutral[300];
    }
    if (disabled) {
      if (event && event.color) {
        return theme.colors[event.color][400];
      }
      return theme.colors.neutral[300];
    }
    if (today || (event && event.color)) {
      if (event && event.color) {
        return theme.colors[event.color][500];
      }
      return theme.colors.info[600];
    }
    return theme.colors.neutral[800];
  }};
  background-color: ${({
    theme,
    selected,
    active,
    today,
    event,
    previous,
    next
  }) => {
    if (previous || next) {
      if (event && event.color) {
        return theme.colors[event.color][400];
      }
    }
    if (selected) {
      if (event && event.color) {
        return theme.colors[event.color][500];
      }
      return theme.colors.info[500];
    }
    if (active) {
      if (event && event.color) {
        return theme.colors[event.color][300];
      }
      return theme.colors.info[300];
    }
    if (today || (event && event.color)) {
      if (event && event.color) {
        return theme.colors[event.color][100];
      }
      return theme.colors.info[100];
    }
    return 'transparent';
  }};
  border-radius: 50%;
  border: none;
  ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : `cursor: pointer;`)};
  transition: 0.5s ease background-color, 0.2s ease color;
`;

export const CalendarMonthYearStyle = styled.button<HubCalendarItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spaces[1]} ${theme.spaces[2]}`};
  background-color: transparent;
  color: ${({ theme, selected, active }) => {
    if (selected) {
      return theme.colors.info[500];
    }
    if (!active) {
      return theme.colors.neutral[300];
    }
    return theme.colors.neutral[800];
  }};
  border-radius: 50%;
  border: none;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const CalendarActionsStyle = styled.div`
  display: grid;
  align-items: center;
  justify-content: end;
  gap: ${({ theme }) => theme.spaces[2]};
  width: 100%;
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
`;

export const CalendarTodayStyle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return theme.colors.neutral[300];
    }
    return theme.colors.primary[200];
  }};
  ${({ disabled }) => (disabled ? '' : `cursor: pointer;`)};
`;

export const CalendarStyle = styled.div<HubCalendarProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  width: ${({ width }) => width || '100%'};

  ${CalendarDayStyle} {
    ${({ theme, size }) => {
      switch (size) {
        case 'xs':
          return `width: ${theme.spaces[2]}; height: ${theme.spaces[2]};`;
        case 'sm':
          return `width: ${theme.spaces[3]}; height: ${theme.spaces[3]};`;
        case 'md':
          return `width: ${theme.spaces[5]}; height: ${theme.spaces[5]};`;
        case 'lg':
          return `width: ${theme.spaces[6]}; height: ${theme.spaces[6]};`;
        default:
          if (size) {
            return `width: ${size}; height: ${size};`;
          }
          return `width: ${theme.spaces[6]}; height: ${theme.spaces[6]};`;
      }
    }};
  }

  ${CalendarTodayStyle},
  ${CalendarDayStyle} {
    font-family: ${({ theme, typo }) => theme.typography[typo || 'h4'].family};
    font-size: ${({ theme, typo }) => theme.typography[typo || 'h4'].size};
    line-height: ${({ theme, typo }) =>
      theme.typography[typo || 'h4'].lineHeight};
    letter-spacing: ${({ theme, typo }) =>
      theme.typography[typo || 'h4'].letterSpacing};
    font-weight: ${({ typo }) =>
      typo ? (typo.includes('body') ? 600 : 400) : 400};
  }

  ${CalendarHeadTitleStyle},
  ${CalendarHeadLinkStyle} {
    font-family: ${({ theme, typo, typoHeader }) =>
      theme.typography[typoHeader || typo || 'h4'].family};
    font-size: ${({ theme, typo, typoHeader }) =>
      theme.typography[typoHeader || typo || 'h4'].size};
    line-height: ${({ theme, typo, typoHeader }) =>
      theme.typography[typoHeader || typo || 'h4'].lineHeight};
    letter-spacing: ${({ theme, typo, typoHeader }) =>
      theme.typography[typoHeader || typo || 'h4'].letterSpacing};
    font-weight: ${({ typo, typoHeader }) =>
      typoHeader || typo
        ? (typoHeader || typo)?.includes('body')
          ? 600
          : 400
        : 400};
  }
`;
