---
title: Mini
description: One init.vim. Vim and Neovim. The MμVim template, and the one you take to a server.
permalink: /mini/
---

<span class="badge mini">Mini</span>

[mu-vim-mini](https://github.com/AndresMpa/mu-vim-mini) is the single-file config. It was the first MμVim, used for about a year before the file got long enough to split, and it stayed because a readable `init.vim` is still the right shape for a template and for machines where you don't want a Lua plugin manager.

It stays in sync with VimScript on features, so if something works there it should work here too, just all in one place.

## Who it's for

- People writing their first `init.vim` (pair it with the [tutorial]({{ '/tutorial/' | relative_url }}))
- SSH / server boxes where Mini is enough and Lua is extra moving parts
- Anyone who wants to copy a working IDE and then delete half of it
- People who are fine on **Vim or Neovim**

If you already know you want modules, stay on [VimScript]({{ '/vimscript/' | relative_url }}). If you want Mason and Telescope, that's [Current]({{ '/lua/' | relative_url }}).

## What you get

The file is grouped into "slides", comment banners of `"` characters, so open `init.vim` and jump between those headers.

Startify is the greeter (`f` find files, `n` file tree, `g` git status). NERDTree opens on the right. Find files is a centered fzf modal. `<Ctrl-t>` opens a terminal on the left.

| Slide | What it sets |
| --- | --- |
| Lines / style / mouse / status | `number`, `relativenumber`, `mouse=a`, clipboard, encoding |
| Plugins | vim-plug: airline, NERDTree, fzf, CoC, fugitive, UltiSnips, Bracey, … |
| Plugin settings | airline, NERDTree on the right, CoC, fzf window |
| Mappings | leader, git, tree, search, buffers, terminal |

Completion is **CoC**: Biome for JS/TS, Prettier for HTML/Markdown, Volar (`@yaegassy/coc-volar`) for Vue, and Go as the extra language server. Snippets are **UltiSnips**.

There's no native LSP, and that's intentional.

## Install

You need Vim or Neovim. The installer pulls vim-plug, Node, and pnpm.

```
git clone https://github.com/AndresMpa/mu-vim-mini.git ~/.config/nvim
cd ~/.config/nvim
./install.sh
nvim
```

On a Mac, install Homebrew first. The script uses `brew install` and does not need sudo.

Then `<Space> p i`, `:source %`, and `:CocInstall`.

Windows: clone into `%LOCALAPPDATA%\nvim` and run Plug / CoC by hand.

## Uninstall

```
cd ~/.config/nvim
./delete.sh
```

Removes the config, vim-plug, CoC, cache, `old-nvim`, and `~/.config/muvim`. Leaves Neovim and package manager packages.

## Themes

Same palettes as Current. Default is **mini**. `<Space> t h` opens the picker. The saved name in `~/.config/muvim/active` is shared with Current and VimScript.

## How to read it

Treat `init.vim` as the document. The banners are the table of contents, so change a `set`, a `Plug`, or a `nmap`, save, and `:source %`. That's the whole maintenance model.

When the file feels too long, you've recreated the reason [VimScript]({{ '/vimscript/' | relative_url }}) exists.
