export interface ReactComponent {
  (): JSX.Element
  displayName?: string
}

export interface RouteProps {
  label: string
  params?: { [key: string]: unknown } | undefined
  name: string
  disabled?: boolean
}

export type DevMenuItem = ReactComponent | RouteProps

export const items: DevMenuItem[] = [
  {
    label: 'StoryBook',
    name: 'DevStoryBook',
  },
  // {
  //   label: 'Forms Playground',
  //   name: 'FormsPlayground',
  // },
  // {
  //   label: 'Fixed Footer Playground',
  //   name: 'FixedFooterPlayground',
  // },
]
