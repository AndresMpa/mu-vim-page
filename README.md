# MμVim documentation

This repository is the GitHub Pages site for MμVim: three public Neovim/Vim configs, how they differ, who each one is for, and the original "build your own `init.vim`" tutorial.

Live URL once Pages is on: <https://andresmpa.github.io/mu-vim-page/>

That is the replacement for the old `andresmpa.github.io/mu-vim/` and `andresmpa.github.io/nvim-configuration/` URLs, which 404 after the configs were split into their own repos.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Hub: logo tree with Current, VimScript, Mini |
| `/compare/` | Matrix, audience, plugin stack, layouts |
| `/only-in-current/` | What Current has that Mini and VimScript do not |
| `/mini/` | [mu-vim-mini](https://github.com/AndresMpa/mu-vim-mini) |
| `/vimscript/` | [mu-vim-vimscript](https://github.com/AndresMpa/mu-vim-vimscript) |
| `/lua/` | Current — [mu-vim](https://github.com/AndresMpa/mu-vim) |
| `/tutorial/` | Original github.io walkthrough |
| `/cheat-sheet/` | Motions + leader maps |

## Enable GitHub Pages

In **AndresMpa/mu-vim-page**: Settings → Pages → Build and deployment → Source **GitHub Actions** or **Deploy from a branch**. For the branch option: `main`, folder `/ (root)`. Jekyll + the Cayman theme will build from `_config.yml`.

`baseurl` is `/mu-vim-page`. If you later publish this from another repo path, change that key.

## Preview locally

```bash
bundle install
bundle exec jekyll serve --baseurl /mu-vim-page
```

Open <http://127.0.0.1:4000/mu-vim-page/>.

## Related repos

- Current (Lua core): <https://github.com/AndresMpa/mu-vim>
- VimScript: <https://github.com/AndresMpa/mu-vim-vimscript>
- Mini: <https://github.com/AndresMpa/mu-vim-mini>
