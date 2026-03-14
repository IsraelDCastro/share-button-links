import type { BooleanButtonIconOpts, BooleanButtonOpts } from "./interfaces";

function shapeClassList(props: Pick<BooleanButtonOpts, "isRounded" | "isCircled" | "isBordered">): string[] {
  return [
    props.isRounded ? "is-rounded" : "",
    props.isCircled ? "is-circled" : "",
    props.isBordered ? "is-bordered" : ""
  ].filter(Boolean);
}

function colorVariantClassList(props: Pick<BooleanButtonOpts, "colorVariant">): string[] {
  return [
    props.colorVariant === "flat" ? "is-flat" : "",
    props.colorVariant === "neutral" ? "is-neutral" : ""
  ].filter(Boolean);
}

export function getButtonClassList(props: BooleanButtonOpts): string[] {
  return [...shapeClassList(props), ...colorVariantClassList(props)];
}

export function getIconButtonClassList(props: BooleanButtonIconOpts): string[] {
  return [...shapeClassList(props), ...colorVariantClassList(props), props.isAllWhite || props.isWhited ? "is-whited" : ""].filter(Boolean);
}
