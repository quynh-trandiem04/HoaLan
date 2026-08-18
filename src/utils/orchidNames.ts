export interface OrchidNameParts {
  scientific: string;
  authority: string;
}

const decodeHtmlEntities = (value: string): string => value
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;/gi, "'");

export const stripOrchidNameMarkup = (value: string): string => decodeHtmlEntities(value
  .replace(/<[^>]*>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim());

export const splitOrchidName = (value: string): OrchidNameParts => {
  const italicPart = value.match(/<i\b[^>]*>([\s\S]*?)<\/i>/i);
  if (!italicPart || italicPart.index === undefined) {
    return { scientific: stripOrchidNameMarkup(value), authority: '' };
  }

  return {
    scientific: stripOrchidNameMarkup(italicPart[1]),
    authority: stripOrchidNameMarkup(value.slice(italicPart.index + italicPart[0].length)),
  };
};
