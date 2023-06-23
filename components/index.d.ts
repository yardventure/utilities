import * as react from 'react';

interface ButtonBase {
    children: string;
}
declare const Button: ({ children }: ButtonBase) => react.JSX.Element;

export { Button };
