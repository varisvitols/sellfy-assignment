export function fbShare(url: string) {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  );
}

export function tweet(url: string) {
  window.open(
    `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`
  );
}

export function copyToClipboard(url: string) {
  navigator.clipboard.writeText(url);
}
