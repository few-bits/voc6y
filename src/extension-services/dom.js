import {
  BUFFER_MOUNT_POINT,
  TOOLTIP_CLASS_HIDDEN,
  TOOLTIP_CLASS_VISIBLE,
  TOOLTIP_ID,
} from "../constants";

export const createElement = (id) => {
  const element = document.createElement("div");
  element.id = id;
  document.body.appendChild(element);
  return element;
};

export const createBuffer = () => createElement(BUFFER_MOUNT_POINT);
export const getBuffer = () => document.getElementById(BUFFER_MOUNT_POINT);

export const createTooltip = () => {
  const tooltip = createElement(TOOLTIP_ID);
  tooltip.className = TOOLTIP_CLASS_HIDDEN;
  tooltip.innerHTML = "✏️";
};
export const getTooltip = () => document.getElementById(TOOLTIP_ID);
export const hideTooltip = () => {
  const tooltip = getTooltip();
  tooltip.className = TOOLTIP_CLASS_HIDDEN;
};
export const spawnTooltip = (position) => {
  const [x, y] = position;
  console.log(position);
  const tooltip = getTooltip();
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
  tooltip.className = TOOLTIP_CLASS_VISIBLE;
};

export const isClickedByTooltip = (event) => {
  const tooltip = getTooltip();
  return tooltip.contains(event.target);
};
