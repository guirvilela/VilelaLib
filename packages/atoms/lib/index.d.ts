import React$1 from 'react';
import { Space, Color, Size, Typo, ColorLevel, Type, Target, Variant, Cursor, BorderStyle, Shadow, Align, Overflow, DisplayPosition, MediaQuery, Col, Position, Sort, FontWeight, TextDecoration, FontStyle, TextTransform, InputType, Autocomplete, Resize, PositionExtra } from '@hubert/styles';
import { ISODate } from '@hubert/shared';

interface HubAlertProps {
    title: React.ReactNode;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    inline?: boolean;
    nowrap?: boolean;
    radius?: Space;
    pad?: Space | Space[];
    color?: Color;
    gap?: Space;
    actions?: React.ReactNode | React.ReactNode[];
    onClose?: () => void;
}

declare function HubAlert({ icon, title, content, actions, onClose, ...props }: HubAlertProps): React$1.JSX.Element;

/** onClick event used to get position of element clicked */
declare type HubSource = React.MouseEvent;
/** Icons files type */
declare type HubIconSvg = () => React.ReactSVGElement;
/** Animation files type */
declare type HubAnimationData = any;

interface HubAnimationProps {
    source?: HubAnimationData;
    loop?: boolean;
    autoplay?: boolean;
    width?: string;
    height?: string;
    size?: Size;
}
interface HubAnimationRef {
    play(): void;
    pause(): void;
    stop(): void;
}

declare function HubAnimationInner({ source, loop, autoplay, ...props }: HubAnimationProps, ref: any): React$1.JSX.Element;
declare const HubAnimation: (props: HubAnimationProps & {
    ref?: React$1.ForwardedRef<HubAnimationRef>;
}) => ReturnType<typeof HubAnimationInner>;

interface HubAvatarProps {
    src?: string;
    alt?: string;
    size?: Size | string;
    typo?: Typo;
    initials?: string;
    borderless?: boolean;
    color?: Color;
    colorLevel?: ColorLevel;
    colorText?: Color;
    colorTextLevel?: ColorLevel;
    onClick?: () => void;
}

declare function HubAvatar({ src, alt, initials, onClick, ...props }: HubAvatarProps): React$1.JSX.Element;

interface HubBadgeProps {
    color?: Color;
    colorLevel?: ColorLevel;
    textColor?: Color;
    textColorLevel?: ColorLevel;
    radius?: Space;
    pad?: Space | Space[];
    rounded?: boolean;
    float?: boolean;
    content?: string | number;
    size?: Size;
    width?: string;
    height?: string;
    position?: Space | [Space, Space];
    children?: React.ReactNode;
}

declare function HubBadge({ content, children, ...props }: HubBadgeProps): React$1.JSX.Element;

interface HubBreadcrumbsProps {
    children?: React.ReactElement | React.ReactElement[];
}
interface HubBreadcrumbProps {
    active?: boolean;
    nowrap?: boolean;
    width?: string;
    children?: React.ReactNode;
}

declare function HubBreadcrumbs({ children, ...props }: HubBreadcrumbsProps): React$1.JSX.Element;
declare function HubBreadcrumb({ children, ...props }: HubBreadcrumbProps): React$1.JSX.Element;

interface HubButtonProps {
    id?: string;
    link?: boolean;
    full?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: Size | '100%';
    href?: string;
    rounded?: boolean;
    noPadding?: boolean;
    clickable?: boolean;
    noHover?: boolean;
    bgHover?: boolean;
    active?: boolean;
    noHideLabel?: boolean;
    radius?: Space;
    type?: Type;
    target?: Target;
    variant?: Variant;
    color?: Color;
    colorLevel?: ColorLevel;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    cursor?: Cursor;
    dragTrigger?: boolean;
    onClick?: (e: HubSource) => Promise<any> | void;
    onHover?: (e?: HubSource) => void;
    children?: React.ReactNode | React.ReactNode[];
}

declare const HubButton: React$1.ForwardRefExoticComponent<HubButtonProps & React$1.RefAttributes<unknown>>;

