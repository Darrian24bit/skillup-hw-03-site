const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".tab-content");
function tabReplace() {
  const target = this;
  const item = target.classList.contains("tab") ? target : target.parentElement;
  const id = item.dataset.tabId;

  tabs.forEach((tab) => {
    if (tab.dataset.tabId === id) {
      tab.classList.add("tab-active");
    } else {
      tab.classList.remove("tab-active");
    }
  });

  items.forEach((item) => {
    if (item.dataset.tabId === id) {
      item.classList.add("tabs-content-active", "col-12");
    } else {
      item.classList.remove("tabs-content-active", "col-12");
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", tabReplace);
});
