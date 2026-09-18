---
title: Current
description: The Current MμVim. Neovim + Lua, Mason LSP, Telescope, and shared palettes.
permalink: /lua/
---

<span class="badge lua">Current · Lua</span>

[mu-vim](https://github.com/AndresMpa/mu-vim) is the config that still moves. It's Neovim-only, written in Lua, and it's where new work lands first: Mason, formatter and linter hooks, Telescope. The other two aren't abandoned; they just don't get features that only make sense here.

## Who it's for

- Neovim as a daily driver
- Native LSP rather than CoC
- Telescope and nvim-tree
- Users who are fine installing a C compiler, `fd`, and friends when `:checkhealth` asks

Skip Current if you still need Vim, or if you want a file you can explain in an afternoon. That's [VimScript]({{ '/vimscript/' | relative_url }}) or [Mini]({{ '/mini/' | relative_url }}).

## What you get

`init.lua` only wires the runtime:

```lua
require('settings')
require('mapping')
require('autocommand')
require('plugins')
require("composition")
```

`composition.lua` then loads LSP, greeter, theme, statusline, indentation, nvim-tree, bufferline, Telescope, and autosave.

| Area | Implementation |
| --- | --- |
| Plugins | [pckr.nvim](https://github.com/lewis6991/pckr.nvim) |
| LSP | nvim-lspconfig, Mason, mason-lspconfig |
| Lint / format | nvim-lint, formatter.nvim (black, biome, Prettier, shfmt, stylua) |
| Completion | nvim-cmp, LuaSnip, lspkind |
| Navigation | nvim-tree (right), Telescope, EasyMotion, tmux-navigator |
| UI | lualine, bufferline, alpha-nvim, indent-blankline |
| Git | fugitive + signify |
| Themes | Lua palettes in `lua/scheme/palettes/`, picker on <kbd>Space</kbd> <kbd>t</kbd> <kbd>h</kbd> |
| Terminal | <kbd>Ctrl</kbd> <kbd>t</kbd> opens zsh on the left; <kbd>Space</kbd> <kbd>q</kbd> closes it |
| Snippets | `snippets/` including Lua, Less, Stylus |
| Font | Iosevka Nerd Font, copied by `install.lua` |

Leader is still <kbd>Space</kbd>. Pckr is <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> / <kbd>c</kbd> / <kbd>u</kbd>. Format is <kbd>Space</kbd> <kbd>f</kbd>.

## Install

You need Neovim and Lua (`lua`, `lua5.4`, or `luajit`). Vim will not load this config.

Linux / macOS:

```
git clone https://github.com/AndresMpa/mu-vim.git ~/.config/nvim
cd ~/.config/nvim && lua install.lua
nvim
```

On a Mac, install Homebrew first. The installer uses `brew install` and does not need sudo.

The first `nvim` runs Pckr sync. When it finishes, quit (`:qa`) and open `nvim` again. Later: `<Space> p i` or `<Space> p u`.

Windows:

```
cd %LOCALAPPDATA%
move nvim nvim_old
git clone https://github.com/AndresMpa/mu-vim.git nvim
cd nvim
lua install.lua
nvim
```

`:checkhealth` is the next step. Windows often needs a C compiler for Treesitter.

## Uninstall

```
cd ~/.config/nvim
lua delete.lua
```

Removes the config, Mason, pckr, cache, the font the installer copied, and `~/.config/muvim`. Leaves Neovim and package manager packages.

## Themes

Shipped palettes (no extra theme plugins): **deep-ocean** (default), **oceanic**, **palenight**, **darker**, **gruvbox**, **mini**, **nord**, **dracula**, **tokyonight**, **catppuccin**, **onedark**. Copy one to `~/.config/muvim/themes/my-theme.lua` (`return { bg = "#…", … }`) or drop a Mini/VimScript `.vim` hex dict there. The choice is shared across the three configs.

## How to extend it

| You want to change | Edit |
| --- | --- |
| Options | `lua/settings.lua` |
| A map | `lua/mapping/*.lua` |
| Plugins | `lua/plugins.lua`, then `<Space> p i` |
| LSP / format / lint | `lua/lsp/` |
| Tree, greeter, Telescope | `lua/setUp/` |
| Theme | `lua/scheme/` |

Add a file and `require` it from `mapping/init.lua` or `composition.lua`. Don't grow `init.lua`.
