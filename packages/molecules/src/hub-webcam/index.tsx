import {
  HubAlert,
  HubAnimation,
  HubButton,
  HubCard,
  HubGrid,
  HubIcon,
  HubModal,
  HubModalProps
} from '@hubert/atoms';
import { useI18nMessage } from '@hubert/i18n';
import { base64UrlToFile, randomNumber } from '@hubert/shared';
import AnimationCapture from '@hubert/styles/lib/animations/capture.json';
import IconError from '@hubert/styles/lib/icons/icon-outline-error.svg';
import IconExclamation from '@hubert/styles/lib/icons/icon-outline-exclamation-mark.svg';
import React from 'react';
import { PreviewContainer, VideoContainer } from './styles';

let stream: MediaStream | null = null;

interface HubWebCamProps extends HubModalProps {
  videoSize?: number;
  onDone?: (file?: File) => void;
}

export type { HubWebCamProps };

export function HubWebCam({
  opened,
  videoSize,
  radius,
  onClose,
  onDone,
  ...props
}: HubWebCamProps) {
  const t = useI18nMessage();

  const [error, setError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);
  const [frontCam, setFrontCam] = React.useState(false);
  const [devices, setDevices] = React.useState<MediaDeviceInfo[]>([]);
  const [captured, setCaptured] = React.useState(false);

  const videoId = React.useMemo(() => `hub-webcam-${randomNumber()}`, []);
  const previewId = React.useMemo(
    () => `hub-webcam-picture-${randomNumber()}`,
    []
  );
  const size = React.useMemo(() => videoSize || 400, [videoSize]);

  const closeSteam = React.useCallback(() => {
    if (!stream) return;

    try {
      for (const track of stream.getTracks()) {
        track.stop();
      }
      stream = null;
    } catch {
      //
    }
  }, []);

  const capturePicture = React.useCallback(() => {
    const video = document.getElementById(videoId) as HTMLVideoElement;
    const preview = document.getElementById(previewId) as HTMLCanvasElement;

    preview.getContext('2d')?.drawImage(video, 0, 0, size, size);

    setCaptured(true);
  }, [videoId, previewId, size]);

  const clearPicture = React.useCallback(() => {
    setCaptured(false);
  }, []);

  const openSteam = React.useCallback(async () => {
    closeSteam();

    setLoading(true);

    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: frontCam ? 'user' : 'environment',
          width: size,
          height: size
        }
      });

      const video = document.getElementById(videoId) as HTMLVideoElement;
      if (video) {
        video.srcObject = stream;
        video.onloadedmetadata = () => {
          setLoading(false);
        };
      }
    } catch {
      setError(t('hub-webcam_error'));
      setLoading(false);
    }
  }, [videoId, frontCam, t, size]);

  const handleClose = React.useCallback(() => {
    clearPicture();
    closeSteam();
    onClose?.();
  }, [clearPicture, closeSteam, onClose]);

  const handleDone = React.useCallback(() => {
    const preview = document.getElementById(previewId) as HTMLCanvasElement;
    const file = base64UrlToFile(preview.toDataURL(), previewId + '.png');

    clearPicture();
    closeSteam();
    onDone?.(file);
  }, [clearPicture, closeSteam, onDone, previewId]);

  React.useEffect(() => {
    if (opened) {
      openSteam();
    }
  }, [opened, frontCam]);

  //? check devices
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;

    (async function check() {
      const devices = await navigator.mediaDevices.enumerateDevices();
      setDevices(devices?.filter((x) => x.kind.includes('video')) || []);
    })();
  }, []);

  return opened ? (
    <HubModal {...props} opened onClose={handleClose}>
      <HubCard loading={loading} borderless radius={radius} pad="0">
        <HubGrid gap="2">
          {loading && (
            <HubGrid row align="center" justify="center" pad="5">
              <HubAnimation
                source={AnimationCapture}
                width={size / 2 + 'px'}
                height={size / 2 + 'px'}
                autoplay
              />
            </HubGrid>
          )}
          <PreviewContainer
            id={previewId}
            hidden={!captured || loading || !!error}
            width={size}
            height={size}
          />
          <VideoContainer
            id={videoId}
            hidden={captured || loading || !!error}
            width={size}
            height={size}
            autoPlay
          />
          {devices.length > 1 && (
            <HubButton
              full
              variant="outline"
              onClick={() => setFrontCam(!frontCam)}
            >
              {t('hub-webcam_alt')}
            </HubButton>
          )}
          {error ? (
            <HubAlert
              title={error}
              icon={<HubIcon icon={IconError} size="sm" />}
              color="error"
              onClose={() => setError(undefined)}
              inline
            />
          ) : devices.length === 0 ? (
            <HubAlert
              title={t('hub-webcam_no-device')}
              icon={<HubIcon icon={IconExclamation} size="sm" />}
              color="warning"
              inline
            />
          ) : captured ? (
            <>
              <HubButton full variant="outline" onClick={clearPicture}>
                {t('hub-webcam_clear')}
              </HubButton>
              <HubButton full onClick={handleDone}>
                {t('hub-webcam_send')}
              </HubButton>
            </>
          ) : (
            <HubButton full onClick={capturePicture}>
              {t('hub-webcam_capture')}
            </HubButton>
          )}
        </HubGrid>
      </HubCard>
    </HubModal>
  ) : (
    <></>
  );
}
