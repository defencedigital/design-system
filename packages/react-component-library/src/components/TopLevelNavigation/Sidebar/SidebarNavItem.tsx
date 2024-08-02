import React, { useContext, useEffect, useRef, useState } from 'react'
import { Transition } from 'react-transition-group'

import { SidebarSubNav } from './SidebarSubNav'
import { SidebarContext } from './context'
import { Tooltip } from '../../Tooltip'
import { TRANSITION_TIMEOUT } from './constants'
import { StyledNavItem, StyledNavItemIcon, StyledNavItemText } from './partials'
import { SidebarNavItemProps } from './types'

export const SidebarNavItem = ({
  isActive,
  link,
  icon,
  onClick,
  children,
  ...rest
}: SidebarNavItemProps) => {
  const [hasMouseOver, setHasMouseOver] = useState(false)
  const { isOpen } = useContext(SidebarContext)
  const linkElement = link as React.ReactElement
  const nodeRef = useRef(null)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e)
    setHasMouseOver(false)
  }

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledNavItemIcon isOpen={isOpen}>{icon}</StyledNavItemIcon>}
        <Transition
          nodeRef={nodeRef}
          in={isOpen}
          timeout={TRANSITION_TIMEOUT}
          unmountOnExit
        >
          {(state) => (
            <StyledNavItemText
              ref={nodeRef}
              $transitionStatus={state}
              isOpen={isOpen}
              data-testid="sidebar-nav-item-text"
            >
              {linkElement.props.children}
            </StyledNavItemText>
          )}
        </Transition>
        {!isOpen && hasMouseOver && (
          <Tooltip left={70} position="right">
            {linkElement.props.children}
          </Tooltip>
        )}
      </>
    ),
    onClick: handleClick,
    'aria-label': linkElement.props.children,
    'data-testid': 'sidebar-nav-item',
    ...rest,
  })

  return (
    <StyledNavItem
      isActive={isActive}
      onMouseEnter={(_) => setHasMouseOver(true)}
      onMouseLeave={(_) => setHasMouseOver(false)}
    >
      {item}
      {isOpen && children && (
        <SidebarSubNav onClick={handleClick}>{children}</SidebarSubNav>
      )}
    </StyledNavItem>
  )
}

SidebarNavItem.displayName = 'SidebarNavItem'
