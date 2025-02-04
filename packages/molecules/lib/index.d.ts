import React$1 from 'react';
import { HubIconSvg, HubTableRow, HubTableColumns, HubCalendarProps, HubTextFieldProps, HubModalProps } from '@hubert/atoms';
import { Color, ColorLevel, Typo, Space, Col, Align } from '@hubert/styles';
import { ISOTime } from '@hubert/shared';

interface HubAvatarMenuProps {
    name?: string;
    photo?: string;
    width?: string;
    menuWidth?: string;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    color?: Color;
    colorLevel?: ColorLevel;
    options?: Array<{
        icon?: HubIconSvg;
        label: string;
        href?: string;
        customElement?: (item: React.ReactNode, index?: number) => React.ReactNode;
        onClick?: () => void;
    }>;
}

declare function HubAvatarMenu({ name, photo, width, menuWidth, color, colorLevel, bgColor, bgColorLevel, options, ...props }: HubAvatarMenuProps): React$1.JSX.Element;

declare type HubTableColumn<T> = HubTableColumns<T>[0][0];
declare type HubTableRowConfig<T> = HubTableRow<T>['configs'];
interface HubDataListColumn<T> extends HubTableColumn<T> {
    renderMobile?: HubTableColumn<T>['render'];
    noMobileTitle?: boolean;
    gridCols?: Col[];
}
declare type HubDataListColumns<T = never> = HubDataListColumn<T>[][];
interface HubDataListProps<T> {
    columns: HubDataListColumns<T>;
    data: HubTableRow<T>[];
    rowConfigs?: HubTableRowConfig<T>;
    height?: string;
    typo?: Typo;
    gap?: Space;
    onLoadMore?: () => void;
    children?: React.ReactNode;
}

declare function HubDataList<T>({ typo, columns, data, height, gap, rowConfigs, onLoadMore, children }: HubDataListProps<T>): React$1.JSX.Element;

interface HubDataTableEmptyProps {
    title?: React$1.ReactNode;
    content?: React$1.ReactNode;
    horizontal?: boolean;
    color?: Color;
    size?: string;
    pad?: Space | Space[];
}

declare function HubDataTableEmpty({ title, content, horizontal, color, size, pad, ...props }: HubDataTableEmptyProps): React$1.JSX.Element;

interface HubDataTableInitialProps {
    title?: React$1.ReactNode;
    content?: React$1.ReactNode;
    horizontal?: boolean;
    color?: Color;
    size?: string;
    pad?: Space | Space[];
}

declare function HubDataTableInitial({ title, content, horizontal, color, size, pad, ...props }: HubDataTableInitialProps): React$1.JSX.Element;

interface HubDateProps extends HubCalendarProps {
    id: string;
    editable?: boolean;
    height?: string;
    width?: string;
    onClose?: () => void;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    loading?: boolean;
    clearable?: boolean;
    wrap?: boolean;
    inputTypo?: Typo;
    color?: Color;
    colorLevel?: ColorLevel;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    error?: string;
    onClick?: () => void;
    onFocus?: (el: HTMLInputElement) => void;
    onClear?: () => void;
    left?: React.ReactNode;
    right?: React.ReactNode;
    bottom?: React.ReactNode;
    hint?: React.ReactNode;
    children?: React.ReactNode;
}

declare function HubDate({ id, editable, width, height, onClose, placeholder, readOnly, required, loading, wrap, clearable, inputTypo, color, colorLevel, borderColor, borderColorLevel, bgColor, bgColorLevel, error, onClear, onClick, onFocus, left, right, bottom, hint, range, size, typo, withActions, value, onChange, children, ...props }: HubDateProps): React$1.JSX.Element;

/** Used to choose colors and icons */
declare type HubStatus = 'success' | 'error' | 'warning' | 'info';

interface HubFeedbackProps {
    opened?: boolean;
    status?: HubStatus;
    title?: React$1.ReactNode;
    content: React$1.ReactNode;
    width?: string;
    height?: string;
    okLabel?: string;
    actions?: React$1.ReactNode;
    onOk?: () => void;
    onClose?: () => void;
}