declare type HubCalendarMode = 'days' | 'months' | 'years';
interface HubCalendarProps {
    headless?: boolean;
    initialMode?: HubCalendarMode;
    mandatoryMode?: boolean;
    range?: boolean;
    disabled?: boolean | ISODate[] | ((date: ISODate) => boolean);
    events?: HubCalendarEvent[] | ((date: ISODate) => HubCalendarEvent);
    previousDisabled?: boolean;
    nextDisabled?: boolean;
    size?: Size | string;
    typo?: Typo;
    typoHeader?: Typo;
    min?: ISODate;
    max?: ISODate;
    withActions?: boolean;
    width?: string;
    value?: ISODate[];
    onChange?: (v: ISODate[]) => void;
    onCalendarChange?: (date: ISODate) => void;
    children?: React$1.ReactNode;
}
interface HubCalendarEvent {
    date: ISODate;
    reason: string;
    color?: Color;
}

declare function HubCalendarInner({ range, headless, initialMode, mandatoryMode, disabled: disabledAll, events, previousDisabled, nextDisabled, min, max, value, onChange, onCalendarChange, withActions, children, ...props }: HubCalendarProps, ref: any): React$1.JSX.Element;
declare const HubCalendar: (props: HubCalendarProps & {
    ref?: React$1.ForwardedRef<unknown>;
}) => ReturnType<typeof HubCalendarInner>;

