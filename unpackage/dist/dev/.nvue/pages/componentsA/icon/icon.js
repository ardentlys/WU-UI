import { _ as __easycom_0 } from "../../../wu-icon.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList, createVNode, toDisplayString } from "vue";
import { r as resolveEasycom } from "../../../uni-app.es.js";
import { _ as _export_sfc } from "../../../_plugin-vue_export-helper.js";
import "../../../mixin.js";
const _style_0 = { "wu-page": { "": { "paddingTop": "14rpx", "paddingRight": "14rpx", "paddingBottom": "14rpx", "paddingLeft": "14rpx" } }, "wu-page__grid": { "": { "flexDirection": "row", "flexWrap": "wrap" } }, "wu-page__grid__item": { "": { "flexDirection": "column", "alignItems": "center", "justifyContent": "center", "height": "240rpx", "width": "240rpx", "paddingTop": 0, "paddingRight": 5, "paddingBottom": 0, "paddingLeft": 5 } }, "wu-page__grid__item__icon": { "": { "height": "130rpx", "flexDirection": "row", "alignItems": "flex-end" } }, "wu-page__grid__item__text": { "": { "color": "#909193", "fontSize": 14, "height": "110rpx" } } };
const _sfc_main = {
  data() {
    return {
      iconList: {
        "level": "e68f",
        "download": "e670",
        "search": "e632",
        "reload": "e627",
        "scan": "e631",
        "calendar": "e65c",
        "bag": "e647",
        "checkbox-mark": "e659",
        "attach": "e640",
        "wifi-off": "e6cc",
        "woman": "e626",
        "man": "e675",
        "chat": "e656",
        "chat-fill": "e63f",
        "red-packet": "e6c3",
        "folder": "e694",
        "order": "e695",
        "arrow-up-fill": "e636",
        "arrow-down-fill": "e638",
        "backspace": "e64d",
        "photo": "e60d",
        "photo-fill": "e6b4",
        "lock": "e69d",
        "lock-fill": "e6a6",
        "lock-open": "e68d",
        "lock-opened-fill": "e6a1",
        "home": "e67b",
        "home-fill": "e68e",
        "star": "e618",
        "star-fill": "e61e",
        "share": "e629",
        "share-fill": "e6bb",
        "share-square": "e6c4",
        "volume": "e605",
        "volume-fill": "e624",
        "volume-off": "e6bd",
        "volume-off-fill": "e6c8",
        "trash": "e623",
        "trash-fill": "e6ce",
        "shopping-cart": "e6cb",
        "shopping-cart-fill": "e630",
        "question-circle": "e622",
        "question-circle-fill": "e6bc",
        "plus": "e625",
        "plus-circle": "e603",
        "plus-circle-fill": "e611",
        "tags": "e621",
        "tags-fill": "e613",
        "pause": "e61c",
        "pause-circle": "e696",
        "pause-circle-fill": "e60c",
        "play-circle": "e6af",
        "play-circle-fill": "e62a",
        "map": "e665",
        "map-fill": "e6a8",
        "phone": "e6ba",
        "phone-fill": "e6ac",
        "list": "e690",
        "list-dot": "e6a9",
        "info-circle": "e69f",
        "info-circle-fill": "e6a7",
        "minus": "e614",
        "minus-circle": "e6a5",
        "mic": "e66d",
        "mic-off": "e691",
        "grid": "e68c",
        "grid-fill": "e698",
        "eye": "e664",
        "eye-fill": "e697",
        "eye-off": "e69c",
        "eye-off-outline": "e688",
        "file-text": "e687",
        "file-text-fill": "e67f",
        "edit-pen": "e65d",
        "edit-pen-fill": "e679",
        "email": "e673",
        "email-fill": "e683",
        "checkmark": "e64a",
        "checkmark-circle": "e643",
        "checkmark-circle-fill": "e668",
        "clock": "e66c",
        "clock-fill": "e64b",
        "close": "e65a",
        "close-circle": "e64e",
        "close-circle-fill": "e666",
        "car": "e64f",
        "car-fill": "e648",
        "bell": "e651",
        "bell-fill": "e604",
        "play-left": "e6bf",
        "play-right": "e6b3",
        "play-left-fill": "e6ae",
        "play-right-fill": "e6ad",
        "skip-back-left": "e6c5",
        "skip-forward-right": "e61f",
        "setting": "e602",
        "setting-fill": "e6d0",
        "more-dot-fill": "e66f",
        "more-circle": "e69e",
        "more-circle-fill": "e684",
        "arrow-upward": "e641",
        "arrow-downward": "e634",
        "arrow-leftward": "e63b",
        "arrow-rightward": "e644",
        "arrow-up": "e633",
        "arrow-down": "e63e",
        "arrow-left": "e646",
        "arrow-right": "e63c",
        "thumb-up": "e612",
        "thumb-up-fill": "e62c",
        "thumb-down": "e60a",
        "thumb-down-fill": "e628",
        "coupon": "e65f",
        "coupon-fill": "e64c",
        "kefu-ermai": "e660",
        "server-fill": "e610",
        "server-man": "e601",
        "warning": "e6c1",
        "warning-fill": "e6c7",
        "camera": "e642",
        "camera-fill": "e650",
        "pushpin": "e6d1",
        "pushpin-fill": "e6b6",
        "heart": "e6a2",
        "heart-fill": "e68b",
        "account": "e63a",
        "account-fill": "e653",
        "integral": "e693",
        "integral-fill": "e6b1",
        "gift": "e680",
        "gift-fill": "e6b0",
        "empty-data": "e671",
        "empty-address": "e68a",
        "empty-favor": "e662",
        "empty-car": "e656",
        "empty-order": "e66b",
        "empty-list": "e671",
        "empty-search": "e677",
        "empty-permission": "e67c",
        "empty-news": "e67d",
        "empty-history": "e684",
        "empty-coupon": "e69b",
        "empty-page": "e60e",
        "apple-fill": "e635",
        "zhifubao-circle-fill": "e617",
        "weixin-circle-fill": "e6cd",
        "weixin-fill": "e620",
        "qq-fill": "e608",
        "qq-circle-fill": "e6b9",
        "moments": "e6a0",
        "moments-circel-fill": "e6c2",
        "twitter": "e607",
        "twitter-circle-fill": "e6cf"
      }
    };
  },
  methods: {
    selectIcon(name) {
      uni.setClipboardData({
        data: `<wu-icon name="${name}"></wu-icon>`
      });
      uni.hideToast();
      uni.$w.toast("代码复制成功");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_wu_icon = resolveEasycom(resolveDynamicComponent("wu-icon"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "wu-page" }, [
      createElementVNode("view", { class: "wu-border-left wu-border-top wu-page__grid" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($data.iconList, (item, index) => {
            return openBlock(), createElementBlock("view", {
              onClick: ($event) => $options.selectIcon(index),
              class: "wu-page__grid__item wu-border-bottom wu-border-right",
              key: index
            }, [
              createElementVNode("view", { class: "wu-page__grid__item__icon" }, [
                createVNode(_component_wu_icon, {
                  name: index,
                  size: "30",
                  color: "#909399"
                }, null, 8, ["name"])
              ]),
              createElementVNode(
                "u-text",
                { class: "wu-page__grid__item__text" },
                toDisplayString(index),
                1
                /* TEXT */
              )
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "C:/Users/13179/Documents/HBuilderProjects/wu-ui/pages/componentsA/icon/icon.nvue"]]);
export {
  icon as default
};
