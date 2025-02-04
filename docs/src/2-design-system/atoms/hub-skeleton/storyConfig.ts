import { HubSkeleton, HubSkeletonProps } from '@hubert/atoms';
import { factoryMeta, NUMBER } from '~/utils';

export const HubSkeletonConfig = factoryMeta<HubSkeletonProps>({
  title: 'Design System/Atoms/HubSkeleton',
  component: HubSkeleton,
  description: 'import { HubSkeleton } from "@hubert/atoms";',
  args: {},
  props: {
    count: NUMBER('Repete o elemento (para preencher mais a tela)')
  }
});
