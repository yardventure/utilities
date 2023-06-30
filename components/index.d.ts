import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonBase {
    children: string;
}
declare const Button: ({ children }: ButtonBase) => react_jsx_runtime.JSX.Element;

interface FlexProps {
    children: React.ReactNode;
    display?: "flex" | "inline-flex";
    alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "stretch";
    flexDirection?: "row" | "column" | "column-reverse";
    wrap?: boolean;
    columnGap?: {
        sm?: number;
        lg?: number;
    };
    rowGap?: {
        sm?: number;
        lg?: number;
    };
    fullHeight?: boolean;
    fullWidth?: boolean;
    className?: string;
    spacing?: {
        sm?: number;
        lg?: number;
    };
    center?: boolean;
    onClick?: Function;
}
declare const Flex: ({ children, display, alignItems, justifyContent, flexDirection, wrap, columnGap, rowGap, fullHeight, fullWidth, className, spacing, center, onClick, }: FlexProps) => react_jsx_runtime.JSX.Element;

interface BoxProps {
    children: React.ReactNode;
    backgroundColor?: string | false;
    padding?: {
        sm?: number[];
        lg?: number[];
    };
    borderRadius?: {
        sm?: number[];
        lg?: number[];
    };
    border?: string | false;
    borderWidth?: number | false;
    opacity?: number | false;
    shadow?: string | false;
    overflow?: "hidden" | "visible" | "scroll";
    spacing?: {
        sm?: number;
        lg?: number;
    };
    className?: string;
    onClick?: Function;
}
declare const Box: ({ children, backgroundColor, padding, borderRadius, borderWidth, border, opacity, shadow, overflow, className, spacing, onClick, }: BoxProps) => react_jsx_runtime.JSX.Element;

interface TextProps {
    tagName: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
    variant: string;
    children: React.ReactNode;
    mobile?: boolean | false;
    transform?: "uppercase" | "capitalize" | "lowercase" | false;
    decoration?: "underline" | "lineThrough";
    fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
    color?: string | false;
    className?: string;
    align?: "center" | "left" | "right" | false;
    spacing?: {
        sm?: number;
        lg?: number;
    };
    fontFamily?: "inter" | false;
}
declare const Text: ({ tagName, mobile, transform, decoration, fontWeight, variant, color, className, align, spacing, fontFamily, children, }: TextProps) => react_jsx_runtime.JSX.Element;

export { Box, Button, Flex, Text };
