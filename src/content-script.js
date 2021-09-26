import * as vocab from "./storage/persistence";
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

let selectedText = "";

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

  selectedText = sanitizeHtml(buffer.textContent);

  if (selectedText === "") {
    hideTooltip();
  } else {
    const rect = range.getBoundingClientRect();
    const tooltipPosition = getTooltipPosition(rect, event);

    spawnTooltip(tooltipPosition);
  }
};

const mouseDownHandler = async (event) => {
  if (isClickedByTooltip(event)) {
    await vocab.create(selectedText);
  } else {
    hideTooltip();
    selectedText = "";
  }
};

createBuffer();
createTooltip();
document.onmouseup = mouseUpHandler;
document.onmousedown = mouseDownHandler;
