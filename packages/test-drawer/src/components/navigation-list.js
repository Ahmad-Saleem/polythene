import { ListTileCSS } from "polythene-css";
import { vars } from "polythene-theme";

const icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

ListTileCSS.addStyle(".tests-drawer-navigation-list", {
  font_size_title: 14,
  font_weight_title: 500,
  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_hover_text: "#e01d5f",
  color_light_hover_front: "#e01d5f" 
});

export default ({ renderer: h, keys: k, Icon, List, ListTile }) => {

  const tile = ({ title, icon }) =>
    h(ListTile, {
      title,
      key: title, // for React
      className: "tests-drawer-navigation-list",
      front: h(Icon, {
        svg: { content: h.trust(icon) }
      }),
      hoverable: true,
      events: {
        [k.onclick]: () => console.log("click")
      }
    });

  return h(List, {
    compact: true,
    hoverable: true,
    tiles: [
      {
        title: "Inbox",
        icon: icons.inbox,
      },
      {
        title: "Starred",
        icon: icons.star,
      },
      {
        title: "Sent mail",
        icon: icons.send,
      },
      {
        title: "Drafts",
        icon: icons.drafts,
      }
    ].map(tile)
  });
};
