import { create } from "./storage/persistence";
import { getTooltipPosition } from "./utils/dom";
import sanitizeHtml from "./utils/sanitize-html";
import {
  createBuffer,
  createTooltip,
  getBuffer,
  hideTooltip,
  isClickedByTooltip,
  spawnTooltip,
} from "ExtensionServices/dom";

const mouseUpHandler = async (event) => {
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);
  const fragment = range.cloneContents();

  let buffer = getBuffer();
  if (!buffer) {
    buffer = createBuffer();
  }

  buffer.innerHTML = "";
  buffer.appendChild(fragment);
  const selectedText = sanitizeHtml(buffer.textContent);

  if (selectedText === "") {
    hideTooltip();
  } else {
    const rect = range.getBoundingClientRect();
    const tooltipPosition = getTooltipPosition(rect, event);

    spawnTooltip(tooltipPosition);

    await create(selectedText);
  }
};

const mouseDownHandler = (event) => {
  if (isClickedByTooltip(event)) {
    // activate translation flow
  } else {
    hideTooltip();
  }
};

createBuffer();
createTooltip();
document.onmouseup = mouseUpHandler;
document.onmousedown = mouseDownHandler;
