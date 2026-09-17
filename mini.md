---
title: Mini
description: One init.vim. Vim and Neovim. The MuVim template, and the one you take to a server.
permalink: /mini/
---

<span class="badge mini">Mini</span>

[mu-vim-mini](https://github.com/AndresMpa/mu-vim-mini) is the single-file config. It was the first MuVim, used for about a year before the file got long enough to split, and it stayed because a readable `init.vim` is still the right shape for a template and for machines where you don't want a Lua plugin manager.

It stays in sync with VimScript on features, so if something works there it should work here too, just all in one place.

## Who it's for

- People writing their first `init.vim` (pair it with the [tutorial]({{ '/tutorial/' | relative_url }}))
- SSH / server boxes where Mini is enough and Lua is extra moving parts
- Anyone who wants to copy a working IDE and then delete half of it
- People who are fine on **Vim or Neovim**

If you already know you want modules, stay on [VimScript]({{ '/vimscript/' | relative_url }}). If you want Mason, Telescope, and Ollama, that's [Current]({{ '/lua/' | relative_url }}).

## What you get

The file is grouped into "slides", comment banners of `"` characters, so open `init.vim` and jump between those headers.

| Slide | What it sets |
| --- | --- |
| Lines / style / mouse / status | `number`, `relativenumber`, `mouse=a`, clipboard, encoding |
| Plugins | vim-plug: airline, NERDTree, fzf, CoC, fugitive, UltiSnips, Bracey, Nvim-R, … |
| Plugin settings | airline theme, NERDTree flags, CoC extensions, gruvbox (commented) |
| Mappings | leader, git, tree, search, buffers, terminal function |

Completion is **CoC** (`coc-prettier`, `coc-tsserver`, `coc-vetur`, HTML/CSS/JSON, shell, Rust, Solargraph, R), and snippets are **UltiSnips** for C++, CSS, HTML, JS/TS, Vue, Python, Markdown, shell, and a few others.

There's no AI chat and no native LSP, and that's intentional.

## Install

You need Vim or Neovim, then Node.js for CoC. vim-plug is fetched by the script.

```bash
git clone https://github.com/AndresMpa/mu-vim-mini.git
cd mu-vim-mini
./install.sh
```

The script installs vim-plug, offers pacman/apt help for Neovim and Node, and moves the clone to `~/.config/nvim` (it'll rename an existing config to `old-nvim`). After a new terminal:

```
nvim
<Space> p i
:source %
:CocInstall
```

Windows: clone into `%LOCALAPPDATA%\nvim` and run Plug / CoC by hand. There's no Lua installer here.

## How to read it

Treat `init.vim` as the document. The banners are the table of contents, so change a `set`, a `Plug`, or a `nmap`, save, and `:source %`. That's the whole maintenance model.

When the file feels too long, you've recreated the reason [VimScript]({{ '/vimscript/' | relative_url }}) exists.
