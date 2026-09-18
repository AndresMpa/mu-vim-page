---
title: Compare the three configs
description: Language, plugin stack, installer, themes, and who each MμVim config is for.
permalink: /compare/
---

All three keep leader on <kbd>Space</kbd>, git on the keyboard through vim-fugitive, tmux-aware window moves, and snippets. They split on language, plugin manager, completion, and whether Vim itself is still in scope.

<div class="compare-ui">
<div class="tabs" data-tabs role="tablist" aria-label="Compare views">
  <button type="button" role="tab" data-tab="matrix" aria-selected="true">Matrix</button>
  <button type="button" role="tab" data-tab="audience">Who it's for</button>
  <button type="button" role="tab" data-tab="stack">Plugin stack</button>
  <button type="button" role="tab" data-tab="layout">Repo layout</button>
</div>

<section class="tab-panel" data-panel="matrix">
<div class="matrix-wrap">
<table class="matrix">
  <thead>
    <tr>
      <th></th>
      <th><a href="{{ '/lua/' | relative_url }}">Current</a></th>
      <th><a href="{{ '/vimscript/' | relative_url }}">VimScript</a></th>
      <th><a href="{{ '/mini/' | relative_url }}">Mini</a></th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Repo</th><td><a href="https://github.com/AndresMpa/mu-vim">mu-vim</a></td><td><a href="https://github.com/AndresMpa/mu-vim-vimscript">mu-vim-vimscript</a></td><td><a href="https://github.com/AndresMpa/mu-vim-mini">mu-vim-mini</a></td></tr>
    <tr><th scope="row">Role</th><td>Core, newest features</td><td>LTS daily driver</td><td>Template / server</td></tr>
    <tr><th scope="row">Language</th><td>Lua modules</td><td>VimScript modules</td><td>One <code>init.vim</code></td></tr>
    <tr><th scope="row">Runs on</th><td>Neovim only</td><td>Vim and Neovim</td><td>Vim and Neovim</td></tr>
    <tr><th scope="row">Plugin manager</th><td>pckr.nvim</td><td>vim-plug</td><td>vim-plug</td></tr>
    <tr><th scope="row">Completion</th><td>nvim-cmp + Mason LSP</td><td>CoC</td><td>CoC</td></tr>
    <tr><th scope="row">Format</th><td>black, biome, Prettier, shfmt, stylua</td><td>CoC Biome + Prettier</td><td>CoC Biome + Prettier</td></tr>
    <tr><th scope="row">Greeter</th><td>alpha-nvim</td><td>Startify</td><td>Startify</td></tr>
    <tr><th scope="row">File tree</th><td>nvim-tree, right</td><td>NERDTree, right</td><td>NERDTree, right</td></tr>
    <tr><th scope="row">Search</th><td>Telescope</td><td>fzf (modal), ack, incsearch</td><td>fzf (modal), ack, incsearch</td></tr>
    <tr><th scope="row">Statusline</th><td>lualine + bufferline</td><td>vim-airline</td><td>vim-airline</td></tr>
    <tr><th scope="row">Snippets</th><td>LuaSnip + <code>snippets/</code></td><td>UltiSnips</td><td>UltiSnips</td></tr>
    <tr><th scope="row">Themes</th><td>Lua palettes, <kbd>Space</kbd> <kbd>t</kbd> <kbd>h</kbd></td><td>Same palettes via <code>themes/</code></td><td>Same palettes via <code>themes/</code></td></tr>
    <tr><th scope="row">Installer</th><td><code>lua install.lua</code></td><td><code>./install.sh</code></td><td><code>./install.sh</code></td></tr>
    <tr><th scope="row">Uninstall</th><td><code>lua delete.lua</code></td><td><code>./delete.sh</code></td><td><code>./delete.sh</code></td></tr>
    <tr><th scope="row">How you extend it</th><td>Add a Lua file and <code>require</code> it</td><td>Add a sourced <code>.vim</code> module</td><td>Edit the one file</td></tr>
  </tbody>
