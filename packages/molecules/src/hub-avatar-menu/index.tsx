import DownArrow from "@vilela/build-lib/styles/lib/icons/icon-outline-down-arrow.svg";
import React from "react";
import {
  HubAvatar,
  HubButton,
  HubGrid,
  HubIcon,
  HubList,
  HubListItem,
  HubPopover,
  HubText,
} from "../../../atoms";
import { factoryTestId, getInitials } from "../../../shared/src/utils";
import { useResponsive } from "../../../styles";
import { HubAvatarMenuProps } from "./types";

export type { HubAvatarMenuProps };

export function HubAvatarMenu({
  name,
  photo,
  width,
  menuWidth,
  color,
  colorLevel,
  bgColor,
  bgColorLevel,
  options,
  ...props
}: HubAvatarMenuProps) {
  const { isMobile } = useResponsive();

  return (
    <HubPopover
      trigger="click"
      width={menuWidth}
      content={
        options && (
          <HubList hover pad={["2", "3"]}>
            {options.map((x, i) =>
              x.customElement ? (
                x.customElement(
                  <HubButton link variant="action">
                    <HubListItem>
                      {x.icon && <HubIcon icon={x.icon} size="sm" />}
                      <HubText typo="body2" weight="600">
                        {x.label}
                      </HubText>
                    </HubListItem>
                  </HubButton>,
                  i
                )
              ) : (
                <HubButton
                  key={`hub-avatar-menu-list-item-${i}`}
                  data-testid={factoryTestId(props, `item-${i}-click`)}
                  link={!!x.href}
                  variant="action"
                  href={x.href}
                  onClick={x.onClick}
                >
                  <HubListItem>
                    {x.icon && <HubIcon icon={x.icon} size="sm" />}
                    <HubText typo="body2" weight="600">
                      {x.label}
                    </HubText>
                  </HubListItem>
                </HubButton>
              )
            )}
          </HubList>
        )
      }
    >
      <HubButton variant="action" {...props}>
        <HubAvatar
          src={photo}
          alt="avatar"
          initials={getInitials(name)}
          color={bgColor || "neutral"}
          colorLevel={bgColorLevel}
          colorText={color}
          colorTextLevel={colorLevel}
          borderless
        />
        {!isMobile && (
          <HubGrid row align="center" justify="center" gap="1" width={width}>
            <HubText
              typo="body1"
              weight="600"
              color={color}
              colorLevel={colorLevel}
              title={name}
              nowrap
            >
              {name}
            </HubText>
            {options && (
              <HubIcon icon={DownArrow} color={color} colorLevel={colorLevel} />
            )}
          </HubGrid>
        )}
      </HubButton>
    </HubPopover>
  );
}
