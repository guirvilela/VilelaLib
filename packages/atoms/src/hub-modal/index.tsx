import { factoryTestId } from '@hubert/shared';
import React from 'react';
import ReactDOM from 'react-dom';
import IconClose from './icon-close';
import {
  ModalActionsStyle,
  ModalBodyStyle,
  ModalHeaderBtnCloseStyle,
  ModalHeaderCloseFloatStyle,
  ModalHeaderStyle,
  ModalOverlayStyle,
  ModalStyle,
  ModalWrapperStyle
} from './styles';
import { HubModalProps } from './types';

export type { HubModalProps };

export function HubModal({
  opened,
  header,
  actions,
  onClose,
  noCloseBtn,
  children,
  ...props
}: HubModalProps) {
  const [show, setShow] = React.useState(opened);

  const [headerHeight, setHeaderHeight] = React.useState(header ? 74 : 0);
  const [actionsHeight, setActionsHeight] = React.useState(actions ? 72 : 0);

  React.useEffect(() => {
    setShow(opened);
  }, [opened]);

  return show ? (
    ReactDOM.createPortal(
      <ModalStyle {...props}>
        <ModalOverlayStyle
          data-testid={factoryTestId(props, 'close')}
          onClick={onClose}
        />
        <ModalWrapperStyle>
          <>
            {header ? (
              <ModalHeaderStyle
                ref={(el) => setHeaderHeight(el?.clientHeight || 74)}
              >
                {header}
                {!noCloseBtn && (
                  <ModalHeaderBtnCloseStyle
                    data-testid={factoryTestId(props, 'head-close')}
                    type="button"
                    onClick={onClose}
                  >
                    <IconClose />
                  </ModalHeaderBtnCloseStyle>
                )}
              </ModalHeaderStyle>
            ) : onClose && !noCloseBtn ? (
              <ModalHeaderCloseFloatStyle>
                <ModalHeaderBtnCloseStyle
                  data-testid={factoryTestId(props, 'btn-close')}
                  type="button"
                  onClick={onClose}
                >
                  <IconClose />
                </ModalHeaderBtnCloseStyle>
              </ModalHeaderCloseFloatStyle>
            ) : (
              <></>
            )}
            <ModalBodyStyle
              minHeight={props.minContentHeight}
              maxHeight={props.contentHeight}
              offsetHeight={headerHeight + actionsHeight}
            >
              {children}
            </ModalBodyStyle>
            {actions && (
              <ModalActionsStyle
                ref={(el) => setActionsHeight(el?.clientHeight || 74)}
              >
                {actions}
              </ModalActionsStyle>
            )}
          </>
        </ModalWrapperStyle>
      </ModalStyle>,
      document.body
    )
  ) : (
    <></>
  );
}
