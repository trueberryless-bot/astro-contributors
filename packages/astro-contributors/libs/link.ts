export type FormatLink = (username: string) => string;

export function getContributorLink(
  login: string,
  defaultLink: string,
  formatLink: FormatLink | undefined
) {
  return formatLink ? formatLink(login) : defaultLink;
}
