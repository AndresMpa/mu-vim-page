---
title: Current
description: The current Mμ Vim. Neovim + Lua, Mason LSP, Telescope, and a local Ollama chat.
permalink: /lua/
---

<span class="badge lua">Current · Lua</span>

[mu-vim](https://github.com/AndresMpa/mu-vim) is the config that still moves. It is Neovim-only, written in Lua, and it is where new work lands first (Mason, formatter/linter, CodeCompanion). The other two configs are not abandoned; they just do not get features that only make sense here.

It is also the most complicated one. That is the trade.

## Who it's for

- Neovim as a daily driver (web, editor maintenance, OS / dotfiles)
- People who want native LSP rather than CoC
- Anyone who wants **Telescope**, **nvim-tree**, and a **local** coding chat
- Users who are fine installing a C compiler, `fd`, and friends when `:checkhealth` asks

Skip Lua if you still need Vim, or if you want a file you can explain in an afternoon. Use [Mini]({{ '/mini/' | relative_url }}) or [VimScript]({{ '/vimscript/' | relative_url }}).

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

Leader is still <kbd>Space</kbd>. Plugin maps are <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> / <kbd>c</kbd> / <kbd>u</kbd> for Pckr install, clean, sync.

### AI maps

Ollama has to be running. The adapter is configured in `lua/setUp/aiSetting.lua`.

| Action | Map |
| --- | --- |
| Toggle chat | <kbd>Space</kbd> <kbd>l</kbd> |
| Chat with selection | Visual + <kbd>Space</kbd> <kbd>l</kbd> |
| Inline | <kbd>Space</kbd> <kbd>l</kbd> <kbd>i</kbd> |
| Actions | <kbd>Space</kbd> <kbd>l</kbd> <kbd>a</kbd> |
| Add buffer to chat | <kbd>Space</kbd> <kbd>l</kbd> <kbd>b</kbd> |

## Install

Neovim and Lua (the installer is `lua5.4` / `lua` / `luajit`). Vim will not load this config.

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

`:checkhealth` is the real next step. Missing `fd`, a C compiler, or treesitter parsers show up there. The older troubleshooting notes live in the [mu-vim wiki](https://github.com/AndresMpa/mu-vim/wiki/General-dependencies).

`install.lua` copies the Nerd Font, can backup a previous config to `~/.config/previous-mu-vim`, and writes a marker under `$XDG_DATA_HOME/nvim/mu-vim-installed`. There is also a `compose.yml` if you want the config inside a container.

## How to extend it

| You want to change | Edit |
| --- | --- |
| Options | `lua/settings.lua` |
| A map | `lua/mapping/*.lua` |
| Plugins | `lua/plugins.lua`, then `<Space> p i` |
| LSP / format / lint | `lua/lsp/` |
| Tree, greeter, Telescope, AI | `lua/setUp/` |
| Theme | `lua/scheme/theme.lua` |

Add a file, `require` it from `mapping/init.lua` or `composition.lua`. Do not grow `init.lua`.
