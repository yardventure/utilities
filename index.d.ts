import * as react from 'react';

declare function useMediaQuery(query: number): boolean;

interface ButtonBase {
    children: string;
}
declare const Button: ({ children }: ButtonBase) => react.JSX.Element;

export { Button, useMediaQuery };
