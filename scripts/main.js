document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".menu-grid");

  container.addEventListener("wheel", function (e) {
    // only hijack vertical scrolling
    if (e.deltaY !== 0) {
      container.scrollLeft += e.deltaY;  // scroll horizontally instead
      e.preventDefault();                // stop page vertical scroll
    }
  }, { passive: false });
});