import { HubAvatarProps } from '@hubert/atoms';
import React from 'react';
import { Action } from '@hubert/http';
import { HubModalAlertProps } from '@hubert/molecules';

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

declare function HubPhotoUpload({ name, src, size, videoSize, disabled, hideUpload, hideWebCam, onChange, ...props }: HubPhotoUploadProps): React.JSX.Element;

/** Used to choose colors and icons */
declare type HubStatus = 'success' | 'error' | 'warning' | 'info';

interface HubYesNoProps extends HubModalAlertProps {
    opened: boolean;
    title: React.ReactNode;
    status?: HubStatus;
    content?: React.ReactNode;
    action?: Action<any>;
    placeholder?: string;
    value?: string;
    onChange?: (v: string) => void;
    onClose: () => void;
    onDone: () => void;
}

declare function HubYesNo({ title, content, placeholder, action, value, onChange, onClose, onDone, ...props }: HubYesNoProps): React.JSX.Element;

export { HubPhotoUpload, HubPhotoUploadProps, HubYesNo, HubYesNoProps };
