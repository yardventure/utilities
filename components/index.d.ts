import * as react from 'react';
import react__default from 'react';
import { UrlObject } from 'url';
import * as react_jsx_runtime from 'react/jsx-runtime';

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
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

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
    alignItems?: "normal" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | false;
    justifyContent?: "normal" | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | false;
    flexDirection?: FlexDirection;
    wrap?: boolean;
    columnGap?: SpacingData;
    rowGap?: SpacingData;
    gap?: SpacingData;
    fullHeight?: boolean;
    fullWidth?: boolean;
    spacing?: SpacingData;
    center?: boolean;
    stackMobile?: boolean;
}
declare const Flex: react.ForwardRefExoticComponent<FlexProps & react.RefAttributes<HTMLDivElement>>;

type Overflow = "hidden" | "visible" | "scroll" | "auto";
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    backgroundColor?: string | false;
    padding?: SpacingArrayData;
    paddingTop?: SpacingData;
    paddingRight?: SpacingData;
    paddingBottom?: SpacingData;
    paddingLeft?: SpacingData;
    paddingX?: SpacingData;
    paddingY?: SpacingData;
    borderRadius?: SpacingArrayData;
    rounded?: boolean;
    border?: string | false;
    borderWidth?: number | false;
    opacity?: number | false;
    shadow?: string | false;
    overflow?: Overflow | false;
    spacing?: SpacingData;
}
declare const Box: react.ForwardRefExoticComponent<BoxProps & react.RefAttributes<HTMLDivElement>>;

interface TextProps extends react__default.HTMLAttributes<[
    HTMLParagraphElement,
    HTMLHeadingElement,
    HTMLSpanElement
]> {
    tagName: react__default.ElementType;
    variant: string;
    children: react__default.ReactNode;
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
declare const Grid: react.ForwardRefExoticComponent<GridProps & react.RefAttributes<HTMLDivElement>>;

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
declare const Radio: react.ForwardRefExoticComponent<RadioProps & react.RefAttributes<HTMLDivElement>>;

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    active: boolean;
    customIcon?: React.ReactNode;
    setActive?: Function;
    reverse?: boolean;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLDivElement>>;

interface TrustpilotStarsProps {
    size?: number;
    starColor?: string;
    score: number;
}
declare const TrustpilotStars: ({ size, starColor, score, }: TrustpilotStarsProps) => react_jsx_runtime.JSX.Element;

export { Accordion, AccordionButton, AccordionContent, Box, Button, Checkbox, Column, Container, Flex, Grid, Radio, Row, Text, TrustpilotStars };
