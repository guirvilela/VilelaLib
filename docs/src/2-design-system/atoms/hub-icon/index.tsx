import { HubButton, HubIcon, HubIconProps } from '@hubert/atoms';
import { sendToClipboard, titleCase } from '@hubert/shared';
import { IconGallery, IconItem } from '@storybook/addon-docs/';
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import allIcons, { outlineIcons, solidIcons } from './icons';
import { HubIconConfig } from './storyConfig';

const RemoveElement = styled.div<{ hide?: boolean; children }>`
  ${({ hide }) => (hide ? 'display: none;' : '')}
`;

export const Default = (args: HubIconProps) => {
  return (
    <RemoveElement>
      <RemoveElement hide>
        import {titleCase(args.icon as never)} from '@hubert/styles/lib/icons/
        {args.icon}.svg';
      </RemoveElement>
      <HubIcon
        icon={allIcons[args.icon as never]}
        color={args.color}
        size={args.size}
        {...{ title: args.icon }}
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

function Msgbox({ icon, onClose }) {
  React.useEffect(() => {
    if (icon) {
      setTimeout(() => onClose(), 2000);
    }
  }, [icon]);

  return icon ? (
    ReactDOM.createPortal(
      <MsgboxStyle>'{icon}' copied!</MsgboxStyle>,
      window.document.body
    )
  ) : (
    <></>
  );
}

function copyIconImport(icon: string) {
  sendToClipboard(
    `import ${titleCase(icon)} from '@hubert/styles/lib/icons/${icon}.svg';`
  );
}

const IconList = ({ args, icons }) => {
  const [iconSelected, selectIcon] = React.useState('');

  return (
    <>
      <Msgbox icon={iconSelected} onClose={() => selectIcon('')} />
      <IconGallery {...args}>
        {Object.keys(icons).map((icon) => (
          <IconItem {...{ key: icon, name: icon }}>
            <HubButton
              variant="icon"
              onClick={() => {
                copyIconImport(icon);
                selectIcon(icon);
              }}
            >
              <HubIcon icon={icons[icon]} size="lg" pad="5" />
            </HubButton>
          </IconItem>
        ))}
      </IconGallery>
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const OutlineList = (args: any) => {
  return <IconList args={args} icons={outlineIcons} />;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SolidList = (args: any) => {
  return <IconList args={args} icons={solidIcons} />;
};

export default HubIconConfig;
