---
title: MμVim
description: Three Vim/Neovim configs. Current, VimScript, and Mini.
permalink: /
---

<div class="mu-tree" aria-label="MμVim versions">
  <div class="mu-tree-root">
    <img src="{{ '/assets/img/muVim.png' | relative_url }}" alt="MμVim">
  </div>
  <div class="mu-tree-stem" aria-hidden="true"></div>
  <div class="mu-tree-row">
    <div class="mu-tree-branch is-current">
      <a href="{{ '/lua/' | relative_url }}">Current</a>
    </div>
    <div class="mu-tree-branch">
      <a href="{{ '/vimscript/' | relative_url }}">VimScript</a>
    </div>
    <div class="mu-tree-branch">
      <a href="{{ '/mini/' | relative_url }}">Mini</a>
    </div>
  </div>
</div>

<div class="home-copy">
  <p>MμVim started as one Neovim setup and split into three because a single file couldn't cover every machine. Leader is still Space, git still lives on the keyboard, and the editor still tries to feel like an IDE without leaving the terminal.</p>
  <p><a href="{{ '/lua/' | relative_url }}">Current</a> is the Lua core and the one that still moves. Neovim only: Mason, Telescope, nvim-tree, and a chat talking to local Ollama, so new work lands here first.</p>
  <p><a href="{{ '/vimscript/' | relative_url }}">VimScript</a> is the modular LTS. It runs in Vim and Neovim, keeps CoC and vim-plug, and it's the one to keep if you want a full IDE without switching to Lua.</p>
  <p><a href="{{ '/mini/' | relative_url }}">Mini</a> is one <code>init.vim</code> you can read top to bottom, copy as a template, or take to a server.</p>
  <p>If you'd rather build your own, the <a href="{{ '/tutorial/' | relative_url }}">tutorial</a> is still here. <a href="{{ '/compare/' | relative_url }}">Compare</a> puts the three side by side, and <a href="{{ '/only-in-current/' | relative_url }}">Only in Current</a> lists what Mini and VimScript do not have.</p>
</div>
