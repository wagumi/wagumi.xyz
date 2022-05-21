"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Seo/Seo.tsx



const Seo = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
                noindex: false,
                nofollow: false,
                title: "Wagumi DAO",
                canonical: "https://wagumi.xyz",
                description: "Wagumi DAO - A Japanese Web3 Community",
                openGraph: {
                    locale: "en_US",
                    site_name: "wagumi.xyz",
                    type: "website",
                    url: "https://wagumi.xyz",
                    images: [
                        {
                            url: "https://wagumi.xyz/ogp.png"
                        }
                    ]
                },
                twitter: {
                    cardType: "summary_large_image",
                    handle: "@WagumiDAO",
                    site: "@WagumiDAO"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "icon",
                    href: "/favicon.svg"
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/Seo/index.ts


;// CONCATENATED MODULE: ./src/pages/_app.tsx

// import Script from "next/script";


const CustomApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Seo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
/* harmony default export */ const _app = (CustomApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(678));
module.exports = __webpack_exports__;

})();