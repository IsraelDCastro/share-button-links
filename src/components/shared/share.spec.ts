import { describe, expect, it, vi } from "vitest";
import {
  buildEmailShareUrl,
  buildFacebookShareUrl,
  buildTelegramShareUrl,
  buildTwitterShareUrl,
  buildWhatsappShareUrl,
  copyTextToClipboard,
  resolveShareUrl
} from "./share";

describe("share utils", () => {
  it("uses window location as fallback for empty or # urls", () => {
    window.history.replaceState({}, "", "/current?ref=test");
    const currentHref = window.location.href;

    expect(resolveShareUrl("")).toBe(currentHref);
    expect(resolveShareUrl("#")).toBe(currentHref);
  });

  it("encodes URLs and text for Facebook/Twitter/Telegram/WhatsApp", () => {
    const url = "https://example.com/post?a=1&b=hello world";
    const title = "Hola mundo & test";

    expect(buildFacebookShareUrl(url, title)).toContain("u=https%3A%2F%2Fexample.com%2Fpost%3Fa%3D1%26b%3Dhello%20world");
    expect(buildTwitterShareUrl(url, title)).toContain("text=Hola%20mundo%20%26%20test");
    expect(buildTelegramShareUrl(url, title)).toContain("text=Hola%20mundo%20%26%20test");
    expect(buildWhatsappShareUrl(url, title)).toContain(
      "text=Hola%20mundo%20%26%20test%20https%3A%2F%2Fexample.com%2Fpost%3Fa%3D1%26b%3Dhello%20world"
    );
  });

  it("builds encoded mailto body and subject", () => {
    const href = buildEmailShareUrl("https://example.com", "mail@test.com", "Hello & Bye", "Texto con espacios");
    expect(href).toContain("subject=Hello%20%26%20Bye");
    expect(href).toContain("to=mail%40test.com");
    expect(href).toContain("body=Texto%20con%20espacios%20https%3A%2F%2Fexample.com");
  });

  it("returns false when clipboard APIs are unavailable", async () => {
    vi.stubGlobal("navigator", {} as Navigator);
    const result = await copyTextToClipboard("hello");
    expect(result).toBe(false);
    vi.unstubAllGlobals();
  });
});
