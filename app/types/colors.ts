type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type CssVariable = `var(--${string})`;

export type Color = RGB | RGBA | HEX | CssVariable;
