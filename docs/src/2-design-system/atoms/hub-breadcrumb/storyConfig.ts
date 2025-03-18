import { HubBreadcrumbProps, HubBreadcrumbsProps } from '@hubert/atoms';
import {
  BOOL,
  CHILDREN,
  CHILDRENS,
  factoryMeta,
  NOWRAP,
  TEXT,
  WIDTH
} from '~/utils';

export const HubBreadcrumbConfig = factoryMeta<HubBreadcrumbProps>({
  args: {
    children: TEXT.Title
  },
  props: {
    active: BOOL(),
    nowrap: NOWRAP(),
    width: WIDTH(),
    children: CHILDREN('Breadcrumb label')
  }
});

export const HubBreadcrumbsConfig = factoryMeta<HubBreadcrumbsProps>({
  args: {},
  props: {
    children: CHILDRENS<React.ReactElement>('Breadcrumb elements')
  }
});
