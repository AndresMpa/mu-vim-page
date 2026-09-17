---
title: Cheat sheet
description: Native Vim motions plus the MuVim leader maps. Skip the first tables if you already know hjkl.
permalink: /cheat-sheet/
---

Leader is <kbd>Space</kbd> in Current, VimScript, and Mini, and native motions are the same everywhere. Plugin maps below call out where Current diverges.

If you already know Vim, skip to [Files](#files).

## Native

### Motion

| Action | Command |
| --- | --- |
| Move up (prefix with a count) | `#k` or arrow up |
| Move down | `#j` or arrow down |
| Move left | `#h` or arrow left |
| Move right | `#l` or arrow right |

### Writing

| Action | Command |
| --- | --- |
| Insert | `i` `a` `o` `s` |
| Replace | `r` `R` |
| Visual | `v` |
| Copy | `y` |
| Paste | `p` `P` |
| Undo | `u` |
| Delete | `x` or `#d` + motion or `dd` |
| Search | `/query` then `n` |

Vim treats words as objects. Once that clicks, counts and motions get fast.

### Lines

| Action | Command |
| --- | --- |
| End of word | `#e` |
| Forward / back a word | `#w` / `#b` |
| Forward a WORD | `W` |
| End of line | `$` |
| Start of line | `0` |
| First non-blank | `^` |

### Jumping

| Action | Command |
| --- | --- |
| Top / bottom of file | `gg` / `G` |
| Line `#` | `#G` |
| Top / middle / bottom of screen | `H` `M` `L` |
| Sentences / paragraphs | `(` `)` `{` `}` |
| Matching brace | `%` |
| Page up / down | `Ctrl-b` / `Ctrl-f` |

### Scrolling

| Action | Command |
| --- | --- |
| Half page | `Ctrl-d` / `Ctrl-u` |
| Full page | `Ctrl-f` / `Ctrl-b` |
| One line | `Ctrl-e` / `Ctrl-y` |

### Marks

| Action | Command |
| --- | --- |
| Set mark `x` | `mx` |
| Jump to mark line / position | `'x` / `` `x `` |
| Undo the last jump | ```` |

## Files

| Action | Command |
| --- | --- |
| Save | <kbd>Space</kbd> <kbd>w</kbd> |
| Quit | <kbd>Space</kbd> <kbd>q</kbd> |
| Split / vertical split | <kbd>Space</kbd> <kbd>v</kbd> <kbd>j</kbd> / <kbd>k</kbd> |
| Only this window | <kbd>Space</kbd> <kbd>v</kbd> <kbd>v</kbd> (Lua) |
| Resize | <kbd>Space</kbd> `<` / `>` |

## Buffers

A buffer is an open file in the list, not necessarily visible.

| Action | Command |
| --- | --- |
| Next / previous | <kbd>Space</kbd> <kbd>k</kbd> / <kbd>j</kbd> |
| Delete current | <kbd>Space</kbd> <kbd>h</kbd> |
| Close others (Lua) | <kbd>Space</kbd> <kbd>H</kbd> |
| Move tab (Lua) | <kbd>Space</kbd> <kbd>m</kbd> <kbd>k</kbd> / <kbd>j</kbd> |

## Plugin manager

| Action | Mini / VimScript (Plug) | Current (Pckr) |
| --- | --- | --- |
| Install | <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> | same |
| Clean | <kbd>Space</kbd> <kbd>p</kbd> <kbd>c</kbd> | same |
| Update / sync | <kbd>Space</kbd> <kbd>p</kbd> <kbd>u</kbd> | same |

## Navigation

| Action | Mini / VimScript | Current |
| --- | --- | --- |
| File tree | <kbd>Space</kbd> <kbd>n</kbd> NERDTree | <kbd>Space</kbd> <kbd>n</kbd> nvim-tree |
| EasyMotion | <kbd>Space</kbd> <kbd>s</kbd> <kbd>s</kbd> | same |
| Search in file | `/` `?` (incsearch) | `/` plus Telescope |
| Find files | <kbd>Space</kbd> <kbd>f</kbd> <kbd>f</kbd> (fzf) | <kbd>Space</kbd> <kbd>t</kbd> <kbd>f</kbd> |
| Live grep | ack / fzf | <kbd>Space</kbd> <kbd>t</kbd> <kbd>t</kbd> |
| Telescope hub | — | <kbd>Space</kbd> <kbd>t</kbd> |

## Git (all three)

| Action | Command |
| --- | --- |
| Status | <kbd>Space</kbd> <kbd>g</kbd> <kbd>s</kbd> <kbd>t</kbd> |
| Blame / show | <kbd>g</kbd> <kbd>b</kbd> <kbd>l</kbd> / <kbd>g</kbd> <kbd>s</kbd> <kbd>h</kbd> |
| Commit | <kbd>Space</kbd> <kbd>g</kbd> <kbd>c</kbd> (Lua) or <kbd>g</kbd> <kbd>c</kbd> <kbd>m</kbd> |
| Add current file | <kbd>Space</kbd> <kbd>g</kbd> <kbd>a</kbd> <kbd>a</kbd> |
| Pull / push | <kbd>Space</kbd> <kbd>g</kbd> <kbd>p</kbd> <kbd>l</kbd> / <kbd>p</kbd> <kbd>s</kbd> |
| Checkout / new branch | <kbd>g</kbd> <kbd>c</kbd> <kbd>o</kbd> / <kbd>g</kbd> <kbd>c</kbd> <kbd>b</kbd> (Lua) |

## Current extras

| Action | Command |
| --- | --- |
| Format | <kbd>Space</kbd> <kbd>f</kbd> |
| Toggle autosave | <kbd>Space</kbd> <kbd>a</kbd> <kbd>w</kbd> |
| Color picker | <kbd>Space</kbd> <kbd>r</kbd> |
| Help map | <kbd>Space</kbd> <kbd>h</kbd> <kbd>h</kbd> |
| Terminal split | <kbd>Ctrl</kbd> <kbd>t</kbd> |
| AI chat | <kbd>Space</kbd> <kbd>l</kbd> |

Mini/VimScript also bind <kbd>Ctrl</kbd> <kbd>t</kbd> to a `vsp term://zsh` helper taken from the original tutorial.
