import type { Register, ThemeSetArgs } from 'claude-code'

import { problems, theme } from './palette'

const LOOK: ThemeSetArgs = { colors: theme }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))
    if (unpainted !== undefined) $.ui.toast(unpainted)

    const set = await $.theme.set(LOOK)
    if (!set.isDrawn) $.ui.status(set.reason)

    return next(e)
  })
}
