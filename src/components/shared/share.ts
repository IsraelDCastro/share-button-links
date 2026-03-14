function encode(value?: string): string {
  return encodeURIComponent((value ?? "").trim());
}

export function resolveShareUrl(url?: string): string {
  if (url && url !== "#") {
    return url;
  }

  if (typeof window !== "undefined" && window.location?.href) {
    return window.location.href;
  }

  return "";
}

export function buildFacebookShareUrl(url?: string, title?: string): string {
  return `https://facebook.com/sharer/sharer.php?u=${encode(resolveShareUrl(url))}&t=${encode(title)}&quote=`;
}

export function buildWhatsappShareUrl(url?: string, message?: string): string {
  const text = `${message ?? ""} ${resolveShareUrl(url)}`.trim();
  return `https://api.whatsapp.com/send?text=${encode(text)}`;
}

export function buildTelegramShareUrl(url?: string, message?: string): string {
  return `https://t.me/share/url?url=${encode(resolveShareUrl(url))}&text=${encode(message)}`;
}

export function buildTwitterShareUrl(url?: string, title?: string): string {
  return `https://twitter.com/intent/tweet/?text=${encode(title)}&url=${encode(resolveShareUrl(url))}`;
}

export function buildLinkedInShareUrl(url?: string): string {
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encode(resolveShareUrl(url))}`;
}

export function buildRedditShareUrl(url?: string, title?: string): string {
  return `https://reddit.com/submit/?url=${encode(resolveShareUrl(url))}&title=${encode(title)}`;
}

export function buildPinterestShareUrl(url?: string, mediaUrl?: string, description?: string): string {
  return `https://pinterest.com/pin/create/button/?url=${encode(resolveShareUrl(url))}&media=${encode(mediaUrl)}&description=${encode(description)}`;
}

export function buildTumblrShareUrl(url?: string, title?: string, content?: string): string {
  const safeUrl = encode(resolveShareUrl(url));
  return `https://www.tumblr.com/widgets/share/tool?posttype=link&title=${encode(title)}&caption=${safeUrl}&content=${encode(content)}&canonicalUrl=${safeUrl}&shareSource=tumblr_share_button`;
}

export function buildPocketShareUrl(url?: string, title?: string): string {
  return `https://getpocket.com/save?url=${encode(resolveShareUrl(url))}&title=${encode(title)}`;
}

export function buildEmailShareUrl(url?: string, to?: string, subject?: string, content?: string): string {
  const body = `${content ?? ""} ${resolveShareUrl(url)}`.trim();
  return `mailto:?subject=${encode(subject)}&to=${encode(to)}&body=${encode(body)}`;
}

export async function copyTextToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall back to execCommand for older/insecure contexts
    }
  }

  if (typeof document === "undefined") {
    return false;
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}
