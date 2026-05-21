export const localHostnames = new Set(["localhost", "127.0.0.1", "::1"]);

export function getHostnameFromHostHeader(hostHeader: string) {
  if (hostHeader.startsWith("[")) {
    const closingBracketIndex = hostHeader.indexOf("]");
    return closingBracketIndex === -1
      ? hostHeader
      : hostHeader.slice(1, closingBracketIndex);
  }

  return hostHeader.split(":")[0];
}

export function isLocalHostname(hostname: string) {
  return localHostnames.has(hostname);
}
