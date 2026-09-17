---
title: How to configure Neovim
description: The original Mμ Vim GitHub Pages tutorial — motions, init.vim, plugins, and mappings, from scratch.
permalink: /tutorial/
---

<div class="callout">

This is the walkthrough that used to live on github.io. It teaches you to **build** a config. If you want to install Mini, VimScript, or Lua instead, start on the [home page]({{ '/' | relative_url }}).

</div>

## Quick start

The easy way is still to clone a finished config and run its installer. Lua:

```bash
git clone https://github.com/AndresMpa/mu-vim.git ~/.config/nvim
cd ~/.config/nvim && lua install.lua
```

Mini and VimScript use `./install.sh` in their own repos. Follow the prompts, then open the editor.

The rest of this page is the longer way: you make the file yourself.

## A longer way to make this

It's important to understand that you are making a custom configuration. You are the person who is going to maintain those files. Downloading someone else's config (like mine) is less work, but it also means you are not in the maintenance loop unless you change `init.vim` / `init.lua` yourself. A terminal editor without that loop is missing the useful part of it. So start with the Vim tutorial, then write the file.

If you prefer a video, there is a free Neovim course on [Udemy](https://www.udemy.com/course/vim-aumenta-tu-velocidad-de-desarrollo/).

> Tip: vim and neovim take words as objects. When you understand that, you go faster.

You can skip this block if you already know Vim. Same tables also live on the [cheat sheet]({{ '/cheat-sheet/' | relative_url }}).

### Motion

| Action | Command |
| --- | --- |
| Move up (add a number to jump that many lines, default 1) | `#k` or arrow up |
| Move down | `#j` or arrow down |
| Move left | `#h` or arrow left |
| Move right | `#l` or arrow right |

### Writing

| Action | Command |
| --- | --- |
| Insert | `i` or `a` or `o` or `s` |
| Replace | `r` or `R` |
| Visual | `v` |
| Copy | `y` |
| Paste | `p` or `P` |
| Undo | `u` |
| Delete | `x` or `#d` + motion or `dd` |
| Search | `/query` then `n` |

### Lines

| Action | Command |
| --- | --- |
| Move to the end of a word | `#e` |
| Move forward / backward a word | `#w` / `#b` |
| Move forward a WORD (non-whitespace) | `W` |
| End of current line | `$` |
| Beginning of the line | `0` |
| First non-blank character | `^` |
| Column `#` | `#\|` |

### Jumping

| Action | Command |
| --- | --- |
| Beginning of file | `gg` or `1G` |
| End of file | `G` |
| Line `#` | `#G` |
| Pages up / down | `Ctrl-b` / `Ctrl-f` |
| Top / middle / bottom of the screen | `H` `M` `L` |
| Sentences | `(` or `)` |
| Paragraphs | `{` or `}` |
| Matching brace | `%` |

### Scrolling

| Action | Command |
| --- | --- |
| Scroll 50% | `Ctrl-d` / `Ctrl-u` |
| Scroll 100% | `Ctrl-f` / `Ctrl-b` |
| Scroll 1 line | `Ctrl-e` / `Ctrl-y` |

### Marks

| Action | Command |
| --- | --- |
| Set mark `x` at the cursor | `mx` |
| Jump to the line of mark `x` | `'x` |
| Jump to the cursor position of mark `x` | `` `x `` |
| Undo the latest jump | ```` |
| Last-changed line | `'.` |

## Your own configuration file

As you can see, Neovim by default is quite simple. We make it look and feel more comfortable by adding a configuration file. Follow the next steps (this uses nvim as the example).

> If you are using Vim, just type: `cd && vim .vimrc`

```bash
cd
mkdir -p .config/nvim
cd .config/nvim
touch init.vim
nvim init.vim
```

You should see an empty file. That file is going to be your Neovim configuration. Type the following, then close the editor and open that file again:

```vim
" Some static options
set sw=2 " Replace tabs with X number of spaces
set title " It shows the file title

" Number on the left
set number " Show the numbers on the left
set numberwidth=1 " Set numbers width
set relativenumber " It shows the current cursor line

" Mouse
set mouse=a " It lets you use the mouse on the terminal
set clipboard=unnamedplus " Keep what you copy on the clipboard
```

This is a really basic configuration that only uses `set`. The single `"` starts a comment. Comment what you did; you will forget. Your editor should already look different. We can add more.

## Plugins

Now that you know how to move in files, let's make it easier. Neovim and Vim let you use plugins, and those are most of the speed. Different people need different languages and environments, but some tools are general purpose: language support, git, window navigation, a file tree, search, a color scheme.

### Plugin managers

A plugin manager is a short way to install plugins, and those plugins generally come from GitHub. I use vim-plug. Other options:

- [vim-plug](https://github.com/junegunn/vim-plug)
- [dein.vim](https://github.com/Shougo/dein.vim)
- [packer.nvim](https://github.com/wbthomason/packer.nvim)
- [Paq](https://github.com/savq/paq-nvim)

The Lua config today uses [pckr.nvim](https://github.com/lewis6991/pckr.nvim). For this tutorial, vim-plug is the example.

Neovim:

```vim
" The sets you wrote before

" Plugin manager downloads dir
call plug#begin(expand('~/.config/nvim/plugged'))

" Some plugins
```

Vim, a directory under `.config`:

```vim
call plug#begin(expand('~/.config/plugged'))
```

It will change if you use another plugin manager.

### A first plugin list

There are a lot of [plugins](https://github.com/neovim/neovim/wiki/Related-projects#plugins). These cover the general-purpose list above:

```vim
Plug 'neoclide/coc.nvim', {'branch': 'release'} " Text editing support
Plug 'tpope/vim-fugitive' " Support to git commands
Plug 'christoomey/vim-tmux-navigator' " Navigation between windows
Plug 'scrooloose/nerdtree' " Navigation between files
Plug 'haya14busa/incsearch.vim' " Better way to look for words
Plug 'morhetz/gruvbox', { 'as': 'gruvbox' } " Nvim theme
Plug 'vim-airline/vim-airline' " Bar theme
```

Then `Esc` `:` `PlugInstall`. That clones the repositories you listed.

You now have a basic IDE in the terminal. Next, language servers for CoC. Add this after the plugins:

```vim
" coc
" Prettier, Emmet, HTML, CSS/Less/Sass, Json, JS/TS, Vue, Sh, Rust, Ruby, R
let g:coc_global_extensions = [
\ 'coc-prettier',
\ 'coc-emmet',
\ 'coc-html',
\ 'coc-css',
\ 'coc-json',
\ 'coc-tsserver',
\ 'coc-vetur',
\ 'coc-sh',
\ 'coc-rls',
\ 'coc-solargraph',
\ 'coc-r-lsp']
```

Then `Esc` `:` `CocInstall`. Those are language server extensions for the first plugin you installed.

Plugin settings that Mini still uses in this shape:

```vim
" NERDTree
let NERDTreeMouseMode=1 " let you use the mouse
let NERDTreeQuitOnOpen=1 " quit nerdtree when you open a file
let NERDTreeShowHidden=1 " show files or dir hidden by '.'

" incsearch
let g:incsearch#auto_nohlsearch = 1 " Remove the highlight after search

" Nvim THEME
colorscheme gruvbox
let g:gruvbox_color_column='bg0'
let g:gruvbox_contrast_dark='hard'

" vim-airline
let g:airline_theme = 'cool'
let g:airline_skip_empty_sections = 1
let g:airline#extensions#branch#enabled = 1
let g:airline#extensions#tabline#enabled = 1

if !exists('g:airline_symbols')
  let g:airline_symbols = {}
endif
```

Take a minute to read those if you want. That is the common way to set those plugins. It looks like a lot at the beginning and then it is just variables.

## Mapping

Mapping is a combination of keys that runs something. Let's map the plugins. Leader in Mμ Vim is space, so these assume you set that (or you use the default and change `<Leader>`).

```vim
" coc
nmap <silent> cd <Plug>(coc-definition)
nmap <silent> ct <Plug>(coc-type-definition)
nmap <silent> cg <Plug>(coc-implementation)
nmap <silent> cr <Plug>(coc-references)
nmap <leader>f :Prettier<CR>
" Use <c-space> to trigger completion.
inoremap <silent><expr> <c-space> coc#refresh()

" vim-fugitive (git support)
nmap <Leader>gii :Git init<CR>
nmap <Leader>gsh :Git show<CR>
nmap <Leader>gbl :Git blame<CR>
nmap <Leader>gcm :Git commit<CR>
nmap <Leader>gst :Git status<CR>
nmap <Leader>gaa :Git add --all<CR>
nmap <Leader>grv :Git remote -v<CR>
nmap <Leader>gpl :Git pull origin dev<CR>
nmap <Leader>gps :Git push origin dev<CR>
nmap <Leader>gck :Git check<Space>
nmap <Leader>gnb :Git check -b<Space>

" NERDTree
nmap <leader>n :NERDTreeFind<CR>
nmap <leader>nt :NERDTreeToggle<CR>
nmap <leader>nc :NERDTreeToggleVCS<CR>

" incsearch
map / <Plug>(incsearch-forward)
map ? <Plug>(incsearch-backward)

" Extras
nmap <Leader>w :w<CR>
nmap <Leader>q :q!<CR>
nmap <Leader>h :bdelete<CR>
nmap <Leader>j :bprevious<CR>
nmap <Leader>k :bnext<CR>
nmap <Leader>l :ls<CR>
nmap <Leader>vj :split<CR>
nmap <Leader>vk :vsplit<CR>
```

Those are examples. Add plugins, or delete maps you will not use.

## Can I use a terminal inside the terminal?

Yes. This helper is the one Mini/VimScript still ship. I took the function from [nschurmann/configs](https://github.com/nschurmann/configs/blob/master/.vim/maps.vim):

```vim
function! OpenTerminal()
  execute "normal \<C-l>"
  execute "normal \<C-l>"
  execute "normal \<C-l>"
  execute "normal \<C-l>"

  let bufNum = bufnr("%")
  let bufType = getbufvar(bufNum, "&buftype", "not found")

  if bufType == "terminal"
    execute "q"
  else
    execute "vsp term://zsh"
    execute "set nonu"
    execute "set nornu"
    silent au BufLeave <buffer> stopinsert!
    silent au BufWinEnter,WinEnter <buffer> startinsert!
    execute "tnoremap <buffer> <C-h> <C-\\><C-n><C-w><C-h>"
    execute "tnoremap <buffer> <C-t> <C-\\><C-n>:q<CR>"
    execute "tnoremap <buffer> <C-\\><C-\\> <C-\\><C-n>"
    startinsert!
  endif
endfunction
nnoremap <C-t> :call OpenTerminal()<CR>
```

`<C-t>` opens or closes a vertical terminal. Change `zsh` if that is not your shell.

## What to do after this page

You just built the spine of **Mini**. When `init.vim` gets too long, split it the way **VimScript** does. When you want Neovim's Lua API, Mason, and Telescope, that is **Lua**.

- [Mini]({{ '/mini/' | relative_url }}) — the one-file version of this tutorial
- [VimScript]({{ '/vimscript/' | relative_url }}) — the same ideas, modular
- [Lua]({{ '/lua/' | relative_url }}) — the current config
- [Compare]({{ '/compare/' | relative_url }}) — the three side by side
