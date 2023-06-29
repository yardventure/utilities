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
    border?: string;
    borderWidth?: number;
    opacity?: number;
    shadow?: "xs" | "sm" | "md";
    overflow?: "hidden" | "visible";
    spacing?: {
        sm?: number;
        lg?: number;
    };
    className?: string;
    onClick?: Function;
}
declare const Box: ({ children, backgroundColor, padding, borderRadius, borderWidth, border, opacity, shadow, overflow, className, spacing, onClick, }: BoxProps) => react_jsx_runtime.JSX.Element;

export { Box, Button, Flex };
