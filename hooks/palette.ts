import { makeColors } from './make-colors.js'

const VAGUE = {
  bg: '#141415',
  inactiveBg: '#1c1c24',
  line: '#252530',
  fg: '#cdcdcd',
  constant: '#aeaed1',
  parameter: '#bb9dbd',
  floatBorder: '#878787',
  keyword: '#6e94b2',
  number: '#e0a363',
  error: '#d8647e',
  warning: '#f3be7c',
  plus: '#7fa563',
} as const

// Vague's floatBorder gray sits at 4.2:1 on panels; one step lighter reaches the 4.5:1 muted text needs.
const MUTED = '#909099'

export const { theme, problems } = makeColors({
  label: 'Vague',
  only: 'dark',
  roles: {
    accent: VAGUE.keyword,
    danger: VAGUE.error,
    success: VAGUE.plus,
    warning: VAGUE.warning,
    pro: VAGUE.parameter,
  },
  dark: {
    git: {
      added: VAGUE.plus,
      removed: VAGUE.error,
      modified: VAGUE.warning,
      merged: VAGUE.parameter,
      closed: VAGUE.error,
      conflicting: VAGUE.number,
      draft: VAGUE.floatBorder,
    },
    gray: {
      anchors: {
        'surface-0': VAGUE.bg,
        'surface-1': VAGUE.inactiveBg,
        'surface-2': VAGUE.line,
        'surface-3': VAGUE.line,
        'text-primary': VAGUE.fg,
        'text-secondary': VAGUE.constant,
        'text-muted': MUTED,
      },
    },
  },
})
