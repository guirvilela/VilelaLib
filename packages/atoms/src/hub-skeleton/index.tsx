import React from 'react';

import { SkeletonStyle, SkeletonStyleItem } from './styles';
import { HubSkeletonProps } from './types';

export type { HubSkeletonProps };

export function HubSkeleton({ count, ...props }: HubSkeletonProps) {
  const items = React.useMemo(() => {
    const list = new Array(count).fill(1);
    return list.map((_, i) => (
      <SkeletonStyle key={`hub-skeleton-${i}`} {...props}>
        <SkeletonStyleItem width="55%" head />
        <SkeletonStyleItem width="80%" />
        <SkeletonStyleItem width="90%" />
        <SkeletonStyleItem width="83%" />
        <SkeletonStyleItem width="80%" />
        <SkeletonStyleItem width="20%" />
      </SkeletonStyle>
    ));
  }, [count]);

  return <>{items}</>;
}
