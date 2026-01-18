/**
 * Validates if a URL is safe to fetch (prevents SSRF).
 * - Enforces HTTPS
 * - Blocks local/private IP addresses
 * - Blocks metadata services
 */
export function isValidImageUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    
    // 1. Force HTTPS
    if (url.protocol !== 'https:') {
      return false;
    }

    const hostname = url.hostname.toLowerCase();

    // 2. Block Localhost
    if (hostname === 'localhost' || hostname === '::1' || hostname.startsWith('127.')) {
      return false;
    }

    // 3. Block Private IPs (Simple Regex Match - not exhaustive but effective for common cases)
    // 10.0.0.0/8
    if (hostname.startsWith('10.')) return false;
    // 192.168.0.0/16
    if (hostname.startsWith('192.168.')) return false;
    // 172.16.0.0/12 (172.16 - 172.31)
    if (/^172\.(1[6-9]|2\d|3[01])\./.test(hostname)) return false;
    // 169.254.0.0/16 (Link-local / Cloud Metadata)
    if (hostname.startsWith('169.254.')) return false;
    // 0.0.0.0/8
    if (hostname.startsWith('0.')) return false;
    // FC00::/7 (Unique Local IPv6)
    if (/^[fd]c[0-9a-f]{2}:/.test(hostname)) return false;

    // 4. (Optional) Allow-list check could go here
    // const ALLOWED_DOMAINS = ['images.unsplash.com', '...'];
    // if (!ALLOWED_DOMAINS.some(d => hostname.endsWith(d))) return false;

    return true;
  } catch (e) {
    return false;
  }
}
