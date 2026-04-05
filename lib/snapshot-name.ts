const INVALID_FILENAME_CHARS = /[<>:"/\\|?*\u0000-\u001f]/g;
const TRAILING_DOTS_RE = /\.+$/;
const RESERVED_WINDOWS_NAMES = new Set([
  "CON",
  "PRN",
  "AUX",
  "NUL",
  "COM1",
  "COM2",
  "COM3",
  "COM4",
  "COM5",
  "COM6",
  "COM7",
  "COM8",
  "COM9",
  "LPT1",
  "LPT2",
  "LPT3",
  "LPT4",
  "LPT5",
  "LPT6",
  "LPT7",
  "LPT8",
  "LPT9"
]);

export function sanitizeSnapshotTitle(title: string, fallback = "workflow"): string {
  const trimmed = String(title || "").trim();
  const withFallback = trimmed || fallback;
  let safe = withFallback
    .replace(/\s+/g, " ")
    .replace(INVALID_FILENAME_CHARS, "_")
    .replace(TRAILING_DOTS_RE, "")
    .slice(0, 80)
    .trim();

  if (!safe) {
    safe = fallback;
  }
  if (RESERVED_WINDOWS_NAMES.has(safe.toUpperCase())) {
    safe = `${safe}_`;
  }
  return safe;
}

export function buildSnapshotFileName(title: string): string {
  const safeTitle = sanitizeSnapshotTitle(title, "workflow");
  return `team_${safeTitle}_snapshot.zip`;
}
