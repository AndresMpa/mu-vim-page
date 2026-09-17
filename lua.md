---
title: Current
description: The Current MμVim. Neovim + Lua, Mason LSP, Telescope, and a local Ollama chat.
permalink: /lua/
---

<span class="badge lua">Current · Lua</span>

[mu-vim](https://github.com/AndresMpa/mu-vim) is the config that still moves. It's Neovim-only, written in Lua, and it's where new work lands first: Mason, formatter and linter hooks, CodeCompanion. The other two aren't abandoned; they just don't get features that only make sense here, and this one is also the most complicated. That's the trade.

## Who it's for

- Neovim as a daily driver (web, editor maintenance, OS / dotfiles)
- People who want native LSP rather than CoC
- Anyone who wants **Telescope**, **nvim-tree**, and a **local** coding chat
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

`composition.lua` then loads LSP, greeter, theme, statusline, indentation, AI, nvim-tree, bufferline, Telescope, and autosave.

| Area | Implementation |
| --- | --- |
| Plugins | [pckr.nvim](https://github.com/lewis6991/pckr.nvim) |
| LSP | nvim-lspconfig, Mason, mason-lspconfig |
| Lint / format / debug | nvim-lint, formatter.nvim, nvim-dap |
| Completion | nvim-cmp, LuaSnip, lspkind |
| Navigation | nvim-tree, Telescope, EasyMotion, tmux-navigator |
| UI | material.nvim, lualine, bufferline, alpha-nvim, indent-blankline |
| Git | fugitive + gitsigns |
| AI | codecompanion.nvim → Ollama at `127.0.0.1:11434`, model `qwen2.5-coder:7b` |
| Spelling | `dicts/english.dict`, `dicts/spanish.dict` |
| Snippets | `snippets/` including Lua, Less, Stylus (on top of the shared web set) |
| Font | Iosevka Nerd Font, copied by `install.lua` |

Leader is still <kbd>Space</kbd>, and Pckr is <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> / <kbd>c</kbd> / <kbd>u</kbd> for install, clean, and sync.

### AI maps

Ollama has to be running, and the adapter lives in `lua/setUp/aiSetting.lua`.

| Action | Map |
| --- | --- |
| Toggle chat | <kbd>Space</kbd> <kbd>l</kbd> |
| Chat with selection | Visual + <kbd>Space</kbd> <kbd>l</kbd> |
| Inline | <kbd>Space</kbd> <kbd>l</kbd> <kbd>i</kbd> |
| Actions | <kbd>Space</kbd> <kbd>l</kbd> <kbd>a</kbd> |
| Add buffer to chat | <kbd>Space</kbd> <kbd>l</kbd> <kbd>b</kbd> |

## Install

You need Neovim and Lua (`lua5.4`, `lua`, or `luajit`). Vim will not load this config.

Linux / macOS:

```bash
git clone https://github.com/AndresMpa/mu-vim.git ~/.config/nvim
cd ~/.config/nvim && lua install.lua
nvim
```

Then:

```
:source %
<Space> p i
<Space> p u
```

Windows:

```bat
cd C:\Users\%USERNAME%\AppData\Local\
move nvim nvim_old
git clone https://github.com/AndresMpa/mu-vim.git
move mu-vim nvim
nvim
```

`:checkhealth` is the real next step, because missing `fd`, a C compiler, or treesitter parsers show up there. Older troubleshooting notes live in the [mu-vim wiki](https://github.com/AndresMpa/mu-vim/wiki/General-dependencies).

`install.lua` copies the Nerd Font, can back up a previous config to `~/.config/previous-mu-vim`, and writes a marker under `$XDG_DATA_HOME/nvim/mu-vim-installed`. There's also a `compose.yml` if you want the config inside a container.

## How to extend it

| You want to change | Edit |
| --- | --- |
| Options | `lua/settings.lua` |
| A map | `lua/mapping/*.lua` |
| Plugins | `lua/plugins.lua`, then `<Space> p i` |
| LSP / format / lint | `lua/lsp/` |
| Tree, greeter, Telescope, AI | `lua/setUp/` |
| Theme | `lua/scheme/theme.lua` |

Add a file and `require` it from `mapping/init.lua` or `composition.lua`. Don't grow `init.lua`.
