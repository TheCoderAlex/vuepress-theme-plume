import type { CanIUseOptions } from './caniuse.js'
import type { PDFOptions } from './pdf.js'
import type { IconsOptions } from './icons.js'
import type { PlotOptions } from './plot.js'
import type { ReplOptions } from './repl.js'

export interface MarkdownPowerPluginOptions {
  pdf?: boolean | PDFOptions

  // new syntax
  icons?: boolean | IconsOptions
  plot?: boolean | PlotOptions

  // video embed
  bilibili?: boolean
  youtube?: boolean

  // code embed
  codepen?: boolean
  /**
   * @deprecated
   */
  replit?: boolean
  codeSandbox?: boolean
  jsfiddle?: boolean

  // container
  repl?: false | ReplOptions
  fileTree?: boolean

  caniuse?: boolean | CanIUseOptions
}
