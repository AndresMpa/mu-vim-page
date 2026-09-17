---
title: VimScript (LTS)
description: Modular VimScript for Vim and Neovim. CoC, vim-plug, and the long-lived Mμ Vim IDE.
permalink: /vimscript/
---

<span class="badge vimscript">VimScript · LTS</span>

[mu-vim-vimscript](https://github.com/AndresMpa/mu-vim-vimscript) is Mini after it was split into sourced files. Same language, same plugin manager, same CoC layer, but each concern has a file. It has been the daily config for web work, some Python, bash, and dotfiles, and it still runs in **Vim and Neovim**.

New features are not invented here first. They show up on [Lua]({{ '/lua/' | relative_url }}) and only come back if they still make sense in VimScript.

## Who it's for

- People who want a full terminal IDE and are not ready to drop Vim
- Web, Python, bash, GraphQL, Rust, and some R
- Anyone who prefers CoC + UltiSnips to Mason + nvim-cmp
- Maintainers who like many small `.vim` files over one Lua tree

Skip it if Neovim-only is fine and you want Telescope and local AI. That is Lua.

## What you get

`init.vim` does not hold settings. It sets `$vimcf` to `~/.config/nvim/.vim` and sources:

| File | Role |
| --- | --- |
| `Basic.vim` | Core `set` options |
| `Plugin.vim` | vim-plug block |
| `setUp/style.vim` | Theme, airline |
| `setUp/navigation.vim` | NERDTree, fzf, EasyMotion |
| `setUp/completion.vim` | CoC, UltiSnips, pairs |
| `setUp/identation.vim` | indentLine, language syntax |
| `Autocommands.vim` | Autosave and friends |
| `Mapping.vim` + `util/Extention.vim` | Leader maps, terminal helper |
| `Update.vim` | Auto-update hook |

`coc-settings.json` formats CSS and Markdown on save and registers a Dockerfile language server. UltiSnips here also include **Dockerfile** and **YAML**, which Mini does not.

### Plugin groups

From the repo's own summary:

- **Motion:** tmux-navigator, minimap, EasyMotion, incsearch, NERDTree, fzf, ack
- **Syntax:** polyglot, JS/TS/JSX, GraphQL, sxhkd, indentLine, rust.vim, shfmt, Nvim-R, fugitive, CoC
- **Utilities:** markdown-preview, multi-cursor, nerdcommenter, vCoolor, Bracey, signify, css-color, vim-repeat
- **Complete:** editorconfig, auto-pairs, surround, closetag, UltiSnips

Optional extras the README calls out: [the_silver_searcher](https://github.com/ggreer/the_silver_searcher) and [Ack](https://beyondgrep.com/install/) for project search, Node for CoC, shfmt for bash, R itself if you use Nvim-R.

## Install

Neovim or Vim, [vim-plug](https://github.com/junegunn/vim-plug), Node.js.

```bash
git clone https://github.com/AndresMpa/mu-vim-vimscript.git
cd mu-vim-vimscript
./install.sh
```

Then in the editor:

```
<Space> p i
:source %
:CocInstall
:call mkdp#util#install()
```

`<Space> h h` opens the in-editor help map. The [cheat sheet]({{ '/cheat-sheet/' | relative_url }}) in this repo matches Mini/VimScript maps more closely than the Lua ones.

Windows: clone to `%LOCALAPPDATA%\nvim`.

## How to extend it

Add a plugin in `Plugin.vim`, put `let g:` / `nmap` noise in the matching `setUp/` file, source it from `init.vim` if you created a new file. That is the whole module convention.

If you find yourself rewriting this in Lua, you want [the core config]({{ '/lua/' | relative_url }}).
