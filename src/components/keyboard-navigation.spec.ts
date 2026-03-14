import { cleanup, fireEvent, render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ButtonCopy from "./buttons/ButtonCopy.vue";
import ButtonFacebook from "./buttons/ButtonFacebook.vue";
import * as shareUtils from "./shared/share";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("keyboard navigation", () => {
  it("keeps natural tab order without focus traps", async () => {
    const user = userEvent.setup();

    render({
      components: {
        ButtonFacebook,
        ButtonCopy
      },
      template: `
        <div>
          <ButtonFacebook text="Share Facebook" url="https://example.com" />
          <ButtonCopy text="Copy URL" url="https://example.com" />
        </div>
      `
    });

    const link = screen.getByRole("link", { name: "Share Facebook" });
    const button = screen.getByRole("button", { name: "Copy URL to clipboard" });

    await user.tab();
    expect(document.activeElement).toBe(link);

    await user.tab();
    expect(document.activeElement).toBe(button);
  });

  it("supports keyboard activation for Enter and Space", async () => {
    const copySpy = vi.spyOn(shareUtils, "copyTextToClipboard").mockResolvedValue(true);

    render({
      components: {
        ButtonCopy
      },
      template: `
        <div>
          <ButtonCopy text="Copy URL" url="https://example.com" />
        </div>
      `
    });

    const button = screen.getByRole("button", { name: "Copy URL to clipboard" });

    button.focus();
    await fireEvent.keyDown(button, { key: "Enter" });
    await fireEvent.keyDown(button, { key: " " });
    expect(copySpy).toHaveBeenCalledWith("https://example.com");
    expect(copySpy.mock.calls.length).toBeGreaterThanOrEqual(2);
  });
});