</table>
</div>
</section>

<section class="tab-panel" data-panel="audience" hidden markdown="1">

### Current

Pick Current when Neovim is the editor and you want the stack that still moves: Mason, nvim-cmp, formatter and linter hooks, Telescope, and nvim-tree. New work is added here first.

Skip it if you still need Vim, or if you want a config you can explain in an afternoon.

### VimScript

Pick VimScript if you still open Vim, not only Neovim, and you want CoC, UltiSnips, fzf, and modules under `~/.config/nvim/.vim`.

Skip it if you've already moved off CoC and you're fine requiring Neovim.

### Mini

Pick Mini if you're learning Vim, you want a file you can read in one sitting, or you're on a server where a Lua plugin manager is more trouble than it's worth. `init.vim` is split into "slides" (comment banners of `"`).

Skip it if you already know you want LSP, Telescope, or a modular layout.

</section>

<section class="tab-panel" data-panel="stack" hidden markdown="1">

All three ship git (fugitive plus signify), comments, auto-pairs, surround, tmux navigator, EasyMotion, markdown preview, a live server (Bracey), CSS color, and a color picker. Themes are palettes in-repo, not extra colorscheme plugins.

Current then swaps the IDE layer for native LSP: **Mason + lspconfig**, **nvim-cmp**, **LuaSnip**, **Treesitter**, **Telescope**, **nvim-tree**, **lualine**, **alpha-nvim**, **auto-save**, and **indent-blankline**.

VimScript and Mini keep the older layer: **CoC** (Biome, Prettier, Volar, Go), **NERDTree**, **fzf**, **ack**, **airline**, **UltiSnips**, and **Startify**. That's the real fork. Current is native-LSP-era and the other two are still CoC-era.

</section>

<section class="tab-panel" data-panel="layout" hidden markdown="1">

**Current** is a Neovim runtime directory. `init.lua` loads settings, mappings, autocommands, plugins, then `composition.lua`. From there: `lua/lsp/` for servers, completion, formatter, and linter; `lua/mapping/` for basis, git, navigation, and the package manager; `lua/setUp/` for greeter, tree, Telescope, indent; `lua/scheme/` for palettes and the theme picker; plus `snippets/`, `dicts/`, and `utilities/installation/`.

**VimScript** is Mini split up. `init.vim` sources `$HOME/.config/nvim/.vim/{Basic,Plugin,Autocommands,Mapping,Update}.vim` plus `setUp/` (including `greeter.vim`) and `util/`. Palettes live in `themes/`.

**Mini** is flat: `init.vim`, `install.sh`, `delete.sh`, `coc-settings.json`, `UltiSnips/`, `themes/`.

</section>
</div>

## Shared muscle memory

Once you pick a config you are not starting from zero on the others.

| Action | Current | VimScript / Mini |
| --- | --- | --- |
| Leader | <kbd>Space</kbd> | <kbd>Space</kbd> |
| Save / quit | <kbd>Space</kbd> <kbd>w</kbd> / <kbd>q</kbd> | same |
| Next / prev buffer | <kbd>Space</kbd> <kbd>j</kbd> / <kbd>k</kbd> | same |
| File tree (right) | <kbd>Space</kbd> <kbd>n</kbd> nvim-tree | <kbd>Space</kbd> <kbd>n</kbd> NERDTree |
| Theme picker | <kbd>Space</kbd> <kbd>t</kbd> <kbd>h</kbd> | same |
| Git status | <kbd>Space</kbd> <kbd>g</kbd> <kbd>s</kbd> <kbd>t</kbd> | same |
| Plugin install | <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> (Pckr) | <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> (Plug) |
| New terminal (left) | <kbd>Ctrl</kbd> <kbd>t</kbd> | <kbd>Ctrl</kbd> <kbd>t</kbd> |
| Close window / terminal | <kbd>Space</kbd> <kbd>q</kbd> | same |

The [cheat sheet]({{ '/cheat-sheet/' | relative_url }}) has native motions plus the maps in full.
