![Vague for Claude: nine swatches of the Vague palette above the title](assets/banner.png)

# Vague for Claude

A port of [vague.nvim](https://github.com/vague-theme/vague.nvim) by Alberto Hernandez to the Claude desktop and mobile apps: a cool, dark, low-contrast palette of soft grays and muted pastels.

It is a Claude Code mod with one hook. When a session starts, it sets the app's colors with `$.theme.set`. It reads no files, runs no programs and makes no network calls.

![Illustration: a conversation in the Vague colors, with an edit's diff and a passing test run](assets/chat.png)

![Illustration: TypeScript in the Vague code colors](assets/code.png)

*Illustrations drawn in the theme's colors, not screenshots of the app. The app takes its code colors from these hues and picks the exact shades itself, so its code blocks can look slightly lighter or darker.*

## Install

At the prompt of a Claude Code terminal session:

```text
/plugin install vague --marketplace Geisson19/claude-vague
```

From a shell:

```bash
claude plugin install vague --marketplace Geisson19/claude-vague
```

In the desktop app: click **+** next to the prompt box, then **Plugins**, **Add marketplace** with `Geisson19/claude-vague`, then **Add plugin**.

Answer `y` to add the marketplace, then pick a scope (user installs it for every session). The colors apply from the next session you start.

## What to expect

- **Desktop and mobile apps only.** The terminal and editor extensions draw no theme.
- **Dark only.** Vague has no light variant, so the app switches to dark mode while the theme is set.
- **One theme at a time.** Another theme mod, such as `/custom-theme` from `theme-examples`, replaces this one.
- **One change from the original.** Muted text is `#909099` instead of Vague's `#878787`, so it reaches the 4.5:1 contrast the app asks of small text; `#878787` still marks draft pull requests. Every other color is Vague's own.

## Palette

| Role | Color | From Vague |
| --- | --- | --- |
| Page | `#141415` | `bg` |
| Cards | `#1c1c24` | `inactiveBg` |
| Panels | `#252530` | `line` |
| Text | `#cdcdcd` | `fg` |
| Secondary text | `#aeaed1` | `constant` |
| Accent | `#6e94b2` | `keyword` |
| Danger | `#d8647e` | `error` |
| Success | `#7fa563` | `plus` |
| Warning | `#f3be7c` | `warning` |
| Highlight | `#bb9dbd` | `parameter` |

## Requirements

Claude Code 2.1.324 or later in the desktop app's Code tab.

## License

MIT. The palette is Alberto Hernandez's, from vague.nvim, under its MIT license; both notices are in [LICENSE](LICENSE). `hooks/make-colors.js` is the color helper Anthropic's mod tooling ships for themes, included unchanged. The images are drawn from the HTML files beside them in `assets/`; re-render each with headless Chrome at a device scale of 2 and its page size (banner 1280×480, code 1280×640, chat 1280×680).
