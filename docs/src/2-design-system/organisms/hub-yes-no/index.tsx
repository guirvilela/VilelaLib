import { HubButton } from '@hubert/atoms';
import { useAct } from '@hubert/http';
import { HubYesNo, HubYesNoProps } from '@hubert/organisms';
import React from 'react';
import { HubYesNoConfig } from './storyConfig';

export const Default = (args: HubYesNoProps) => {
  const [opened, setOpened] = React.useState(false);
  const [motivo, setMotivo] = React.useState('');

  const action = useAct(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(
          () =>
            motivo ? resolve(true) : reject(new Error('Informar o motivo!')),
          1500
        )
      ),
    {
      onSuccess() {
        setOpened(false);
      }
    }
  );

  return (
    <>
      <HubButton onClick={() => setOpened(true)}>Open Modal</HubButton>
      <HubYesNo
        {...args}
        opened={opened}
        status="error"
        title="Tem certeza que deseja remover este item?"
        action={action}
        placeholder="Motivo"
        value={motivo}
        onChange={setMotivo}
        onDone={() => action()}
        onClose={() => setOpened(false)}
      />
    </>
  );
};

export default HubYesNoConfig;
