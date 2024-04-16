"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[365], {
    3365: function(a, b, c) {
        c.d(b, {
            Z: function() {
                return r
            }
        });
        var d = c(5893)
          , e = c(1664)
          , f = c(7294)
          , g = [{
            title: "Home",
            path: "/"
        }, {
            title: "Projects",
            path: "/projects"
        }, {
            title: "Designs",
            path: "/designs"
        }, ]
          , h = {
            columns: [{
                title: "Pages",
                links: [{
                    name: "Home",
                    link: "/",
                    leavesWebsite: !1
                }, {
                    name: "Projects",
                    link: "/projects",
                    leavesWebsite: !1
                }, {
                    name: "Designs",
                    link: "/designs",
                    leavesWebsite: !1
                }, ]
            }, {
                title: "Social",
                links: [{
                    name: "GitHub",
                    link: "https://github.com/braydentw",
                    icon: "/static/icons/github-f.svg",
                    leavesWebsite: !0
                }, {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/braydentw/",
                    icon: "/static/icons/linkedin-f.svg",
                    leavesWebsite: !0
                }, {
                    name: "Dribbble",
                    link: "https://dribbble.com/braydentw",
                    icon: "/static/icons/dribbble-f.svg",
                    leavesWebsite: !0
                }, {
                    name: "IndieHackers",
                    link: "https://indiehackers.com/braydentw",
                    icon: "/static/icons/indiehackers-f.svg",
                    leavesWebsite: !0
                }, {
                    name: "Email",
                    link: "mailto:contact@braydentw.io",
                    icon: "/static/icons/mail-f.svg",
                    leavesWebsite: !0
                }, ]
            }, ],
            support: {
                buymeacoffee: "braydenw",
                paypal: "braydentw",
                message: "I appreciate your support very much! 💙"
            }
        }
          , i = c(5675)
          , j = c(9008)
          , k = c(6333);
        function l(a, b, c) {
            return b in a ? Object.defineProperty(a, b, {
                value: c,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : a[b] = c,
            a
        }
        function m(a) {
            for (var b = 1; b < arguments.length; b++) {
                var c = null != arguments[b] ? arguments[b] : {}
                  , d = Object.keys(c);
                "function" == typeof Object.getOwnPropertySymbols && (d = d.concat(Object.getOwnPropertySymbols(c).filter(function(a) {
                    return Object.getOwnPropertyDescriptor(c, a).enumerable
                }))),
                d.forEach(function(b) {
                    l(a, b, c[b])
                })
            }
            return a
        }
        function n() {
            var a = (0,
            f.useState)(!1)
              , b = a[0]
              , c = a[1]
              , h = (0,
            k.Z)(b, {
                enterDelay: 20,
                exitDelay: 300
            })
              , i = h.mounted
              , j = h.rendered;
            return (0,
            f.useEffect)(function() {
                return function() {
                    document.body.style.overflow = ""
                }
            }, []),
            (0,
            d.jsxs)("nav", {
                children: [(0,
                d.jsxs)("div", {
                    className: "w-full justify-between flex items-center ".concat(j && "bg-bg", " p-5"),
                    style: {
                        zIndex: 101
                    },
                    children: [(0,
                    d.jsx)("li", {
                        className: "list-none font-bold text-lg",
                        children: (0,
                        d.jsx)(e.default, {
                            href: "/",
                            children: (0,
                            d.jsx)("img", {
                                className: "mr-3",
                                src: "/static/logos/logo_full.svg",
                                width: "160"
                            })
                        })
                    }), (0,
                    d.jsxs)("button", {
                        className: "burger visible md:hidden",
                        "aria-label": "Toggle menu",
                        type: "button",
                        onClick: function() {
                            b ? (c(!1),
                            document.body.style.overflow = "") : (c(!0),
                            document.body.style.overflow = "hidden")
                        },
                        children: [(0,
                        d.jsx)(o, {
                            "data-hide": b
                        }), (0,
                        d.jsx)(p, {
                            "data-hide": !b
                        })]
                    })]
                }), i && (0,
                d.jsx)("ul", {
                    className: "menu flex flex-col absolute bg-bg\n            ".concat(j && "menuRendered"),
                    children: g.map(function(a, b) {
                        return (0,
                        d.jsx)("li", {
                            className: "border-b border-gray-900 text-gray-100 text-sm font-semibold",
                            style: {
                                transitionDelay: "".concat(150 + 25 * b, "ms")
                            },
                            children: (0,
                            d.jsx)(e.default, {
                                href: a.path,
                                children: (0,
                                d.jsx)("a", {
                                    className: "flex w-auto pb-4",
                                    children: a.title
                                })
                            })
                        })
                    })
                })]
            })
        }
        function o(a) {
            return (0,
            d.jsxs)("svg", m({
                className: "h-5 w-5 absolute text-gray-100",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none"
            }, a, {
                children: [(0,
                d.jsx)("path", {
                    d: "M2.5 7.5H17.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                d.jsx)("path", {
                    d: "M2.5 12.5H17.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            }))
        }
        function p(a) {
            return (0,
            d.jsxs)("svg", m({
                className: "h-5 w-5 absolute text-gray-100",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none",
                shapeRendering: "geometricPrecision"
            }, a, {
                children: [(0,
                d.jsx)("path", {
                    d: "M18 6L6 18"
                }), (0,
                d.jsx)("path", {
                    d: "M6 6l12 12"
                })]
            }))
        }
        var q = function(a) {
            var b = a.currentPage;
            return (0,
            d.jsxs)("nav", {
                className: "flex items-center justify-between",
                children: [(0,
                d.jsx)("li", {
                    className: "list-none font-bold text-lg cursor-pointer",
                    children: (0,
                    d.jsx)(e.default, {
                        href: "/",
                        children: (0,
                        d.jsxs)("span", {
                            className: "font-black text-xl flex items-center",
                            children: [(0,
                            d.jsx)("img", {
                                className: "mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500",
                                src: "/static/logos/logo_no_text.svg",
                                width: "60"
                            }), "BraydenTW".split("").map(function(a, b) {
                                return (0,
                                d.jsx)("span", {
                                    className: "hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim",
                                    children: a
                                }, b)
                            })]
                        })
                    })
                }), (0,
                d.jsx)("ul", {
                    className: "flex items-center space-x-10",
                    children: g.map(function(a, c) {
                        return (0,
                        d.jsx)("li", {
                            className: "list-none text-white ".concat(b === a.title ? "opacity-100" : "opacity-40 hover:opacity-100 transition-opacity"),
                            children: (0,
                            d.jsx)(e.default, {
                                href: a.path,
                                children: a.title
                            })
                        }, c)
                    })
                })]
            })
        }
          , r = function(a) {
            var b = a.currentPage
              , c = a.meta
              , f = c.title
              , g = c.desc
              , k = a.children
              , l = "".concat("Home" === b ? "Brayden Wright - Web Developer, Designer, Creator." : "".concat(b, " - BraydenTW.io"));
            return console.log(b),
            (0,
            d.jsxs)("div", {
                className: "w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible",
                style: {
                    maxWidth: "1200px"
                },
                children: [(0,
                d.jsxs)(j.default, {
                    children: [(0,
                    d.jsx)("title", {
                        children: l
                    }), (0,
                    d.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/static/favicon/apple-touch-icon.png"
                    }), (0,
                    d.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/static/favicon/favicon-32x32.png"
                    }), (0,
                    d.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/static/favicon/favicon-16x16.png"
                    }), (0,
                    d.jsx)("link", {
                        rel: "manifest",
                        href: "/static/favicon/site.webmanifest"
                    }), (0,
                    d.jsx)("meta", {
                        name: "title",
                        content: l
                    }), (0,
                    d.jsx)("meta", {
                        name: "description",
                        content: g
                    }), (0,
                    d.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0,
                    d.jsx)("meta", {
                        property: "og:url",
                        content: "https://braydentw.io/"
                    }), (0,
                    d.jsx)("meta", {
                        property: "og:title",
                        content: l
                    }), (0,
                    d.jsx)("meta", {
                        property: "og:description",
                        content: g
                    }), (0,
                    d.jsx)("meta", {
                        property: "og:image",
                        content: "https://braydentw.io/static/misc/og.png"
                    }), (0,
                    d.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0,
                    d.jsx)("meta", {
                        property: "twitter:url",
                        content: "https://braydentw.io/"
                    }), (0,
                    d.jsx)("meta", {
                        property: "twitter:title",
                        content: l
                    }), (0,
                    d.jsx)("meta", {
                        property: "twitter:description",
                        content: g
                    }), (0,
                    d.jsx)("meta", {
                        property: "twitter:image",
                        content: "https://braydentw.io/static/misc/og.png"
                    }), (0,
                    d.jsx)("script", {
                        async: !0,
                        src: "https://www.googletagmanager.com/gtag/js?id=".concat("G-TLNQHKBJX8")
                    }), (0,
                    d.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-KC3CN7V');"
                        }
                    }), (0,
                    d.jsx)("script", {
                        dangerouslySetInnerHTML: {
                            __html: "\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', '".concat("G-TLNQHKBJX8", "', {\n                page_path: window.location.pathname,\n              });\n          ")
                        }
                    })]
                }), (0,
                d.jsx)("noscript", {
                    dangerouslySetInnerHTML: {
                        __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V\"\nheight=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>"
                    }
                }), (0,
                d.jsxs)("main", {
                    className: "p-5 w-full flex-1 text-center",
                    children: [(0,
                    d.jsx)("div", {
                        className: "hidden sm:block z-100",
                        children: (0,
                        d.jsx)(q, {
                            currentPage: b
                        })
                    }), (0,
                    d.jsx)("div", {
                        className: "-m-5 block sm:hidden z-100",
                        children: (0,
                        d.jsx)(n, {})
                    }), k]
                }), (0,
                d.jsx)(function() {
                    return (0,
                    d.jsxs)("footer", {
                        className: "flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg",
                        children: [(0,
                        d.jsxs)("div", {
                            className: "w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start",
                            children: [h.columns.map(function(a, b) {
                                return (0,
                                d.jsxs)("div", {
                                    className: "text-left mb-5 sm:mb-0",
                                    children: [(0,
                                    d.jsx)("h4", {
                                        className: "uppercase text-fun-gray text-sm font-bold",
                                        children: a.title
                                    }), (0,
                                    d.jsx)("div", {
                                        children: a.links.map(function(a, b) {
                                            return (0,
                                            d.jsx)("div", {
                                                className: "my-4",
                                                children: a.leavesWebsite ? (0,
                                                d.jsxs)("a", {
                                                    href: a.link,
                                                    target: "_blank",
                                                    className: "items-center flex",
                                                    children: [a.icon && (0,
                                                    d.jsx)("span", {
                                                        className: "pr-2 -mb-1",
                                                        children: (0,
                                                        d.jsx)(i.default, {
                                                            src: a.icon,
                                                            width: 20,
                                                            height: 20
                                                        })
                                                    }), a.name]
                                                }) : (0,
                                                d.jsx)(e.default, {
                                                    href: a.link,
                                                    children: a.name
                                                })
                                            }, b)
                                        })
                                    })]
                                }, b)
                            }), (0,
                            d.jsxs)("div", {
                                className: "text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0",
                                children: [(0,
                                d.jsx)("h4", {
                                    className: "uppercase text-fun-gray text-sm font-bold",
                                    children: "Support My Work"
                                }), (0,
                                d.jsxs)("div", {
                                    className: "space-y-2 mt-4 w-full flex items-center sm:items-start flex-col",
                                    children: ["" !== h.support.buymeacoffee && (0,
                                    d.jsx)("div", {
                                        children: (0,
                                        d.jsx)("a", {
                                            href: "https://buymeacoffee.com/".concat(h.support.buymeacoffee),
                                            target: "_blank",
                                            children: (0,
                                            d.jsx)("img", {
                                                src: "/static/misc/buy-me-a-coffee.svg",
                                                className: "h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                                            })
                                        })
                                    }), "" !== h.support.paypal && (0,
                                    d.jsx)("div", {
                                        children: (0,
                                        d.jsx)("a", {
                                            href: "https://paypal.me/".concat(h.support.paypal),
                                            target: "_blank",
                                            children: (0,
                                            d.jsx)("img", {
                                                src: "/static/misc/paypal.svg",
                                                className: "h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                                            })
                                        })
                                    }), (0,
                                    d.jsx)("p", {
                                        className: "text-fun-gray text-xs pt-1",
                                        children: h.support.message
                                    })]
                                })]
                            })]
                        }), (0,
                        d.jsx)("div", {
                            className: "max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark",
                            children: (0,
                            d.jsxs)("p", {
                                className: "flex flex-col items-center justify-center ",
                                children: [(0,
                                d.jsxs)("div", {
                                    className: "inline-flex items-center uppercase text-xs font-bold tracking-widest",
                                    children: ["Made with", " ", (0,
                                    d.jsxs)("div", {
                                        className: "space-x-2 inline-flex items-center -mt-1 ml-3",
                                        children: [(0,
                                        d.jsxs)("span", {
                                            children: [(0,
                                            d.jsx)("img", {
                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                                                width: "26",
                                                title: "React"
                                            }), (0,
                                            d.jsx)("span", {
                                                className: "sr-only",
                                                children: "React"
                                            })]
                                        }), (0,
                                        d.jsxs)("span", {
                                            children: [(0,
                                            d.jsx)("img", {
                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
                                                width: "40",
                                                className: "invert",
                                                title: "NextJS"
                                            }), (0,
                                            d.jsx)("span", {
                                                className: "sr-only",
                                                children: "NextJS"
                                            })]
                                        }), (0,
                                        d.jsxs)("span", {
                                            children: [(0,
                                            d.jsx)("img", {
                                                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                                                width: "26",
                                                title: "TailwindCSS"
                                            }), (0,
                                            d.jsx)("span", {
                                                className: "sr-only",
                                                children: "TailwindCSS"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                d.jsxs)("div", {
                                    className: "mt-2 text-xs ",
                                    children: ["Made by", " ", (0,
                                    d.jsx)("a", {
                                        href: "mailto:contact@braydentw.io",
                                        className: "text-fun-gray-light font-medium",
                                        children: "Brayden Wright"
                                    }), ". All rights reserved."]
                                })]
                            })
                        }), (0,
                        d.jsx)("div", {
                            className: "mt-8 text-center sm:text-right sm:-mt-12",
                            children: (0,
                            d.jsxs)("a", {
                                className: "w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50",
                                href: "https://github.com/braydentw/braydentw.io",
                                target: "_blank",
                                rel: "nooreferrer",
                                children: [(0,
                                d.jsx)(i.default, {
                                    src: "/static/icons/github.svg",
                                    width: 16,
                                    height: 16,
                                    alt: "Github Icon"
                                }), (0,
                                d.jsx)("span", {
                                    className: "ml-2",
                                    children: "View Source Code "
                                })]
                            })
                        })]
                    })
                }, {})]
            })
        }
    }
}])
