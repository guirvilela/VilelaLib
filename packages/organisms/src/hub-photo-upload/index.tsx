import {
  HubAvatar,
  HubAvatarProps,
  HubButton,
  HubGrid,
  HubIcon,
  HubList,
  HubListItem,
  HubPopover,
  HubSource,
  HubTooltip
} from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import { HubWebCam } from '@hubert/molecules';
import { getInitials, uploadFile } from '@hubert/shared';
import { parsePixel } from '@hubert/styles';
import IconOutlineCamera from '@hubert/styles/lib/icons/icon-outline-camera.svg';
import IconOutlinePencil from '@hubert/styles/lib/icons/icon-outline-pencil.svg';
import IconOutlineUpload from '@hubert/styles/lib/icons/icon-outline-upload.svg';
import React from 'react';

interface HubPhotoUploadProps extends HubAvatarProps {
  name: string;
  src?: string;
  size?: string;
  videoSize?: number;
  disabled?: boolean;
  hideUpload?: boolean;
  hideWebCam?: boolean;
  onChange?: (photo?: File) => void;
}

export type { HubPhotoUploadProps };

export function HubPhotoUpload({
  name,
  src,
  size,
  videoSize,
  disabled,
  hideUpload,
  hideWebCam,
  onChange,
  ...props
}: HubPhotoUploadProps) {
  const t = useI18nMessage();

  const [menuRef, setMenuRef] = React.useState<HubSource>();
  const [showCamera, setShowCamera] = React.useState(false);

  return (
    <>
      <HubGrid
        position="relative"
        width={size ? parsePixel(size) + 20 + 'px' : '124px'}
        align="center"
      >
        <HubAvatar
          src={src}
          initials={getInitials(name)}
          size={size || '104px'}
          typo="h3"
          {...props}
        />
        {!disabled && (
          <HubGrid
            row
            position="absolute"
            align="center"
            justify="end"
            inset={['', '', '0', '']}
          >
            <HubTooltip
              content={t('hub-photo-upload_tooltip')}
              width="120px"
              position="topLeft"
            >
              <HubButton variant="icon" onClick={setMenuRef}>
                <HubIcon icon={IconOutlinePencil} />
              </HubButton>
            </HubTooltip>
          </HubGrid>
        )}
      </HubGrid>

      <HubPopover
        source={menuRef}
        onClose={setMenuRef}
        width="240px"
        autoClose
        content={
          <HubList hover>
            {!hideUpload && (
              <HubListItem>
                <HubButton
                  variant="ghost"
                  noPadding
                  onClick={async () => {
                    const arquivo = await uploadFile(false, '.jpg,.jpeg,.png');
                    onChange?.(arquivo?.[0]);
                  }}
                >
                  <HubIcon icon={IconOutlineUpload} />
                  {t('hub-photo-upload_upload')}
                </HubButton>
              </HubListItem>
            )}
            {!hideWebCam && (
              <HubListItem>
                <HubButton
                  variant="ghost"
                  noPadding
                  onClick={() => setShowCamera(true)}
                >
                  <HubIcon icon={IconOutlineCamera} />
                  {t('hub-photo-upload_camera')}
                </HubButton>
              </HubListItem>
            )}
          </HubList>
        }
      />

      {!hideWebCam && (
        <HubWebCam
          opened={showCamera}
          videoSize={videoSize}
          onDone={(v) => {
            onChange?.(v);
            setShowCamera(false);
          }}
          onClose={() => setShowCamera(false)}
        />
      )}
    </>
  );
}
