import sanitizeHtml from "./utils/sanitize-html";
import { BUFFER_MOUNT_POINT } from "./constants";
import { create } from "./storage/persistence";

const createBufferElement = () => {
  const buffer = document.createElement("div");
  buffer.id = BUFFER_MOUNT_POINT;
  document.body.appendChild(buffer);
  return buffer;
};

const onSelectionHandler = async () => {
  const fragment = window.getSelection().getRangeAt(0).cloneContents();
  let buffer = document.getElementById(BUFFER_MOUNT_POINT);

  if (!buffer) {
    buffer = createBufferElement();
  }
  buffer.innerHTML = "";
  buffer.appendChild(fragment);
  const selectedText = sanitizeHtml(buffer.textContent);

  console.log(selectedText);
  if (selectedText !== "") {
    await create(selectedText);
  }
};

createBufferElement();
document.onmouseup = onSelectionHandler;
