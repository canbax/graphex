export const GENERAL_CY_STYLE: any =
  [
    {
      selector: "node",
      style: {
        "background-color": "#FFFFFF",
      }
    },
    {
      selector: "node.hover",
      style: {
        "background-fill": "radial-gradient",
        "background-gradient-stop-colors": "#e0f7fa #18ffff",
        "background-gradient-stop-positions": "0 50 100",
        "border-style": "dotted",
        "border-width": 3,
        "border-color": "#18ffff",
      }
    },
    {
      selector: "edge.hover",
      style: {
        "line-fill": "linear-gradient",
        "line-gradient-stop-colors": "#e0f7fa #006064",
        "line-gradient-stop-positions": "0 50 100",
        "line-style": "dashed",
        "line-dash-pattern": [1, 2],
        "line-dash-offset": 48,
        "transition-property": "line-dash-offset",
        "transition-duration": 3000
      }
    },
    {
      selector: "node:selected",
      style: {
        "overlay-color": "#D7D7D7",
        "overlay-opacity": 0.3,
        "overlay-padding": "6px",
      }
    },
    {
      selector: "edge:selected",
      style: {
        "overlay-color": "#D7D7D7",
        "overlay-padding": "6px",
        "overlay-opacity": 0.3,
        "line-color": "#808080"
      }
    },
  ];

