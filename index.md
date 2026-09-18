---
title: MμVim
description: Three Vim/Neovim configs. Current, VimScript, and Mini.
permalink: /
image: /assets/img/muVim.png
---

<div class="mu-hero" aria-label="MμVim">
<pre class="mu-ascii">⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⡆⡆⠀⠀⠀⠀⠀⢀⠜⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠁⢰⠀⠀⠀⠀⢀⠊⢠⠀⠀⢠⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠘⠀⠀⡆⠀⠀⠠⠃⠀⡘⠀⠀⡘⠀⠀⠀⠀⡘⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⡇⠀⠀⢰⠀⡰⠁⠀⠀⠇⠀⠀⡇⠀⠀⠀⢀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠰⠀⠀⠀⠀⠞⠀⠀⠀⠰⠀⠀⢰⠑⠤⠤⠔⠱⠀⣿⡆⠀⠀⠀⣾⡗⠀⠀⠰⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡌⠀⠀⠀⠀⠀⠀⠸⣿⡄⠀⣸⣿⠁⠀⣴⣶⣶⡄⠀⠀⢰⣦⣶⣤⣴⣶⣄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⢠⣿⠇⠀⠀⠀⠀⣿⡇⠀⠀⢸⣿⠀⣿⡏⠈⣿⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⡟⠀⠀⠀⠀⠀⣿⡇⠀⠀⢸⣿⠀⣿⡇⠀⣿⡇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⠁⠀⠀⠀⠀⠀⠿⠿⠿⠀⠸⠟⠀⠻⠇⠀⠿⠃</pre>
</div>

<div class="home-copy">
  <p>MμVim is three editor configs that share muscle memory. Leader is <kbd>Space</kbd>, git lives on the keyboard, the file tree sits on the right, and a new terminal opens on the left. You clone into <code>~/.config/nvim</code>, run the installer, and open the editor.</p>
  <p>Themes are shared. <kbd>Space</kbd> <kbd>t</kbd> <kbd>h</kbd> opens a modal, moving the cursor previews a palette, Enter saves it. That choice lives in <code>~/.config/muvim</code>, so Current, Mini, and VimScript can open on the same colors.</p>
</div>

## The three configs

<div class="card-grid">
  <div class="config-card lua">
    <span class="badge lua">Current</span>
    <h3><a href="{{ '/lua/' | relative_url }}">Lua, Neovim only</a></h3>
    <p>Where new work lands first. pckr, Mason, nvim-cmp, Telescope, nvim-tree, alpha greeter. Format with black, biome, and Prettier.</p>
    <div class="card-actions">
      <a class="btn-inline" href="{{ '/lua/' | relative_url }}">Read Current</a>
      <a class="btn-inline ghost" href="https://github.com/AndresMpa/mu-vim">GitHub</a>
    </div>
  </div>
  <div class="config-card vimscript">
    <span class="badge vimscript">VimScript</span>
    <h3><a href="{{ '/vimscript/' | relative_url }}">Modular LTS</a></h3>
    <p>Vim and Neovim. Sourced <code>.vim</code> files, vim-plug, CoC, Startify greeter. Keep this if you still open Vim.</p>
    <div class="card-actions">
      <a class="btn-inline" href="{{ '/vimscript/' | relative_url }}">Read VimScript</a>
      <a class="btn-inline ghost" href="https://github.com/AndresMpa/mu-vim-vimscript">GitHub</a>
    </div>
  </div>
  <div class="config-card mini">
    <span class="badge mini">Mini</span>
    <h3><a href="{{ '/mini/' | relative_url }}">One init.vim</a></h3>
    <p>Same stack as VimScript, one file. Template, servers, and the version you can read top to bottom.</p>
    <div class="card-actions">
      <a class="btn-inline" href="{{ '/mini/' | relative_url }}">Read Mini</a>
      <a class="btn-inline ghost" href="https://github.com/AndresMpa/mu-vim-mini">GitHub</a>
    </div>
  </div>
</div>

## Same on all three

- One clone path: `~/.config/nvim`
- Installer, then a first `nvim`. Uninstall is `lua delete.lua` or `./delete.sh`
- Shared palettes (deep-ocean, gruvbox, mini, nord, dracula, tokyonight, catppuccin, …)
- Greeter with find files / file tree / git
- `<Space> q` closes a window (including a terminal). `<Ctrl-t>` opens a new one on the left

## Next

<div class="card-grid">
  <div class="config-card">
    <h3><a href="{{ '/compare/' | relative_url }}">Compare</a></h3>
    <p>Side by side: language, plugins, greeter, formatters, who each one is for.</p>
  </div>
  <div class="config-card">
    <h3><a href="{{ '/tutorial/' | relative_url }}">Tutorial</a></h3>
    <p>Install a flavor step by step, then the longer path if you want to write your own <code>init.vim</code>.</p>
  </div>
  <div class="config-card">
    <h3><a href="{{ '/cheat-sheet/' | relative_url }}">Cheat sheet</a></h3>
    <p>Native motions plus the leader maps, including themes and the terminal.</p>
  </div>
</div>
