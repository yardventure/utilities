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
  Flex: () => Flex_default
});
module.exports = __toCommonJS(components_exports);

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "button", children });
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
var convertUnit = (value) => {
  return `${value / 10}rem`;
};

// src/components/Flex.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Box,
  Button,
  Flex
});
