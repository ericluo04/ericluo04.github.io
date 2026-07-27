/* Theme toggle. Dark is the default, including for visitors whose OS is set to
   light; only an explicit prior choice overrides it. The <head> of every page
   carries a copy of the read-and-apply step so the ground colour is set before
   first paint, which is what keeps a light flash off the screen. */
(function () {
  "use strict";

  var KEY = "theme";
  var root = document.documentElement;

  function apply(theme) {
    root.setAttribute("data-theme", theme === "light" ? "light" : "dark");
  }

  function current() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function wire() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;

    function label() {
      var next = current() === "dark" ? "light" : "dark";
      btn.setAttribute("aria-label", "Switch to " + next + " mode");
      btn.setAttribute("title", "Switch to " + next + " mode");
    }

    label();

    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      apply(next);
      label();
      try {
        localStorage.setItem(KEY, next);
      } catch (e) {
        /* Private browsing denies localStorage; the toggle still works for
           this page view, it just will not be remembered. */
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