interface HubCardProps {
    id?: string;
    height?: string;
    minHeight?: string;
    loading?: boolean;
    centered?: boolean;
    radius?: Space;
    pad?: Space | Space[];
    color?: Color;
    colorLevel?: ColorLevel;
    accent?: Color;
    accentLevel?: ColorLevel;
    borderless?: boolean;
    borderSize?: string;
    borderStyle?: BorderStyle;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    hover?: boolean;
    draggable?: boolean;
    shadow?: Shadow;
    noRelative?: boolean;
    onDrag?: React.DragEventHandler<HTMLDivElement>;
    onDrop?: React.DragEventHandler<HTMLDivElement>;
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubCard({ loading, children, onDrag, onDrop, ...props }: HubCardProps): React$1.JSX.Element;

interface HubCheckboxProps {
    id: string;
    checked?: boolean;
    indeterminate?: boolean;
    color?: Color;
    colorText?: Color;
    borderColor?: Color;
    align?: Align;
    disabled?: boolean;
    size?: Size;
    onChange?: (v: boolean) => void;
    onClick?: () => void;
    children?: React.ReactNode;
}

declare function HubCheckbox({ onClick, onChange, children, ...props }: HubCheckboxProps): React$1.JSX.Element;

interface HubCollapseProps {
    opened?: boolean;
    disabled?: boolean;
    nowrap?: boolean;
    hidden?: boolean;
    width?: string;
    align?: Align;
    titleClickable?: boolean;
    titleAlign?: Align;
    titleWidth?: string;
    triggerPosition?: 'left' | 'right';
    height?: string;
    triggerRotateStep?: 0 | 90 | 180;
    gap?: Space;
    title?: React$1.ReactNode;
    titlePad?: Space | Space[];
    titleColor?: Color;
    titleColorLevel?: ColorLevel;
    titleRadius?: Space;
    children?: React$1.ReactNode;
    onChange?: (opened: boolean) => void;
    customTrigger?: (opened?: boolean, onClick?: () => void) => React$1.ReactNode;
}

declare function HubCollapse({ opened, title, hidden, triggerPosition, triggerRotateStep, customTrigger, onChange, children, ...props }: HubCollapseProps): React$1.JSX.Element;

interface HubDropdownProps<T = unknown, V = unknown> {
    opened?: boolean;
    disabled?: boolean;
    position?: 'top' | 'bottom' | 'above';
    width?: string;
    height?: string;
    items?: T[];
    keyLabel?: string | ((item: T) => string | React.ReactNode);
    keyValue?: string | ((item: T) => V);
    keySearch?: string | ((item: T) => string);
    compareKey?: string | ((item: T) => V);
    value?: V;
    onOpen?: () => void;
    onClose?: () => void;
    onChange?: (value: V, index?: number, item?: T) => void;
    children?: (label?: string, search?: (v: string) => void) => React.ReactNode | React.ReactNode[];
}
interface HubDropdownRef {
    open(): void;
    close(): void;
}

declare function HubDropdownInner<T = unknown, V = unknown>({ position, width, onChange, onOpen, onClose, children, ...props }: HubDropdownProps<T, V>, ref: any): React$1.JSX.Element;
declare const HubDropdown: <T = unknown, V = unknown>(props: HubDropdownProps<T, V> & {
    ref?: React$1.ForwardedRef<HubDropdownRef> | undefined;
}) => ReturnType<typeof HubDropdownInner>;
declare function HubDropdownIcon(): React$1.JSX.Element;

interface HubFileUploadProps {
    title?: string;
    extensions?: string;
    accept?: string;
    size?: string;
    color?: Color;
    colorLevel?: ColorLevel;
    loading?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    value?: File[];
    onChange?: (files: File[]) => Promise<any> | void;
    element?: React.ReactNode;
}

declare function HubFileUpload({ disabled: globalDisabled, loading: globalLoading, value, onChange, element, ...props }: HubFileUploadProps): React$1.JSX.Element;

interface HubFormProps {
    gap?: Space;
    onSubmit?: (v: HTMLFormElement) => void;
    children?: React.ReactNode;
}

declare function HubForm({ onSubmit, children, ...props }: HubFormProps): React$1.JSX.Element;

declare type Column = Array<Col | string>;
interface HubGridProps {
    row?: boolean;
    filled?: boolean;
    fluid?: boolean | 'horizontal' | 'vertical';
    flex?: boolean;
    spacer?: boolean;
    block?: boolean;
    align?: Align;
    justify?: Align | 'space-between' | 'space-around';
    gap?: Space;
    gutter?: Space | Space[];
    pad?: (Space | string) | (Space | string)[];
    cols?: Column;
    width?: string;
    height?: string;
    minHeight?: string;
    maxHeight?: string;
    overflow?: Overflow;
    layer?: number;
    inset?: (Space | string) | (Space | string)[];
    position?: DisplayPosition;
    responsive?: MediaQuery;
    order?: number;
    rowStart?: number;
    rowEnd?: number;
    columnStart?: number;
    columnEnd?: number;
    rowSize?: string;
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubGrid({ children, ...props }: HubGridProps): React$1.JSX.Element;

interface HubIconProps {
    size?: Size;
    width?: string;
    height?: string;
    color?: Color;
    colorLevel?: ColorLevel;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    pad?: Space | Space[];
    icon: HubIconSvg;
    rotate?: number;
}

declare function HubIcon({ icon: Icon, rotate, ...props }: HubIconProps): React$1.JSX.Element;

interface HubListProps {
    hover?: boolean;
    pad?: Space | Space[];
    gap?: Space;
    height?: string;
    onLoadMore?: () => void;
    children?: React.ReactNode | React.ReactNode[];
}
interface HubListItemProps {
    active?: boolean;
    nowrap?: boolean;
    border?: boolean;
    fullBorder?: boolean;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    accentBorderColor?: Color;
    accentBorderColorLevel?: ColorLevel;
    radius?: Space;
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubList({ onLoadMore, children, ...props }: HubListProps): React$1.JSX.Element;
declare const HubListItem: React$1.ForwardRefExoticComponent<HubListItemProps & React$1.RefAttributes<unknown>>;

interface HubModalProps {
    opened?: boolean;
    width?: string;
    widthMd?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    contentHeight?: string;
    minContentHeight?: string;
    position?: Position;
    color?: Color;
    colorLevel?: ColorLevel;
    colorText?: Color;
    colorTextLevel?: ColorLevel;
    pad?: Space | Space[];
    offset?: (Space | string) | (Space | string)[];
    radius?: Space;
    darkOverlay?: boolean;
    noCloseBtn?: boolean;
    noPrintable?: boolean;
    overflow?: boolean | [boolean, boolean];
    onClose?: () => void;
    header?: React.ReactNode | React.ReactNode[];
    actions?: React.ReactNode | React.ReactNode[];
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubModal({ opened, header, actions, onClose, noCloseBtn, children, ...props }: HubModalProps): React$1.JSX.Element;

interface HubNavbarProps {
    height?: string;
    fixed?: boolean;
    gap?: Space;
    pad?: Space | Space[];
    color?: Color;
    colorLevel?: ColorLevel;
    colorText?: Color;
    colorTextLevel?: ColorLevel;
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;
}

declare function HubNavbar({ left, right, center, children, ...props }: HubNavbarProps): React$1.JSX.Element;

interface HubPaginationProps {
    current: number;
    pageSize: number;
    totalItems?: number;
    pageSizeOptions?: number[];
    disabled?: boolean;
    showSizeChanger?: boolean;
    showLabel?: boolean;
    showTotalLabel?: boolean;
    noShowIndicators?: boolean;
    onChange?: (page: number) => void;
    onChangePageSize?: (size: number) => void;
}

declare function HubPagination({ current, pageSize, totalItems, pageSizeOptions, onChange, onChangePageSize, ...props }: HubPaginationProps): React$1.JSX.Element;

declare enum PasswordStrength {
    Empty = 0,
    VeryWeak = 1,
    Weak = 2,
    Average = 3,
    Strong = 4,
    VeryStrong = 5
}
declare function getPasswordStrength(password: string): PasswordStrength;
interface HubPasswordStrengthProps {
    password: string;
}
declare function HubPasswordStrength(props: HubPasswordStrengthProps): React$1.JSX.Element;

interface HubPopoverProps {
    opened?: boolean;
    source?: HubSource;
    trigger?: 'click' | 'hover';
    triggerWidth?: string;
    autoClose?: boolean;
    disabled?: boolean;
    height?: string;
    width?: string;
    offset?: [number, number];
    radius?: Space;
    color?: Color;
    colorLevel?: ColorLevel;
    pad?: Space | Space[];
    onClose?: (v?: any) => void;
    content?: React.ReactNode;
    children?: React.ReactNode;
}

declare function HubPopover({ opened: open, source: src, disabled, trigger, triggerWidth, content, offset, children, onClose, ...props }: HubPopoverProps): React$1.JSX.Element;

interface HubPrintableProps {
    onPrint?(printMode?: boolean): void;
    children?: React$1.ReactNode;
}
interface HubPrintableRef {
    print(): void;
}
declare function HubPrintableInner({ onPrint, children }: HubPrintableProps, ref: any): React$1.JSX.Element;
declare const HubPrintable: (props: HubPrintableProps & {
    ref?: React$1.ForwardedRef<HubPrintableRef>;
}) => ReturnType<typeof HubPrintableInner>;

interface HubProgressBarProps {
    percent?: number | string;
    height?: string;
    indeterminate?: boolean;
    shaped?: boolean;
    mini?: boolean;
    play?: boolean;
    playSeconds?: number;
    display?: boolean;
    bgColorless?: boolean;
    color?: Color;
    colorLevel?: ColorLevel;
}

declare function HubProgressBar({ display, ...props }: HubProgressBarProps): React$1.JSX.Element;

interface HubProgressStepProps {
    label?: string;
    size?: string;
    active?: boolean;
    complete?: boolean;
    color?: Color;
    colorLevel?: ColorLevel;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode | React.ReactNode[];
}
interface HubProgressStepperProps {
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubProgressStep({ onClick, children, ...props }: HubProgressStepProps): React$1.JSX.Element;
declare function HubProgressStepper({ children, ...props }: HubProgressStepperProps): React$1.JSX.Element;

interface HubProgressTabsProps {
    current?: number;
    width?: string;
    height?: string;
    disabled?: boolean;
    gap?: Space;
    onChange?: (index: number) => void;
    children?: React.ReactElement<HubProgressTabProps>[];
}
interface HubProgressTabProps {
    active?: boolean;
    value?: any;
    disabled?: boolean;
    width?: string;
    height?: string;
    color?: Color;
    colorLevel?: ColorLevel;
    onClick?: () => void;
    children?: React.ReactNode;
}

declare function HubProgressTabs({ onChange, children, ...props }: HubProgressTabsProps): React$1.JSX.Element;
declare function HubProgressTab({ children, ...props }: HubProgressTabProps): React$1.JSX.Element;

interface HubRadioGroupProps<T = unknown> {
    disabled?: boolean;
    vertical?: boolean;
    color?: Color;
    size?: Size;
    gap?: Space;
    align?: Align;
    value?: T;
    onChange?: (v?: T) => void;
    children?: React.ReactElement<HubRadioProps>[];
}
interface HubRadioProps<T = unknown> {
    id: string;
    checked?: boolean;
    disabled?: boolean;
    color?: Color;
    size?: Size;
    value?: T;
    onChange?: (v?: T) => void;
    onClick?: () => void;
    children?: React.ReactNode;
}

declare function HubRadioGroup<T = unknown>({ onChange, children, ...props }: HubRadioGroupProps<T>): React$1.JSX.Element;
declare function HubRadio<T = unknown>({ onChange, onClick, children, ...props }: HubRadioProps<T>): React$1.JSX.Element;

interface HubSectionProps {
    title?: React.ReactNode;
    pad?: Space | Space[];
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubSection({ title, children, ...props }: HubSectionProps): React$1.JSX.Element;

interface HubSeparatorProps {
    color?: Color;
    colorLevel?: ColorLevel;
    radius?: Space;
    size?: Space | string;
    length?: Space | string;
    borderStyle?: BorderStyle;
    vertical?: boolean;
}

declare function HubSeparator(props: HubSeparatorProps): React$1.JSX.Element;

interface HubSidenavProps {
    opened?: boolean;
    width?: string;
    offset?: string;
    fixed?: boolean;
    noAnimation?: boolean;
    noContentHeight?: boolean;
    gap?: Space;
    pad?: Space | Space[];
    color?: Color;
    colorLevel?: ColorLevel;
    colorText?: Color;
    colorTextLevel?: ColorLevel;
    onClose?: () => void;
    top?: React.ReactNode;
    bottom?: React.ReactNode;
    children?: React.ReactNode;
}
interface HubSidenavIconProps {
    opened?: boolean;
    onChange?: (opened: boolean) => void;
}

declare function HubSidenav({ top, bottom, onClose, children, ...props }: HubSidenavProps): React$1.JSX.Element;
declare function HubSidenavIcon({ opened, onChange, ...props }: HubSidenavIconProps): React$1.JSX.Element;

interface HubSkeletonProps {
    count?: number;
}

declare function HubSkeleton({ count, ...props }: HubSkeletonProps): React$1.JSX.Element;

interface HubTableConfig {
    borderless?: boolean;
    headless?: boolean;
    childrenKey?: string;
}
interface HubTableRenderProps<T> {
    value: any;
    item: HubTableRow<T>;
    key: string;
    index: number;
    indexCol: number;
}
interface HubTableColumn<T> {
    label?: React.ReactNode;
    key: string;
    width?: string;
    minWidth?: string;
    align?: Align;
    headAlign?: Align;
    sticky?: boolean;
    nowrap?: boolean;
    printable?: boolean;
    headColspan?: number;
    colspan?: number;
    footColspan?: number;
    noOverflow?: boolean;
    hidden?: boolean;
    sort?: Sort;
    sorter?: (valueA: any, valueB: any) => number;
    formatter?: (value: any) => any;
    render?: (props: HubTableRenderProps<T>) => React.ReactNode;
    renderFoot?: (props: HubTableRenderProps<T>) => React.ReactNode;
}
declare type HubTableColumns<T = never> = HubTableColumn<T>[][];
declare type HubTableRow<T> = T & {
    configs?: HubTableRowConfig;
    ignoreColspan?: boolean;
    level?: number;
    children?: HubTableRow<T>[];
};
interface HubTableRowConfig {
    height?: string;
    color?: Color;
    colorLevel?: ColorLevel;
    border?: string;
    borderStyle?: BorderStyle;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    borderRadius?: Space;
    accentColor?: Color;
    accentColorLevel?: ColorLevel;
    gap?: Space;
    blink?: boolean;
}
interface HubTableProps<T = unknown> {
    configs?: HubTableConfig;
    rowConfigs?: HubTableRowConfig;
    columns: HubTableColumns<T>;
    data: HubTableRow<T>[];
    foots?: Partial<HubTableRow<T>>[];
    minHeight?: string;
    height?: string;
    width?: string;
    onSort?: (sorter?: (data?: HubTableRow<T>[]) => HubTableRow<T>[], col?: HubTableColumn<T>) => void;
    onLoadMore?: () => void;
    onClickRow?: (item: HubTableRow<T>) => void;
    dataChildrenKey?: keyof HubTableRow<T>;
    children?: React.ReactNode | React.ReactNode[];
}
interface HubTableRef {
    scrollTo: (v: number | ((el: HTMLDivElement) => number)) => void;
}

declare function HubTableInner<T>({ minHeight, height, columns, data, configs, rowConfigs, onLoadMore, onSort, onClickRow, foots, dataChildrenKey, children, ...props }: HubTableProps<T>, ref: any): React$1.JSX.Element;
declare const HubTable: <T = unknown>(props: HubTableProps<T> & {
    ref?: React$1.ForwardedRef<HubTableRef> | undefined;
}) => ReturnType<typeof HubTableInner>;

interface HubTabsProps {
    gap?: Space;
    current?: number;
    width?: string;
    disabled?: boolean;
    onChange?: (index: number) => void;
    children?: React.ReactElement<HubTabProps>[];
}
interface HubTabProps {
    active?: boolean;
    value?: any;
    width?: string;
    disabled?: boolean;
    color?: Color;
    colorLevel?: ColorLevel;
    onClick?: () => void;
    children?: React.ReactNode;
}

declare function HubTabs({ onChange, children, ...props }: HubTabsProps): React$1.JSX.Element;
declare function HubTab({ children, ...props }: HubTabProps): React$1.JSX.Element;

interface HubTextProps {
    typo: Typo;
    weight?: FontWeight;
    align?: Align;
    color?: Color;
    colorLevel?: ColorLevel;
    nowrap?: boolean;
    prewrap?: boolean;
    title?: string;
    decoration?: TextDecoration;
    spacing?: string;
    size?: Space;
    height?: Space | string;
    max?: number;
    fontStyle?: FontStyle;
    transform?: TextTransform;
    children?: React.ReactNode | React.ReactNode[];
}

declare function HubText({ max, children, ...props }: HubTextProps): React$1.JSX.Element;

interface HubTextFieldProps<T = string> {
    id: string;
    type?: InputType;
    className?: string;
    /**
     * - 9 - [0-9]
     * - a - [A-Za-z]
     * - A - [A-Z]
     * - \* - [A-Za-z0-9]
     */
    mask?: string;
    maskChar?: string;
    title?: string;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    noShowMask?: boolean;
    noGap?: boolean;
    clearable?: boolean;
    loading?: boolean;
    autoFocus?: boolean;
    wrap?: boolean;
    rows?: number;
    minLength?: number;
    maxLength?: number;
    min?: number | string;
    max?: number | string;
    step?: number | string;
    autocomplete?: Autocomplete;
    align?: Align;
    typo?: Typo;
    color?: Color;
    colorLevel?: ColorLevel;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    placeholderColor?: Color;
    placeholderColorLevel?: ColorLevel;
    pad?: Space | Space[];
    value?: T;
    defaultValue?: T;
    error?: string;
    /** @default both */
    resize?: Resize;
    onChange?: (v: T) => void;
    onLazyChange?: (v: T) => void;
    onShowPicker?: (el: HTMLInputElement) => void;
    onClick?: (e: HubSource) => void;
    onFocus?: (el: HTMLInputElement) => void;
    onClear?: () => void;
    containerRef?: (el: HTMLDivElement) => void;
    left?: React.ReactNode;
    right?: React.ReactNode;
    bottom?: React.ReactNode;
    hint?: React.ReactNode;
    element?: React.ReactNode;
    after?: React.ReactNode;
    children?: React.ReactNode;
}
interface HubTextFieldRef {
    inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
    showPicker: () => void;
    clear: () => void;
}

declare function HubTextFieldInner<T = string>({ id, className, clearable, noShowMask, value, defaultValue, loading, wrap, autocomplete, onChange, onLazyChange, onShowPicker, onClick, onFocus, onClear, containerRef, noGap, title, left, right, bottom, hint, after, element, children, ...props }: HubTextFieldProps<T>, ref: any): React$1.JSX.Element;
declare const HubTextField: <T = unknown>(props: HubTextFieldProps<T> & {
    ref?: React$1.ForwardedRef<HubTextFieldRef> | undefined;
}) => ReturnType<typeof HubTextFieldInner>;

interface HubToggleProps {
    id: string;
    checked?: boolean;
    color?: Color;
    disabled?: boolean;
    size?: Size;
    onChange?: (v: boolean) => void;
    onClick?: () => void;
    children?: React.ReactNode;
}

declare function HubToggle({ onClick, onChange, children, ...props }: HubToggleProps): React$1.JSX.Element;

interface HubTokenProps {
    length?: number;
    onlyNumber?: boolean;
    typo?: Typo;
    color?: Color;
    colorLevel?: ColorLevel;
    borderColor?: Color;
    borderColorLevel?: ColorLevel;
    bgColor?: Color;
    bgColorLevel?: ColorLevel;
    value?: string;
    onChange?: (v: string) => void;
}

declare function HubToken({ onlyNumber, length, value, onChange, ...props }: HubTokenProps): React$1.JSX.Element;

interface HubTooltipProps {
    opened?: boolean;
    disabled?: boolean;
    nowrap?: boolean;
    triggerWidth?: string;
    width?: string;
    position?: PositionExtra;
    content?: React.ReactNode;
    color?: Color;
    colorLevel?: ColorLevel;
    colorText?: Color;
    colorTextLevel?: ColorLevel;
    children?: React.ReactNode;
}

declare function HubTooltip({ opened: open, triggerWidth, content, disabled, position, children, ...props }: HubTooltipProps): React$1.JSX.Element;

export { HubAlert, HubAlertProps, HubAnimation, HubAnimationData, HubAnimationProps, HubAnimationRef, HubAvatar, HubAvatarProps, HubBadge, HubBadgeProps, HubBreadcrumb, HubBreadcrumbProps, HubBreadcrumbs, HubBreadcrumbsProps, HubButton, HubButtonProps, HubCalendar, HubCalendarEvent, HubCalendarMode, HubCalendarProps, HubCard, HubCardProps, HubCheckbox, HubCheckboxProps, HubCollapse, HubCollapseProps, HubDropdown, HubDropdownIcon, HubDropdownProps, HubDropdownRef, HubFileUpload, HubFileUploadProps, HubForm, HubFormProps, HubGrid, HubGridProps, HubIcon, HubIconProps, HubIconSvg, HubList, HubListItem, HubListItemProps, HubListProps, HubModal, HubModalProps, HubNavbar, HubNavbarProps, HubPagination, HubPaginationProps, HubPasswordStrength, HubPasswordStrengthProps, HubPopover, HubPopoverProps, HubPrintable, HubPrintableProps, HubPrintableRef, HubProgressBar, HubProgressBarProps, HubProgressStep, HubProgressStepProps, HubProgressStepper, HubProgressStepperProps, HubProgressTab, HubProgressTabProps, HubProgressTabs, HubProgressTabsProps, HubRadio, HubRadioGroup, HubRadioGroupProps, HubRadioProps, HubSection, HubSectionProps, HubSeparator, HubSeparatorProps, HubSidenav, HubSidenavIcon, HubSidenavProps, HubSkeleton, HubSkeletonProps, HubSource, HubTab, HubTabProps, HubTable, HubTableColumns, HubTableProps, HubTableRef, HubTableRenderProps, HubTableRow, HubTabs, HubTabsProps, HubText, HubTextField, HubTextFieldProps, HubTextFieldRef, HubTextProps, HubToggle, HubToggleProps, HubToken, HubTokenProps, HubTooltip, HubTooltipProps, getPasswordStrength };
