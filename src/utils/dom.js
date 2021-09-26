import { TOOLTIP_HEIGHT, TOOLTIP_WIDTH } from "../constants";

export const getTooltipPosition = (rect, event) => {
  const x = Math.ceil(event.clientX - TOOLTIP_WIDTH / 2);
  const y = Math.ceil(
    rect.top + document.documentElement.scrollTop - TOOLTIP_HEIGHT - 10
  );

  return [x, y];
};
