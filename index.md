---
title: Mu Vim
description: Three Vim/Neovim configs. VimScript, Current, and Mini.
permalink: /
---

<div class="mu-tree" aria-label="Mu Vim versions">
  <div class="mu-tree-root">
    <img src="{{ '/assets/img/muVim.png' | relative_url }}" alt="Mu Vim">
  </div>
  <div class="mu-tree-stem" aria-hidden="true"></div>
  <div class="mu-tree-row">
    <div class="mu-tree-branch">
      <a href="{{ '/vimscript/' | relative_url }}">VimScript</a>
    </div>
    <div class="mu-tree-branch is-current">
      <a href="{{ '/lua/' | relative_url }}">Current</a>
    </div>
    <div class="mu-tree-branch">
      <a href="{{ '/mini/' | relative_url }}">Mini</a>
    </div>
  </div>
</div>

<div class="home-copy">
  <p>Mu Vim is a terminal editor setup that grew into three configs. They share the same habit — leader on Space, git from the keyboard, an IDE that stays in the terminal — and they split when one file was no longer the right shape for every machine.</p>
  <p><a href="{{ '/vimscript/' | relative_url }}">VimScript</a> is the modular LTS. It runs in Vim and Neovim, uses CoC and vim-plug, and is the one to keep if you want a full IDE without switching to Lua.</p>
  <p><a href="{{ '/lua/' | relative_url }}">Current</a> is the Lua core, Neovim only. Mason, Telescope, nvim-tree, and a chat bound to local Ollama. New work lands here first.</p>
  <p><a href="{{ '/mini/' | relative_url }}">Mini</a> is one <code>init.vim</code>. Read it top to bottom, copy it as a template, or take it to a server.</p>
  <p>Build your own from scratch in the <a href="{{ '/tutorial/' | relative_url }}">tutorial</a>, or put the three side by side on <a href="{{ '/compare/' | relative_url }}">Compare</a>.</p>
</div>
