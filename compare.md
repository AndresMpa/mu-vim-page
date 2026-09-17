---
title: Compare the three configs
description: Language, plugin stack, installer, and who each Mμ Vim config is actually for.
permalink: /compare/
---

The three configs share a leader key (<kbd>Space</kbd>), git mappings through vim-fugitive, tmux-aware window moves, snippets, and the idea that the editor should feel like an IDE without leaving the terminal. They diverge on language, plugin manager, completion, and whether Vim itself is still in scope.

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
      <th><a href="{{ '/mini/' | relative_url }}">Mini</a></th>
      <th><a href="{{ '/vimscript/' | relative_url }}">VimScript</a></th>
      <th><a href="{{ '/lua/' | relative_url }}">Current</a></th>
    </tr>
  </thead>
  <tbody>
    <tr><th scope="row">Repo</th><td><a href="https://github.com/AndresMpa/mu-vim-mini">mu-vim-mini</a></td><td><a href="https://github.com/AndresMpa/mu-vim-vimscript">mu-vim-vimscript</a></td><td><a href="https://github.com/AndresMpa/mu-vim">mu-vim</a></td></tr>
    <tr><th scope="row">Role</th><td>Template / server</td><td>LTS daily driver</td><td>Core, newest features</td></tr>
    <tr><th scope="row">Language</th><td>One <code>init.vim</code></td><td>VimScript modules</td><td>Lua modules</td></tr>
    <tr><th scope="row">Runs on</th><td>Vim and Neovim</td><td>Vim and Neovim</td><td>Neovim only</td></tr>
    <tr><th scope="row">Plugin manager</th><td>vim-plug</td><td>vim-plug</td><td>pckr.nvim</td></tr>
    <tr><th scope="row">Completion</th><td>CoC</td><td>CoC</td><td>nvim-cmp + Mason LSP</td></tr>
    <tr><th scope="row">File tree</th><td>NERDTree</td><td>NERDTree</td><td>nvim-tree</td></tr>
    <tr><th scope="row">Search</th><td>fzf, ack, incsearch</td><td>fzf, ack, incsearch</td><td>Telescope</td></tr>
    <tr><th scope="row">Statusline</th><td>vim-airline</td><td>vim-airline</td><td>lualine + bufferline</td></tr>
    <tr><th scope="row">Snippets</th><td>UltiSnips</td><td>UltiSnips</td><td>LuaSnip + <code>snippets/</code></td></tr>
    <tr><th scope="row">AI</th><td>No</td><td>No</td><td>CodeCompanion + Ollama</td></tr>
    <tr><th scope="row">Installer</th><td><code>install.sh</code></td><td><code>install.sh</code></td><td><code>install.lua</code></td></tr>
    <tr><th scope="row">Extra languages</th><td>Web, Python, Rust, R, bash</td><td>Same, plus Dockerfile/YAML snippets</td><td>Web, Lua, Less, Stylus, spell dicts EN/ES</td></tr>
    <tr><th scope="row">How you extend it</th><td>Edit the one file</td><td>Add a sourced <code>.vim</code> module</td><td>Add a Lua file and <code>require</code> it</td></tr>
  </tbody>
</table>
</div>
</section>

<section class="tab-panel" data-panel="audience" hidden markdown="1">

### Mini

Pick Mini if you are learning Vim, you want a file you can read in one sitting, or you are editing on a server and a Lua plugin manager is more trouble than it is worth. The `init.vim` is divided into "slides" (blocks headed by a line of `"` characters). That is the tutorial, inlined.

Skip Mini if you already know you want LSP, Telescope, or a modular layout.

### VimScript

Pick VimScript if you still open Vim, not only Neovim, and you want CoC, UltiSnips, fzf, and a plugin table that has been used on web stacks, Python, bash, and some R. Modules live under `~/.config/nvim/.vim` and `init.vim` only sources them.

Skip VimScript if you have already moved off CoC and you are fine requiring Neovim.

### Current

Pick Current if Neovim is the editor and you want the current stack: Mason, nvim-cmp, formatter/linter/DAP hooks, Telescope, nvim-tree, and a chat window bound to a local Ollama model (`qwen2.5-coder:7b` by default). New work is added here first.

Skip Current if you need Vim compatibility, or if you want a config you can explain to someone in an afternoon.

</section>

<section class="tab-panel" data-panel="stack" hidden markdown="1">

All three ship git (fugitive + a signify/gitsigns flavour), comments, auto-pairs, surround, tmux navigator, EasyMotion, markdown preview, a live server (Bracey), CSS color, and a color picker.

Mini and VimScript then add the older IDE layer: **CoC**, **NERDTree**, **fzf**, **ack**, **airline**, **UltiSnips**, **Nvim-R**, polyglot, and WakaTime (Mini).

Current replaces that layer: **Mason + lspconfig**, **nvim-cmp**, **LuaSnip**, **Treesitter**, **Telescope**, **nvim-tree**, **lualine**, **alpha-nvim** greeter, **auto-save**, **Comment.nvim**, **gitsigns**, and **codecompanion.nvim**.

That is the real fork. The VimScript configs are CoC-era. Current is native-LSP-era.

</section>

<section class="tab-panel" data-panel="layout" hidden markdown="1">

**Mini** is flat: `init.vim`, `install.sh`, `coc-settings.json`, `UltiSnips/`.

**VimScript** is Mini split up. `init.vim` sources `$HOME/.config/nvim/.vim/{Basic,Plugin,Autocommands,Mapping,Update}.vim` plus `setUp/` and `util/`. Snippets cover Dockerfile and YAML as well as the web set.

**Current** is a Neovim runtime directory:

- `init.lua` loads settings, mappings, autocommands, plugins, then `composition.lua`
- `lua/lsp/` is servers, completion, diagnostics, formatter, linter
- `lua/mapping/` is basis, git, navigation, chat, package manager
- `lua/setUp/` is greeter, tree, telescope, theme, AI
- `snippets/`, `dicts/`, `utilities/installation/` (the Lua installer and Iosevka Nerd Font)

</section>
</div>

## Shared muscle memory

Once you pick a config you are not starting from zero on the others.

| Action | Mini / VimScript | Current |
| --- | --- | --- |
| Leader | <kbd>Space</kbd> | <kbd>Space</kbd> |
| Save / quit | <kbd>Space</kbd> <kbd>w</kbd> / <kbd>q</kbd> | same |
| Next / prev buffer | <kbd>Space</kbd> <kbd>j</kbd> / <kbd>k</kbd> | same |
| File tree | <kbd>Space</kbd> <kbd>n</kbd> (NERDTree) | <kbd>Space</kbd> <kbd>n</kbd> (nvim-tree) |
| Git status | <kbd>Space</kbd> <kbd>g</kbd> <kbd>s</kbd> <kbd>t</kbd> | same |
| Plugin install | <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> (Plug) | <kbd>Space</kbd> <kbd>p</kbd> <kbd>i</kbd> (Pckr) |
| Terminal split | <kbd>Ctrl</kbd> <kbd>t</kbd> | <kbd>Ctrl</kbd> <kbd>t</kbd> |
| AI chat | — | <kbd>Space</kbd> <kbd>l</kbd> |

The [cheat sheet]({{ '/cheat-sheet/' | relative_url }}) has native motions plus the Current maps in full.
