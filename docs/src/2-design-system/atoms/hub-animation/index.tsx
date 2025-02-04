import { HubAnimation, HubAnimationProps, HubButton } from '@hubert/atoms';
import { sendToClipboard, titleCase } from '@hubert/shared';
import { IconGallery, IconItem } from '@storybook/addon-docs/';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { HubAnimationConfig } from './storyConfig';

import animations from './data';

const RemoveElement = styled.div<{ hide?: boolean; children }>`
  ${({ hide }) => (hide ? 'display: none;' : '')}
`;

export const Default = (args: HubAnimationProps) => {
  return (
    <RemoveElement>
      <RemoveElement hide>
        import {titleCase(args.source as never)} from
        '@hubert/styles/lib/animations/
        {args.source.replace('animation-', '')}.json';
      </RemoveElement>
      <HubAnimation
        {...args}
        source={animations[args.source as never]}
        {...{ title: args.source }}
      />
    </RemoveElement>
  );
};

const MsgboxStyle = styled.div`
  position: fixed;
  z-index: 99;
  top: 24px;
  left: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border-radius: 8px;
  box-shadow: rgb(255 255 255 / 10%) 0 -1px 0 0 inset;
  background-color: #333333e6;
  color: #fff;
`;

function Msgbox({ item, onClose }) {
  React.useEffect(() => {
    if (item) {
      setTimeout(() => onClose(), 2000);
    }
  }, [item]);

  return item ? (
    ReactDOM.createPortal(
      <MsgboxStyle>'{item}' copied!</MsgboxStyle>,
      window.document.body
    )
  ) : (
    <></>
  );
}

function copyImport(animation: string) {
  sendToClipboard(
    `import ${titleCase(
      animation
    )} from '@hubert/styles/lib/animations/${animation.replace(
      'animation-',
      ''
    )}.json';`
  );
}

const Gallery = styled(IconGallery)<React.PropsWithChildren>``;
const GalleryItem = styled(IconItem)<
  React.PropsWithChildren<{ name: string }>
>``;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export const List = (args: any) => {
  const [itemSelected, selectItem] = React.useState('');

  return (
    <>
      <Msgbox item={itemSelected} onClose={() => selectItem('')} />
      <Gallery>
        {Object.keys(animations).map((animation) => (
          <GalleryItem key={animation} name={animation}>
            <HubButton
              variant="action"
              onClick={() => {
                copyImport(animation);
                selectItem(animation);
              }}
              bgColor={animation.includes('white') ? 'neutral' : 'white'}
              bgColorLevel="600"
            >
              <HubAnimation
                source={animations[animation]}
                width="64px"
                height="64px"
                loop
              />
            </HubButton>
          </GalleryItem>
        ))}
      </Gallery>
    </>
  );
};

export default HubAnimationConfig;
