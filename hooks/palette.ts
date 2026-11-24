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

const DAYLIGHT = {
  page: '#e4e4ea',
  card: '#ebebf0',
  panel: '#f2f2f6',
  ink: '#252530',
  constant: '#4f4f78',
  muted: '#5c5c6b',
  parameter: '#7e5a81',
  floatBorder: '#626270',
  keyword: '#3f6a8c',
  number: '#9a6224',
  error: '#a03a54',
  warning: '#8f6420',
  plus: '#4e7535',
} as const

export const { theme, problems } = makeColors({
  label: 'Vague',
  roles: {
    accent: VAGUE.keyword,
    danger: VAGUE.error,
    success: VAGUE.plus,
    warning: VAGUE.warning,
    pro: VAGUE.parameter,
  },
  light: {
    roles: {
      accent: DAYLIGHT.keyword,
      danger: DAYLIGHT.error,
      success: DAYLIGHT.plus,
      warning: DAYLIGHT.warning,
      pro: DAYLIGHT.parameter,
    },
    git: {
      added: DAYLIGHT.plus,
      removed: DAYLIGHT.error,
      modified: DAYLIGHT.warning,
      merged: DAYLIGHT.parameter,
      closed: DAYLIGHT.error,
      conflicting: DAYLIGHT.number,
      draft: DAYLIGHT.floatBorder,
    },
    gray: {
      anchors: {
        'surface-0': DAYLIGHT.page,
        'surface-1': DAYLIGHT.card,
        'surface-2': DAYLIGHT.panel,
        'text-primary': DAYLIGHT.ink,
        'text-secondary': DAYLIGHT.constant,
        'text-muted': DAYLIGHT.muted,
      },
    },
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
