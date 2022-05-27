const interRegular = {
    fontFamily: "Inter, Helvetica, sans-serif",
  "@font-face": {
    fontFamily: "Inter",
    src: 'url("../fonts/inter.woff2") format("woff2")',
  }
};

const interBold = {
    fontWeight: 800,
    "-webkit-user-select":"none",
    "user-select":"none",
    ...interRegular
}

export {interRegular, interBold}
