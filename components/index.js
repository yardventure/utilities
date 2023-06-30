"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Box: () => Box_default,
  Button: () => Button_default,
  Flex: () => Flex_default,
  Grid: () => Grid_default,
  Text: () => Text_default
});
module.exports = __toCommonJS(components_exports);

// src/custom/LoadingSpinner.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var LoadingSpinner = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: `
        loader-8us4IE
      `
    }
  );
};
var LoadingSpinner_default = LoadingSpinner;

// src/functions/getStyles.ts
var getStyleArray = (value, isDesktop) => {
  if (isDesktop) {
    if (value.lg) {
      return value.lg.map((val) => convertUnit(val)).join(" ");
    }
    if (value.sm) {
      return value.sm.map((val) => convertUnit(val)).join(" ");
    }
  } else {
    if (value.sm) {
      return value.sm.map((val) => convertUnit(val)).join(" ");
    }
    return "0";
  }
};
var getStyle = (value, isDesktop) => {
  if (isDesktop) {
    if (value.lg == 0) {
      return "0";
    }
    if (value.lg) {
      return convertUnit(value.lg);
    }
    if (value.sm) {
      return convertUnit(value.sm);
    }
  } else {
    if (value.sm) {
      return convertUnit(value.sm);
    }
    return "0";
  }
};
var getStyleSpacing = (value, isDesktop) => {
  if (isDesktop) {
    if (value.lg == 0) {
      return value.lg;
    }
    return value.lg || value.sm;
  } else {
    if (value.sm) {
      return value.sm;
    }
    return "0";
  }
};
var convertUnit = (value) => {
  return `${value / 10}rem`;
};

// src/components/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = ({
  as,
  buttonColor,
  textColor,
  href,
  external,
  variant = "",
  buttonHeight = 56,
  buttonWidth,
  borderRadius = 8,
  shadow = false,
  border,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  className = "",
  hint,
  transform,
  children,
  onClick
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
      return;
    }
  };
  const customStyles = {};
  if (buttonWidth) {
    customStyles.width = convertUnit(buttonWidth);
  }
  if (buttonHeight) {
    customStyles.height = convertUnit(buttonHeight);
  }
  if (borderRadius) {
    customStyles.borderRadius = convertUnit(borderRadius);
  }
  if (href && onClick) {
    throw new Error("Please provider either href or onClick");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      style: customStyles,
      className: `
        button-8us4IE
        button-8us4IE-buttonColor-${buttonColor}
        button-8us4IE-textColor-${textColor}
        ${variant ? `button-8us4IE-variant-${variant}` : ""}
        ${border ? "button-8us4IE-border" : ""}
        ${shadow ? "button-8us4IE-shadow" : ""}
        ${loading ? "button-8us4IE-loading" : ""}
        ${transform ? `button-8us4IE-transform-${transform}` : ""}
        ${className}
      `,
      disabled: loading || disabled,
      onClick: handleClick,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(LinkWrapper, { as, href, target: external ? "_blank" : "_self", children: [
        startIcon,
        children,
        hint && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "button-8us4IE__hint", children: hint }),
        endIcon,
        loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoadingSpinner_default, {})
      ] })
    }
  );
};
var LinkWrapper = ({
  as,
  href,
  target,
  children
}) => {
  const Tag = as;
  if (as && !href || !as && href) {
    throw new Error("Please provide both - as and href props");
  }
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Tag, { href, target, className: "button-8us4IE-link", children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "button-8us4IE-link", children });
};
var Button_default = Button;

// src/functions/useMediaQuery.ts
var import_react = require("react");
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const media = window.matchMedia(`(min-width: ${query}px)`);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// src/components/Flex.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Flex = ({
  children,
  display = "flex",
  alignItems,
  justifyContent,
  flexDirection = "row",
  wrap,
  columnGap,
  rowGap,
  fullHeight,
  fullWidth,
  className = "",
  spacing,
  center,
  onClick
}) => {
  const isDesktop = useMediaQuery(1168);
  const customStyles = {};
  if (columnGap) {
    customStyles.columnGap = getStyle(columnGap, isDesktop);
  }
  if (rowGap) {
    customStyles.rowGap = getStyle(rowGap, isDesktop);
  }
  if (spacing) {
    customStyles.marginBottom = getStyle(spacing, isDesktop);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: `
        flex-8us4IE
        flex-8us4IE-${display}
        flex-8us4IE-${`alignItems-${alignItems}`}
        flex-8us4IE-${`justifyContent-${justifyContent}`}
        flex-8us4IE-${`flexDirection-${flexDirection}`}
        ${wrap ? "flex-8us4IE-wrap" : ""}
        ${fullHeight ? "flex-8us4IE-fullHeight" : ""}
        ${fullWidth ? "flex-8us4IE-fullWidth" : ""}
        ${center ? "flex-8us4IE-center" : ""}
        ${className}
      `,
      style: customStyles,
      onClick: () => {
        onClick && onClick();
      },
      role: onClick ? "button" : "",
      children
    }
  );
};
var Flex_default = Flex;

// src/components/Box.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Box = ({
  children,
  backgroundColor = "",
  padding,
  borderRadius,
  borderWidth,
  border = "",
  opacity = 100,
  shadow,
  overflow = "visible",
  className = "",
  spacing,
  onClick
}) => {
  const isDesktop = useMediaQuery(1168);
  const customStyles = {
    overflow
  };
  if (padding) {
    customStyles.padding = getStyleArray(padding, isDesktop);
  }
  if (borderRadius) {
    customStyles.borderRadius = getStyleArray(borderRadius, isDesktop);
  }
  if (spacing) {
    customStyles.marginBottom = getStyle(spacing, isDesktop);
  }
  if (borderWidth) {
    customStyles.borderWidth = convertUnit(borderWidth);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: `
        box-8us4IE 
        ${backgroundColor ? `box-8us4IE-backgroundColor-${backgroundColor}-${opacity}` : ""}
        ${border ? `box-8us4IE-border-${border}` : ""}
        ${shadow ? `box-8us4IE-shadow-${shadow}` : ""}
        ${className}
      `,
      style: customStyles,
      onClick: () => {
        onClick && onClick();
      },
      role: onClick ? "button" : "",
      children
    }
  );
};
var Box_default = Box;

// src/components/Text.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Text = ({
  tagName,
  mobile = false,
  transform,
  decoration,
  fontWeight,
  variant,
  color,
  className = "",
  align,
  spacing,
  fontFamily,
  children
}) => {
  const isDesktop = useMediaQuery(1168);
  const Tag = tagName;
  const customStyles = {};
  if (spacing) {
    customStyles.marginBottom = getStyle(spacing, isDesktop);
  }
  if (fontWeight) {
    customStyles.fontWeight = fontWeight.toString();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    Tag,
    {
      style: customStyles,
      className: `
        text-8us4IE
        text-8us4IE-variant-${variant}
        text-8us4IE-fontFamily-${fontFamily}
        ${color ? `text-8us4IE-color-${color}` : ""}
        ${align ? `text-8us4IE-align-${align}` : ""}
        ${mobile ? `text-8us4IE-mobile` : ""}
        ${transform ? `text-8us4IE-transform-${transform}` : ""}
        ${decoration ? `text-8us4IE-decoration-${decoration}` : ""}
        ${className}
      `,
      children
    }
  );
};
var Text_default = Text;

// src/components/Grid.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var Grid = ({
  children,
  column,
  gutter,
  className = "",
  spacing
}) => {
  const isDesktop = useMediaQuery(1168);
  const customStyles = {};
  if (spacing) {
    customStyles.marginBottom = getStyle(spacing, isDesktop);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      className: `
        grid-8us4IE
        grid-8us4IE-${getStyleSpacing(column, isDesktop)}-${getStyleSpacing(
        gutter,
        isDesktop
      )}
        ${className}
      `,
      style: customStyles,
      children
    }
  );
};
var Grid_default = Grid;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Flex,
  Grid,
  Text
});
