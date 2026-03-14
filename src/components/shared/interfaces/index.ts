export type ColorVariant = "brand" | "flat" | "neutral";

export interface BooleanButtonOpts {
  hasIcon?: boolean;
  isRounded?: boolean;
  isCircled?: boolean;
  isBordered?: boolean;
  colorVariant?: ColorVariant;
}

export interface BooleanButtonIconOpts extends Omit<BooleanButtonOpts, "hasIcon"> {
  isAllWhite?: boolean;
  isWhited?: boolean;
}
