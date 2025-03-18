import { useI18nMessage } from '@hubert/i18n';
import { debounce } from '@hubert/shared';
import React from 'react';
import { ListItemStyle, ListLoadMoreStyle, ListStyle } from './styles';
import { HubListItemProps, HubListProps } from './types';

export type { HubListItemProps, HubListProps };

const lazy = debounce(300);

export function HubList({ onLoadMore, children, ...props }: HubListProps) {
  const t = useI18nMessage();

  const [loadMore, setLoadMore] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleScroll(e: any) {
    if (e && e.target && onLoadMore) {
      if (
        e.target.scrollTop + e.target.clientHeight >=
        e.target.scrollHeight - 24
      ) {
        lazy(() => {
          onLoadMore();
          setLoadMore(true);
          setTimeout(() => {
            e.target.scroll({
              top: e.target.scrollTop + 100,
              behavior: 'smooth'
            });
            setLoadMore(false);
          }, 1000);
        });
      }
    }
  }

  return (
    <ListStyle {...props} onScroll={onLoadMore ? handleScroll : undefined}>
      {children}
      {loadMore && (
        <ListLoadMoreStyle>{t('hub-list_loadmore')}</ListLoadMoreStyle>
      )}
    </ListStyle>
  );
}

export const HubListItem = React.forwardRef(function HubListItem(
  { children, ...props }: HubListItemProps,
  ref
) {
  return (
    <ListItemStyle ref={ref as never} {...props}>
      {children}
    </ListItemStyle>
  );
});
