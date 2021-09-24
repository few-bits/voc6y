import { BUFFER_MOUNT_POINT } from "./constants";

const createBufferElement = () => {
  const buffer = document.createElement("div");
  buffer.id = BUFFER_MOUNT_POINT;
  document.body.appendChild(buffer);
  return buffer;
};

const onSelectionHandler = () => {
  const fragment = window.getSelection().getRangeAt(0).cloneContents();
  let buffer = document.getElementById(BUFFER_MOUNT_POINT);

  if (!buffer) {
    buffer = createBufferElement();
  }
  buffer.innerHTML = "";
  buffer.appendChild(fragment);
  const selectedText = buffer.textContent;

  console.log(selectedText);
};

createBufferElement();
document.onmouseup = onSelectionHandler;
