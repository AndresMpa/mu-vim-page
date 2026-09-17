---
title: Only in Current
description: What Current has that Mini does not, and what Current has that VimScript does not.
permalink: /only-in-current/
---

Mini and VimScript still share the CoC-era stack, so almost everything Current adds is missing from both. The lists below are the map. Shared muscle memory (Space leader, git maps, EasyMotion, Bracey, fugitive) is not repeated here.

## In Current, not in Mini and not in VimScript

This is the unique set. If it is here, neither of the other two configs ships it.

### Runtime

- Neovim only. Mini and VimScript still run on Vim.
- Lua modules (`init.lua`, `lua/lsp/`, `lua/mapping/`, `lua/setUp/`, `lua/scheme/`) instead of `init.vim` and sourced `.vim` files.
- [pckr.nvim](https://github.com/lewis6991/pckr.nvim) instead of vim-plug.
- `install.lua` instead of `install.sh`.
- `compose.yml` if you want the config in a container.
- Iosevka Nerd Font copied by the installer.

### Language server and editing

- Mason + nvim-lspconfig, with servers such as `lua_ls`, `ts_ls`, `eslint`, `bashls`, `dockerls`, `yamlls`, `jsonls`, `emmet_ls`, `marksman`, `clangd`, `vuels`, `svelte`, `astro`, `angularls`.
- nvim-cmp (LSP, buffer, path, cmdline, LuaSnip, lspkind) instead of CoC.
- LuaSnip + `snippets/` instead of UltiSnips.
- nvim-lint, formatter.nvim, nvim-dap.
- nvim-treesitter.
- nvim-ts-autotag instead of vim-closetag.

### AI

- codecompanion.nvim talking to Ollama at `127.0.0.1:11434`, model `qwen2.5-coder:7b`.
- Maps: <kbd>Space</kbd> <kbd>l</kbd> chat, <kbd>l</kbd> <kbd>i</kbd> inline, <kbd>l</kbd> <kbd>a</kbd> actions, <kbd>l</kbd> <kbd>b</kbd> add buffer.

### Navigation and UI

- nvim-tree instead of NERDTree.
- Telescope (`<Space> t`, `tf`, `tt`, `ts`) instead of fzf, ack, and incsearch.
- lualine + bufferline instead of vim-airline.
- material.nvim instead of the airline / gruvbox look.
- alpha-nvim greeter.
- indent-blankline instead of indentLine.
- nvim-highlight-colors (named colors and Tailwind) on top of the old hex preview.

### Git, save, comments

- gitsigns.nvim (Mini and VimScript use vim-signify).
- auto-save.nvim with <kbd>Space</kbd> <kbd>a</kbd> <kbd>w</kbd> (Mini uses a `CursorHold` autocmd, VimScript has its own Update hook).
- Comment.nvim (they still also carry nerdcommenter in Current's plugin list, but the Lua commenter is Current-only).

### Media and spelling

- image.nvim + baleia.nvim for image preview in the buffer.
- `dicts/english.dict` and `dicts/spanish.dict`.
- Extra snippet files Mini and VimScript do not share: `less.snippets`, `stylus.snippets`.

### Maps that only exist here

- <kbd>Space</kbd> <kbd>l</kbd> family for AI.
- <kbd>Space</kbd> <kbd>t</kbd> family for Telescope.
- <kbd>Space</kbd> <kbd>f</kbd> for Format.
- <kbd>Space</kbd> <kbd>a</kbd> <kbd>w</kbd> to toggle autosave.
- <kbd>Space</kbd> <kbd>H</kbd> to close other buffers.
- <kbd>Space</kbd> <kbd>v</kbd> <kbd>v</kbd> for only-this-window.

## In Current, not in Mini

Everything in the unique set above, and also the whole modular layout. Mini is one `init.vim`. There is no extra Current feature that Mini lacks but VimScript already has: the VimScript extras (startify, gruvbox, minimap, GraphQL, sxhkd, rust.vim, Nvim-R, Dockerfile and YAML snippets) never landed in Current.

Mini-only things Current does not take: WakaTime, the CoC extension list, NERDTree/fzf/ack as the daily drivers.

## In Current, not in VimScript

The same unique set. VimScript is already modular, so the gap is not "files vs one file", it is the stack: native LSP instead of CoC, Telescope instead of fzf, nvim-tree instead of NERDTree, LuaSnip instead of UltiSnips, and the Ollama chat.

VimScript-only things Current does not take: gruvbox, vim-startify, minimap, GraphQL, sxhkd, rust.vim, Nvim-R, Dockerfile and YAML UltiSnips.

See the side-by-side grid on [Compare]({{ '/compare/' | relative_url }}) if you want the shared rows too.