declare function HubFeedback({ opened, status, title, content, width, height, okLabel, actions, onOk, onClose, ...props }: HubFeedbackProps): React$1.JSX.Element;

interface HubFiltersProps {
    header?: React$1.ReactNode;
    gap?: Space;
    cols?: Array<Col | string>;
    align?: Align;
    justify?: Align | 'space-between' | 'space-around';
    count?: number;
    contentHeight?: string;
    actions?: React$1.ReactNode;
    onSearch?: () => void;
    children: React$1.ReactNode;
}

declare function HubFilters({ header, gap, cols, align, justify, contentHeight, count, children, actions, onSearch, ...props }: HubFiltersProps): React$1.JSX.Element;

interface HubInputColorProps extends HubTextFieldProps {
}

declare function HubInputColor({ id, defaultValue, value, onChange, onLazyChange, children, ...props }: HubInputColorProps): React$1.JSX.Element;

interface HubModalAlertProps extends HubModalProps {
    opened: boolean;
    status?: HubStatus;
    title?: React$1.ReactNode;
    content?: React$1.ReactNode;
    message?: React$1.ReactNode;
    width?: string;
    disabled?: boolean;
    loading?: boolean;
    labelCancel?: React$1.ReactNode;
    labelDone?: React$1.ReactNode;
    onDone?: () => void;
    onClose: () => void;
    onCloseMsg?: () => void;
}

declare function HubModalAlert({ opened, title, content, status, message, width, disabled, loading, labelCancel, labelDone, onDone, onClose, onCloseMsg, ...props }: HubModalAlertProps): React$1.JSX.Element;

interface HubModalRightProps extends HubModalProps {
    labelCancel?: React$1.ReactNode;
    labelDone?: React$1.ReactNode;
    onDone?: () => void;
    onClose: () => void;
}

declare function HubModalRight({ labelCancel, labelDone, onDone, onClose, children, ...props }: HubModalRightProps): React$1.JSX.Element;

interface HubPhoneValue {
    ddi?: string;
    ddd?: string;
    phone?: string;
}
declare type TextFieldPhone = HubPhoneValue & Omit<HubTextFieldProps, 'defaultValue' | 'onLazyChange' | 'value' | 'onChange'>;
interface HubPhoneProps extends TextFieldPhone {
    onChange?: (v: HubPhoneValue) => void;
}

declare function HubPhone({ id, ddd, ddi, phone, disabled, onChange, children, ...props }: HubPhoneProps): React$1.JSX.Element;

interface HubStatusAlertProps {
    status?: HubStatus;
    message?: React$1.ReactNode;
    timeout?: number;
    onCloseMsg?: () => void;
}

declare function HubStatusAlert({ status, message, timeout, onCloseMsg, ...props }: HubStatusAlertProps): React$1.JSX.Element;

interface HubTimeProps extends Omit<HubTextFieldProps, 'defaultValue' | 'onLazyChange'> {
    value?: ISOTime;
    onChange?: (v: ISOTime) => void;
}

declare function HubTime({ id, value, onChange, children, ...props }: HubTimeProps): React$1.JSX.Element;

interface HubWebCamProps extends HubModalProps {
    videoSize?: number;
    onDone?: (file?: File) => void;
}

declare function HubWebCam({ opened, videoSize, radius, onClose, onDone, ...props }: HubWebCamProps): React$1.JSX.Element;

export { HubAvatarMenu, HubAvatarMenuProps, HubDataList, HubDataListColumns, HubDataListProps, HubDataTableEmpty, HubDataTableEmptyProps, HubDataTableInitial, HubDataTableInitialProps, HubDate, HubDateProps, HubFeedback, HubFeedbackProps, HubFilters, HubFiltersProps, HubInputColor, HubInputColorProps, HubModalAlert, HubModalAlertProps, HubModalRight, HubModalRightProps, HubPhone, HubPhoneProps, HubPhoneValue, HubStatus, HubStatusAlert, HubStatusAlertProps, HubTime, HubTimeProps, HubWebCam, HubWebCamProps };
