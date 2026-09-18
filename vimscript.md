---
title: VimScript (LTS)
description: Modular VimScript for Vim and Neovim. CoC, vim-plug, Startify, and shared palettes.
permalink: /vimscript/
---

<span class="badge vimscript">VimScript · LTS</span>

[mu-vim-vimscript](https://github.com/AndresMpa/mu-vim-vimscript) is Mini after it was split into sourced files. Same language, same plugin manager, same CoC layer, but each concern has a file. It still runs in **Vim and Neovim**.

New features aren't invented here first. They show up on [Current]({{ '/lua/' | relative_url }}) and only come back if they still make sense in VimScript.

## Who it's for

- People who want a full terminal IDE and are not ready to drop Vim
- Web, Python, bash, and Go via CoC
- Anyone who prefers CoC + UltiSnips to Mason + nvim-cmp
- Maintainers who like many small `.vim` files over one Lua tree

Skip it if Neovim-only is fine and you want Telescope. That's [Current]({{ '/lua/' | relative_url }}).

## What you get

`init.vim` doesn't hold settings. It sets `$vimcf` to `~/.config/nvim/.vim` and sources:

| File | Role |
| --- | --- |
| `Basic.vim` | Core `set` options, Startify viminfo |
| `Plugin.vim` | vim-plug block |
| `setUp/style.vim` | airline |
| `setUp/greeter.vim` | Startify, Current's mark, Commands |
| `setUp/navigation.vim` | NERDTree on the right, fzf modal |
| `setUp/completion.vim` | CoC, UltiSnips, pairs |
| `setUp/identation.vim` | indentLine |
| `Autocommands.vim` | Autosave (skips Startify and other special buffers) |
| `Mapping.vim` + `util/Extention.vim` | Leader maps, terminal on the left |
| `Update.vim` | Auto-update hook |
| `themes/` | Shared palettes + `apply.vim` |

CoC uses **Biome**, Prettier, **Volar**, and **Go**. `<Space> h h` lists maps.

## Install

Neovim or Vim. The installer pulls vim-plug, Node, and pnpm.

```
git clone https://github.com/AndresMpa/mu-vim-vimscript.git ~/.config/nvim
cd ~/.config/nvim
./install.sh
nvim
```

Then `<Space> p i`, `:source %`, and `:CocInstall`.

Windows: clone to `%LOCALAPPDATA%\nvim`.

## Uninstall

```
cd ~/.config/nvim
./delete.sh
```

Removes the config, vim-plug, CoC, cache, `old-nvim`, and `~/.config/muvim`. Leaves Neovim and package manager packages.

## Themes

Same palettes as Current. Default is **gruvbox**. `<Space> t h` opens the picker. Saved in `~/.config/muvim/active` and shared with Current and Mini.

## How to extend it

Add a plugin in `Plugin.vim`, put `let g:` / `nmap` noise in the matching `setUp/` file, and source it from `init.vim` if you created a new file. That's the whole module convention.

If you find yourself rewriting this in Lua, you want [Current]({{ '/lua/' | relative_url }}).
