const filterTags = (text) => text.replace(/(<([^>]+)>)/gi, " ");
const filterTabs = (text) => text.replace(/\t/g, " ");
const filterNewLines = (text) => text.replace(/\n/g, " ");
const filterSpaces = (text) => text.replace(/\s\s+/g, " ");

const sanitizeHtml = (text) => {
  const withoutTags = filterTags(text);
  const withoutSpaces = filterTabs(withoutTags);
  const withoutNewLines = filterNewLines(withoutSpaces);
  const result = filterSpaces(withoutNewLines);
  return result.trim();
};

export default sanitizeHtml;
