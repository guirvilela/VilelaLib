import { uniqueKey } from '@hubert/shared';
import lottie from 'lottie-web';
import React from 'react';
import { AnimationStyle } from './styles';
import { HubAnimationProps, HubAnimationRef } from './types';

export type { HubAnimationProps, HubAnimationRef };

function HubAnimationInner(
  { source, loop, autoplay, ...props }: HubAnimationProps,
  ref
) {
  const el = React.useRef();
  const name = React.useMemo(() => `hub-animation-${uniqueKey()}`, []);

  const play = React.useCallback(() => lottie.play(name), [name]);
  const pause = React.useCallback(() => lottie.pause(name), [name]);
  const stop = React.useCallback(() => lottie.stop(name), [name]);

  React.useImperativeHandle<HubAnimationRef, HubAnimationRef>(
    ref,
    () => ({ play, pause, stop }),
    []
  );

  React.useEffect(() => {
    const animations = lottie?.['getRegisteredAnimations']?.() || [];

    if (el.current && !animations.some((x) => x?.name === name)) {
      lottie.loadAnimation({
        name,
        container: el.current,
        renderer: 'canvas',
        loop: loop ?? false,
        autoplay: autoplay ?? true,
        animationData: source
      });
    }
    return () => {
      lottie.destroy(name);
    };
  }, [el.current]);

  return source ? <AnimationStyle ref={el} {...props} /> : <></>;
}

export const HubAnimation = React.forwardRef(HubAnimationInner) as (
  props: HubAnimationProps & { ref?: React.ForwardedRef<HubAnimationRef> }
) => ReturnType<typeof HubAnimationInner>;
