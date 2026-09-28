import fs from "node:fs";
import path from "node:path";

export function getAllContributorsFromRc() {
  const rcPath = findAllContributorsRcPath(process.cwd());

  if (!rcPath) return [];

  return parseAllContributorsRc(fs.readFileSync(rcPath, "utf-8"));
}

function findAllContributorsRcPath(directory: string): string | undefined {
  const rcPath = path.join(directory, ".all-contributorsrc");

  if (fs.existsSync(rcPath)) return rcPath;

  const parentDirectory = path.dirname(directory);

  return parentDirectory === directory
    ? undefined
    : findAllContributorsRcPath(parentDirectory);
}

function parseAllContributorsRc(content: string) {
  const rc: unknown = JSON.parse(content);

  return isAllContributorsRc(rc) ? rc.contributors : [];
}

function isAllContributorsRc(rc: unknown): rc is AllContributorsRc {
  if (typeof rc !== "object" || rc === null) return false;

  return Array.isArray((rc as { contributors?: unknown }).contributors);
}

export interface AllContributorsContributor {
  avatar_url: string;
  contributions: string[];
  login: string;
  name: string;
  profile: string;
}

interface AllContributorsRc {
  contributors: AllContributorsContributor[];
}
