import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'
import {
  IconChatBubble,
  IconExitToApp,
  IconPerson,
  IconSettings,
  IconHome,
} from '@royalnavy/icon-library'

import { Link } from '../../Link'
import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
  MastheadUser,
  MastheadUserItem,
} from '.'
import { Notification, Notifications } from '../NotificationPanel'
import { MASTHEAD_SUBCOMPONENT } from './constants'
import { ClassificationBar } from '../../ClassificationBar'

import { TextE } from '../../Text'

const StyledContainer = styled.div`
  min-height: 10rem;
`

export default {
  args: {
    title: 'Royal Navy Design System',
  },
  component: Masthead,
  subcomponents: {
    MastheadNav,
    MastheadNavItem,
    MastheadUser,
    MastheadUserItem,
    Notifications,
    Notification,
  },
  title: 'Components/Masthead',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: {
    initialOpenSubcomponent: {
      control: false,
    },
    Logo: { control: false },
    classificationBar: { control: false },
    homeLink: { control: false },
    nav: { control: false },
    notifications: { control: false },
    onSearch: { control: false },
    user: { control: false },
  },
} as Meta<typeof Masthead>

export const Default: StoryFn<typeof Masthead> = (props) => {
  const notifications = (
    <Notifications link={<Link href="#" />}>
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
    </Notifications>
  )

  const user = (
    <MastheadUser initials="RN">
      <MastheadUserItem
        icon={<IconPerson />}
        link={<Link href="#">Profile</Link>}
      />
      <MastheadUserItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
      <MastheadUserItem
        icon={<IconChatBubble />}
        link={<Link href="#">Support</Link>}
      />
      <MastheadUserItem
        icon={<IconExitToApp />}
        link={<Link href="#">Logout</Link>}
      />
    </MastheadUser>
  )

  const nav = (
    <MastheadNav>
      <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="#">Styles</Link>} />
      <MastheadNavItem link={<Link href="#">Components</Link>} />
      <MastheadNavItem link={<Link href="#">About</Link>} />
    </MastheadNav>
  )

  return (
    <StyledContainer>
      <Masthead
        {...props}
        homeLink={<Link href="#" />}
        nav={nav}
        notifications={notifications}
        user={user}
      />
    </StyledContainer>
  )
}

Default.args = {
  hasUnreadNotification: true,
}

export const CustomLogo: StoryFn<typeof Masthead> = (props) => (
  <Masthead {...props} Logo={IconHome} />
)

CustomLogo.storyName = 'Custom logo'
CustomLogo.args = {
  onSearch: null,
}

export const WithoutLogo: StoryFn<typeof Masthead> = (props) => (
  <Masthead {...props} hasDefaultLogo={false} />
)

WithoutLogo.storyName = 'Without logo'
WithoutLogo.args = {
  onSearch: null,
}

export const WithSearch: StoryFn<typeof Masthead> = (props) => (
  <Masthead {...props} />
)

WithSearch.storyName = 'Search'

const userWithAvatar = (
  <MastheadUser initials="RN">
    <MastheadUserItem
      icon={<IconPerson />}
      link={<Link href="#">Profile</Link>}
    />
    <MastheadUserItem
      icon={<IconSettings />}
      link={<Link href="#">Settings</Link>}
    />
    <MastheadUserItem
      icon={<IconChatBubble />}
      link={<Link href="#">Support</Link>}
    />
    <MastheadUserItem
      icon={<IconExitToApp />}
      link={<Link href="#">Logout</Link>}
    />
  </MastheadUser>
)

export const WithAvatarLinks: StoryFn<typeof Masthead> = (props) => {
  return <Masthead {...props} user={userWithAvatar} />
}

WithAvatarLinks.storyName = 'Avatar links'
WithAvatarLinks.args = {
  onSearch: null,
}

export const WithNavigation: StoryFn<typeof Masthead> = (props) => {
  const nav = (
    <MastheadNav>
      <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="#">Styles</Link>} />
      <MastheadNavItem link={<Link href="#">Components</Link>} />
      <MastheadNavItem link={<Link href="#">About</Link>} />
    </MastheadNav>
  )

  return <Masthead {...props} homeLink={<Link href="#" />} nav={nav} />
}

WithNavigation.storyName = 'Navigation'
WithNavigation.args = {
  onSearch: null,
}

export const WithInlineNav = WithNavigation.bind({})
WithInlineNav.storyName = 'Inline navigation'
WithInlineNav.args = {
  ...WithNavigation.args,
  hasInlineNav: true,
  user: userWithAvatar,
}

export const WithNotifications: StoryFn<typeof Masthead> = (props) => {
  const notifications = (
    <Notifications link={<Link href="#" />}>
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
    </Notifications>
  )

  return <Masthead {...props} notifications={notifications} />
}

WithNotifications.storyName = 'Notifications'
WithNotifications.args = {
  onSearch: null,
}

export const WithSearchOpen = Default.bind({})
WithSearchOpen.args = {
  initialOpenSubcomponent: MASTHEAD_SUBCOMPONENT.SEARCH,
}
WithSearchOpen.storyName = 'Search open'
WithSearchOpen.parameters = {
  docs: { disable: true },
}

export const WithNotificationsOpen: StoryFn<typeof Masthead> = (args) => (
  <div
    css={`
      height: 25rem;
    `}
  >
    <Default {...args} />
  </div>
)
WithNotificationsOpen.args = {
  initialOpenSubcomponent: MASTHEAD_SUBCOMPONENT.NOTIFICATIONS,
}
WithNotificationsOpen.storyName = 'Notifications open'
WithNotificationsOpen.parameters = {
  docs: { disable: true },
}

export const WithUserMenuOpen: StoryFn<typeof Masthead> = (args) => {
  const user = (
    <MastheadUser initials="AB" initialIsOpen>
      <MastheadUserItem
        icon={<IconPerson />}
        link={<Link href="#">Profile</Link>}
      />
      <MastheadUserItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </MastheadUser>
  )

  const nav = (
    <MastheadNav>
      <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="#">Styles</Link>} />
      <MastheadNavItem link={<Link href="#">Components</Link>} />
      <MastheadNavItem link={<Link href="#">About</Link>} />
    </MastheadNav>
  )

  return (
    <div
      css={`
        height: 10rem;
      `}
    >
      <Masthead {...args} homeLink={<Link href="#" />} nav={nav} user={user} />
    </div>
  )
}
WithUserMenuOpen.storyName = 'User options open'
WithUserMenuOpen.parameters = {
  docs: { disable: true },
}

export const WithClassificationBar = Default.bind({})
WithClassificationBar.args = {
  ...Default.args,
  classificationBar: <ClassificationBar />,
}
WithClassificationBar.storyName = 'Classification bar'

const StyledClientComponent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
`

export const WithCustomClientComponent = Default.bind({})
WithCustomClientComponent.args = {
  ...Default.args,
  customClientComponent: (
    <StyledClientComponent>
      <TextE>Arbitrary text</TextE>
    </StyledClientComponent>
  ),
}
