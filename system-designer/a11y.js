(() => {
  const labelControls = () => {
    for (const button of document.querySelectorAll('button:not([aria-label]):not([aria-labelledby])')) {
      if (button.getAttribute('role') === 'switch') {
        const label = button.parentElement?.textContent.trim();
        if (label) button.setAttribute('aria-label', label);
      } else if (button.querySelector('svg.lucide-refresh-cw')) {
        button.setAttribute('aria-label', 'Refresh');
      }
    }
    for (const input of document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])')) {
      if (input.labels?.length) continue;
      if (input.placeholder) input.setAttribute('aria-label', input.placeholder.replace(/\.{3}$/, ''));
      else if (input.inputMode === 'numeric') {
        input.setAttribute('aria-label', input.parentElement?.parentElement?.textContent.includes('%') ? 'Percentage input' : 'Number input');
      } else if (input.id === 'persistent-color-picker') input.setAttribute('aria-label', 'Brand color');
    }
  };
  new MutationObserver(labelControls).observe(document.body, { childList: true, subtree: true });
  labelControls();
})();
