import React from "react";
import { factoryTestId } from "../../../shared/src/utils";
import IconClose from "./icon-close";
import {
  AlertCloseStyle,
  AlertContentStyle,
  AlertInnerStyle,
  AlertStyle,
  AlertTitleStyle,
} from "./styles";
import { HubAlertProps } from "./types";

export type { HubAlertProps };

export function HubAlert({
  icon,
  title,
  content,
  actions,
  onClose,
  ...props
}: HubAlertProps) {
  const showAlert = React.useMemo(() => typeof title !== "boolean", [title]);

  return showAlert ? (
    <AlertStyle {...props}>
      {icon}
      <AlertInnerStyle>
        <AlertTitleStyle>{title}</AlertTitleStyle>
        {content && <AlertContentStyle>{content}</AlertContentStyle>}
        {actions}
      </AlertInnerStyle>
      {onClose && (
        <AlertCloseStyle
          data-testid={factoryTestId(props, "close")}
          type="button"
          onClick={onClose}
        >
          <IconClose />
        </AlertCloseStyle>
      )}
    </AlertStyle>
  ) : (
    <></>
  );
}
