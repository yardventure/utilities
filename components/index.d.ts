import * as react_jsx_runtime from 'react/jsx-runtime';
import { UrlObject } from 'url';
import React$1 from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: any;
    buttonColor?: string;
    textColor?: string;
    href?: UrlObject | string;
    external?: boolean;
    variant?: string;
    buttonHeight?: number;
    buttonWidth?: number | false;
    borderRadius?: number;
    shadow?: boolean;
    border?: boolean;
    loading?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    className?: string;
    hint?: string;
    transform?: "uppercase";
}
declare const Button: ({ as, buttonColor, textColor, href, external, variant, buttonHeight, buttonWidth, borderRadius, shadow, border, loading, startIcon, endIcon, hint, transform, children, ...rest }: ButtonProps) => react_jsx_runtime.JSX.Element;

interface SpacingArrayData {
    sm?: number[];
    lg?: number[];
}
interface SpacingData {
    sm?: number;
    lg?: number;
}

type FlexDirection = "row" | "column" | "column-reverse" | "row-reverse" | false;
interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    display?: "flex" | "inline-flex";
    alignItems?: "normal" | "flex-start" | "center" | "flex-end" | "baseline" | "stretch" | false;
    justifyContent?: "normal" | "flex-start" | "center" | "flex-end" | "space-between" | "stretch" | false;
    flexDirection?: FlexDirection;
    wrap?: boolean;
    columnGap?: SpacingData;
    rowGap?: SpacingData;
    fullHeight?: boolean;
    fullWidth?: boolean;
    spacing?: SpacingData;
    center?: boolean;
    stackMobile?: boolean;
}
declare const Flex: ({ children, display, alignItems, justifyContent, flexDirection, wrap, columnGap, rowGap, fullHeight, fullWidth, spacing, center, stackMobile, ...rest }: FlexProps) => react_jsx_runtime.JSX.Element;

type Overflow = "hidden" | "visible" | "scroll" | "auto";
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    backgroundColor?: string | false;
    padding?: SpacingArrayData;
    borderRadius?: SpacingArrayData;
    border?: string | false;
    borderWidth?: number | false;
    opacity?: number | false;
    shadow?: string | false;
    overflow?: Overflow | false;
    spacing?: SpacingData;
}
declare const Box: ({ children, backgroundColor, padding, borderRadius, borderWidth, border, opacity, shadow, overflow, spacing, ...rest }: BoxProps) => react_jsx_runtime.JSX.Element;

interface TextProps extends React$1.HTMLAttributes<[
    HTMLParagraphElement,
    HTMLHeadingElement,
    HTMLSpanElement
]> {
    tagName: React$1.ElementType;
    variant: string;
    children: React$1.ReactNode;
    mobile?: boolean | false;
    transform?: "uppercase" | "capitalize" | "lowercase" | false;
    decoration?: "underline" | "lineThrough" | false;
    fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
    textColor?: string | false;
    align?: "center" | "left" | "right" | false;
    spacing?: SpacingData;
    fontFamily?: string;
}
declare const Text: ({ tagName, mobile, transform, decoration, fontWeight, variant, textColor, align, spacing, fontFamily, children, ...rest }: TextProps) => react_jsx_runtime.JSX.Element;

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    column: SpacingData;
    gutter: SpacingArrayData;
    spacing?: SpacingData;
}
declare const Grid: ({ children, column, gutter, spacing, ...rest }: GridProps) => react_jsx_runtime.JSX.Element;

interface ContainerProps {
    children: React.ReactNode;
}
declare const Container: ({ children }: ContainerProps) => react_jsx_runtime.JSX.Element;

interface RowProps {
    padding?: number;
    position?: "space-between" | "center" | "flex-start" | "flex-end";
    align?: "center";
    children: React.ReactNode;
}
declare const Row: ({ children, padding, position, align }: RowProps) => react_jsx_runtime.JSX.Element;

interface ColumnProps {
    column: number;
    gutter: number;
    children: React.ReactNode;
}
declare const Column: ({ children, column, gutter }: ColumnProps) => react_jsx_runtime.JSX.Element;

interface AccordionProps {
    children: JSX.Element[];
    active?: boolean;
    customClass?: string;
    maxHeight?: number;
    contentHeight?: number;
    onToggle?: Function;
    listeners?: any[];
    reverse?: boolean;
}
declare const Accordion: ({ children, active, customClass, maxHeight, contentHeight, onToggle, listeners, reverse, }: AccordionProps) => react_jsx_runtime.JSX.Element;
interface AccordionContentProps {
    children: React.ReactNode;
}
declare const AccordionContent: ({ children }: AccordionContentProps) => react_jsx_runtime.JSX.Element;
interface AccordionButtonProps {
    children: React.ReactNode;
}
declare const AccordionButton: ({ children }: AccordionButtonProps) => react_jsx_runtime.JSX.Element;

interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    active: boolean;
    setActive?: Function;
    reverse?: boolean;
}
declare const Radio: ({ children, active, setActive, reverse, ...rest }: RadioProps) => react_jsx_runtime.JSX.Element;

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    active: boolean;
    customIcon?: React.ReactNode;
    setActive?: Function;
    reverse?: boolean;
}
declare const Checkbox: ({ children, active, customIcon, setActive, reverse, ...rest }: CheckboxProps) => react_jsx_runtime.JSX.Element;

interface TrustpilotStarsProps {
    size?: number;
    starColor?: string;
    score: number;
}
declare const TrustpilotStars: ({ size, starColor, score, }: TrustpilotStarsProps) => react_jsx_runtime.JSX.Element;

export { Accordion, AccordionButton, AccordionContent, Box, Button, Checkbox, Column, Container, Flex, Grid, Radio, Row, Text, TrustpilotStars };
