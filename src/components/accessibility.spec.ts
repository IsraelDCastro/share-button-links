import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import ButtonCopy from "./buttons/ButtonCopy.vue";
import ButtonFacebook from "./buttons/ButtonFacebook.vue";
import FacebookIcon from "./icons/ButtonFacebookIcon.vue";

describe("accessibility contract", () => {
  it("button and icon variants pass axe checks", async () => {
    const buttonWrapper = mount(ButtonFacebook, {
      props: {
        text: "Facebook",
        url: "https://example.com/post"
      }
    });
    const iconWrapper = mount(FacebookIcon, {
      props: {
        url: "https://example.com/post"
      }
    });

    const axeOptions = {
      rules: {
        // JSDOM does not provide full page landmarks.
        region: { enabled: false },
        // JSDOM does not implement canvas, required by this rule in axe.
        "color-contrast": { enabled: false }
      }
    };
    const buttonResults = await axe(buttonWrapper.element, axeOptions);
    const iconResults = await axe(iconWrapper.element, axeOptions);

    expect(buttonResults.violations).toHaveLength(0);
    expect(iconResults.violations).toHaveLength(0);
  });

  it("copy button exposes accessible feedback", async () => {
    const wrapper = mount(ButtonCopy, {
      props: {
        text: "Copy link",
        url: "https://example.com/post"
      }
    });

    const button = wrapper.find("button");
    expect(button.attributes("aria-label")).toBe("Copy URL to clipboard");
    expect(wrapper.find('[aria-live="polite"]').exists()).toBe(false);
  });
});
