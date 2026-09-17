(function () {
  var picker = document.querySelector("[data-picker]");
  if (picker) {
    var scores = { mini: 0, vimscript: 0, lua: 0 };
    var steps = picker.querySelectorAll("[data-step]");
    var result = picker.querySelector("[data-result]");
    var progress = picker.querySelector("[data-progress]");
    var base = (document.body.getAttribute("data-baseurl") || "").replace(/\/$/, "");
    var labels = {
      mini: {
        title: "Mini",
        href: base + "/mini/",
        why: "One init.vim you can read top to bottom. Good on a server, as a template, or when you don't want to maintain Lua modules."
      },
      vimscript: {
        title: "VimScript (LTS)",
        href: base + "/vimscript/",
        why: "The modular LTS. It runs in Vim and Neovim, keeps CoC and vim-plug, and it's the one to keep if you want a full IDE without switching to Lua."
      },
      lua: {
        title: "Current",
        href: base + "/lua/",
        why: "The Lua core and the one that still moves. Neovim only: Mason, Telescope, nvim-tree, and a chat talking to local Ollama."
      }
    };

    function showStep(index) {
      steps.forEach(function (step, i) {
        step.hidden = i !== index;
      });
      if (progress) {
        progress.textContent = "Question " + (index + 1) + " of " + steps.length;
      }
    }

    function winner() {
      var keys = ["mini", "vimscript", "lua"];
      keys.sort(function (a, b) {
        return scores[b] - scores[a];
      });
      return keys[0];
    }

    picker.addEventListener("click", function (event) {
      var button = event.target.closest("[data-choice]");
      if (!button) return;

      scores.mini += Number(button.getAttribute("data-mini") || 0);
      scores.vimscript += Number(button.getAttribute("data-vimscript") || 0);
      scores.lua += Number(button.getAttribute("data-lua") || 0);

      var current = button.closest("[data-step]");
      var index = Array.prototype.indexOf.call(steps, current);
      if (index < steps.length - 1) {
        showStep(index + 1);
        return;
      }

      steps.forEach(function (step) {
        step.hidden = true;
      });
      if (progress) progress.hidden = true;

      var pick = winner();
      var info = labels[pick];
      result.hidden = false;
      result.classList.add("is-open");
      result.querySelector("[data-result-title]").textContent = info.title;
      result.querySelector("[data-result-why]").textContent = info.why;
      result.querySelector("[data-result-link]").setAttribute("href", info.href);
    });

    var reset = picker.querySelector("[data-reset]");
    if (reset) {
      reset.addEventListener("click", function () {
        scores.mini = 0;
        scores.vimscript = 0;
        scores.lua = 0;
        result.hidden = true;
        result.classList.remove("is-open");
        if (progress) progress.hidden = false;
        showStep(0);
      });
    }

    showStep(0);
  }

  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var buttons = tabs.querySelectorAll("[data-tab]");
    var root = tabs.closest(".compare-ui") || tabs.parentElement;
    var panels = root.querySelectorAll("[data-panel]");

    function activate(id) {
      buttons.forEach(function (button) {
        var on = button.getAttribute("data-tab") === id;
        button.setAttribute("aria-selected", on ? "true" : "false");
      });
      panels.forEach(function (panel) {
        panel.hidden = panel.getAttribute("data-panel") !== id;
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        activate(button.getAttribute("data-tab"));
      });
    });

    if (buttons[0]) activate(buttons[0].getAttribute("data-tab"));
  });
})();
