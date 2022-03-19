! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 14)
}([function(e, t, n) {
    "use strict";
    var i = n(4);
    t.a = async function(e) {
        const t = Object.keys(e),
            n = await Object(i.a)(t);
        return {
            ...e,
            ...n
        }
    }
}, function(e, t, n) {
    "use strict";
    t.a = function(e, ...t) {
        for (let n = 0; n < t.length; n++)
            if (void 0 === (e = e[t[n]])) return;
        return e
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        if (e.hasOwnProperty(t)) return e[t];
        throw `${t} missing on ${JSON.stringify(e)}`
    }
    n.d(t, "a", function() {
        return i
    })
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return currentUserId
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return currentUserScreenName
    });
    var _lib_dig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        _lib_find_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
    const scripts = document.querySelectorAll("script");
    scripts.forEach(script => {
        script.innerHTML.includes("__INITIAL_STATE__") && eval(script.innerHTML)
    });
    const session = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(window, "__INITIAL_STATE__", "session"),
        users = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(window, "__INITIAL_STATE__", "entities", "users", "entities"),
        currentUserId = () => Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(session, "user_id");

    function currentUserScreenName() {
        const e = users ? Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(users, currentUserId()) : Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(session, "user");
        return Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(e, "screen_name")
    }
}, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return new Promise(n => {
            const i = {};
            i[e] = t, chrome.storage.sync.set(i, () => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError.message), chrome.storage.local.set(i, () => n())) : (chrome.storage.local.remove(e), n())
            })
        })
    }

    function o(e) {
        return new Promise(t => {
            chrome.storage.sync.get(e, n => {
                chrome.storage.local.get(e, e => {
                    const i = {
                        ...n,
                        ...e
                    };
                    t(i)
                })
            })
        })
    }
    n.d(t, "b", function() {
        return i
    }), n.d(t, "a", function() {
        return o
    })
}, function(e, t, n) {
    "use strict";

    function i() {
        return new Promise(e => {
            chrome.storage.sync.get(["proActivationKey", "proExpiresAt"], t => e(t))
        })
    }

    function o(e) {
        return void 0 !== e && e.proExpiresAt >= Date.now()
    }
    n.d(t, "a", function() {
        return i
    }), n.d(t, "b", function() {
        return o
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return o
    }), n.d(t, "a", function() {
        return a
    });
    var i = n(4);
    const o = "autopilotActions";
    async function a() {
        return (await Object(i.a)([o]))[o]
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(0);
    const o = {
        autopilotPauseAfterActionMax: "",
        autopilotPauseAfterActionMin: "",
        autopilotRepeatAfter: 60,
        autopilotRepeatAfterMax: 60
    };

    function a() {
        return Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0);
    const o = {
        likeMaxFollowers: "",
        likeMaxFollowersFollowingRatio: "",
        likeMaxFollowing: "",
        likeMaxTweetLikes: "",
        likeMinFollowers: "",
        likeMinFollowing: "",
        likeMinFollowersFollowingRatio: "",
        likeMinTweetLikes: "",
        likeIntervalMax: 8,
        likeIntervalMin: 4,
        likeLanguageWhitelist: "",
        likeLimit: 1e3,
        likePauseWhenUnableToLike: 10,
        likeSkipFollowed: !1,
        likeSkipReplies: !1,
        likeSkipRetweets: !1,
        likeSkipRetweetsWithComment: !1,
        likeSkipLikedXTweetsFromUser: "",
        likeTweetTextBlacklist: ""
    };
    t.a = {
        all: () => Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0);
    const o = {
        retweetIntervalMax: 8,
        retweetIntervalMin: 4,
        retweetLanguageWhitelist: "",
        retweetLimit: 1e3,
        retweetPauseWhenUnableToRetweet: 10,
        retweetSkipFollowed: !1,
        retweetSkipReplies: !1,
        retweetSkipRetweets: !1,
        retweetSkipRetweetsWithComment: !1,
        retweetTweetTextBlacklist: ""
    };
    t.a = {
        all: () => Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0);
    const o = {
        followBlacklist: "@username1,@username2",
        followBioBlacklist: "",
        followBioRequired: !1,
        followBioWhitelist: "",
        followDailyLimit: "",
        followIntervalMax: 8,
        followIntervalMin: 4,
        followLimit: 400,
        followMaxFollowers: "",
        followMaxFollowersFollowingRatio: "",
        followMaxFollowing: "",
        followMinFollowers: "",
        followMinFollowing: "",
        followMinFollowersFollowingRatio: "",
        followPauseAfterSkipMax: "",
        followPauseAfterSkipMin: "",
        followPauseWhenTwitterLimitExceeded: 5,
        followProfileImageRequired: !1,
        followProtectedRequired: !1,
        followSkipFollowed: !0,
        followSkipFollower: !1,
        followSkipProtected: !1,
        followSkipVerified: !1,
        followTweetLanguageWhitelist: ""
    };
    t.a = {
        all: () => Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(0);
    const o = {
        unfollowBlacklist: "@username1,@username2",
        unfollowBioBlacklist: "",
        unfollowFollowersLessThan: "",
        unfollowFollowersGreaterThan: "",
        unfollowFollowingLessThan: "",
        unfollowFollowingGreaterThan: "",
        unfollowIntervalMax: 8,
        unfollowIntervalMin: 4,
        unfollowLimit: "",
        unfollowMassFollowedRequired: !1,
        unfollowMinDaysFollowed: 2,
        unfollowPauseAfterSkipMax: "",
        unfollowPauseAfterSkipMin: "",
        unfollowSkipFollower: !0,
        unfollowSkipVerified: !1
    };
    t.a = {
        all: () => Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(0);
    const o = {
        unlikeIntervalMax: 8,
        unlikeIntervalMin: 4,
        unlikeLimit: "",
        unlikeMassLikedRequired: !1,
        unlikeMinDaysSinceLike: 2
    };

    function a() {
        return Object(i.a)(o)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(0);
    const o = {
        unretweetIntervalMax: 8,
        unretweetIntervalMin: 4,
        unretweetLimit: "",
        unretweetMassRetweetedRequired: !1,
        unretweetMinDaysSinceRetweet: 2
    };

    function a() {
        return Object(i.a)(o)
    }
}, function(e, t, n) {
    n(18), e.exports = n(15)
}, function(e, t, n) {}, , , function(e, t, n) {
    "use strict";

    function i(e) {
        return new Promise(t => {
            console.log(`Sleeping ${e} ms ...`), setTimeout(() => t(), e)
        })
    }
    n.r(t);
    const o = "SuperpowersForTwitterSuspendedAutopilotActionTypes";
    const a = () => {
        const e = sessionStorage.getItem(o);
        return "string" != typeof e ? [] : JSON.parse(e)
    };

    function r() {
        if ("object" != typeof ii) return;
        const e = a().concat(ii.type);
        sessionStorage.setItem(o, JSON.stringify(e))
    }
    var s = function(e, t) {
        t = null == t ? 1 : t;
        const n = null == e ? 0 : e.length;
        if (!n || t < 1) return [];
        t = t > n ? n : t;
        let i = -1;
        const o = n - 1,
            a = [...e];
        for (; ++i < t;) {
            const e = i + Math.floor(Math.random() * (o - i + 1)),
                t = a[e];
            a[e] = a[i], a[i] = t
        }
        return a.slice(0, t)
    };
    const l = [{
            title: "Superpowers for LinkedIn",
            text: "Mass connect, mass withdraw invitation and mass view profile on LinkedIn with powerful options.",
            action: {
                text: "Learn more",
                url: "https://www.clemensteichmann.com/superpowers-for-linkedin"
            }
        }, {
            title: "Superpowers for Instagram",
            text: "Mass follow, mass unfollow and mass like on Instagram with powerful options.",
            action: {
                text: "Learn more",
                url: "https://www.clemensteichmann.com/superpowers-for-instagram"
            }
        }, {
            title: "Superpowers for Twitter PRO",
            text: "Unlimited and ad-free",
            action: {
                text: "Get PRO",
                url: "https://www.clemensteichmann.com/superpowers-for-twitter/pro"
            }
        }, {
            title: "Fast Inventory System",
            text: "A well-organized home inventory makes you happy. You only have useful things and are aware of them.",
            action: {
                text: "Learn more",
                url: "https://fastinventorysystem.com/"
            }
        }],
        c = ({
            text: e,
            title: t,
            action: n
        }) => `\n    <div class="sft-ad animated fadeInRight">\n      <div class="sft-ad__title">${t}</div>\n      <div class="sft-ad__text">${e}</div>\n      <a class="sft-ad__action" href="${n.url}" target="_blank">${n.text}</a>\n    </div>\n  `,
        u = document.createElement("div");

    function f() {
        u.style.display = "none"
    }
    u.classList.add("sft-ads"), document.body.appendChild(u);
    const w = e => {
        if (e < 60) return String(e);
        const t = e / 60 / 60,
            n = Math.floor(t),
            i = 60 * (t - n),
            o = Math.floor(i),
            a = 60 * (i - o),
            r = Math.round(a);
        let s;
        return n > 0 ? (s = String(n), s += ":", s += String(o).padStart(2, 0)) : s = String(o), s += ":", s += String(r).padStart(2, 0)
    };
    const d = document.createElement("div");
    let p;

    function m() {
        p = "follow"
    }

    function y() {
        p = "unfollow"
    }

    function b() {
        p = "like"
    }

    function g() {
        p = "retweet"
    }

    function k() {
        p = "unretweet"
    }

    function _() {
        p = "unlike"
    }

    function h(e) {
        d.innerHTML = `Continuing autopilot in ${function(e){const t=e%1e3;let n=w((e-t)/1e3);return n+=".",n+=String(t).padStart(3,0)}(e)} ...`
    }
    d.classList.add("sft-status-bar__label");
    var F = n(3);

    function x() {
        return location.pathname.toUpperCase() == `/${Object(F.b)()}/following`.toUpperCase()
    }

    function v() {
        return location.pathname.toUpperCase() == `/${Object(F.b)()}/likes`.toUpperCase()
    }

    function R() {
        return location.pathname.toUpperCase() == `/${Object(F.b)()}`.toUpperCase()
    }

    function L() {
        return location.pathname.includes("/lists/")
    }
    var S = n(1),
        j = n(2);

    function O(e) {
        const t = [];
        return e.timeline.instructions[0].addEntries.entries.forEach(n => {
            const i = Object(S.a)(n, "content", "item", "content", "tweet");
            if (void 0 === i) return;
            if (i.promotedMetadata) return;
            if (void 0 === i.id) return;
            const o = e.globalObjects.tweets[i.id];
            if (void 0 === o) return;
            const a = Object(j.a)(o, "user_id_str");
            o.user = Object(j.a)(e.globalObjects.users, a), t.push(o)
        }), t
    }

    function T(e) {
        const t = Object(S.a)(e, "data", "list", "tweets_timeline", "timeline", "instructions") || Object(S.a)(e, "data", "user", "result", "timeline", "timeline", "instructions") || Object(S.a)(e, "data", "user", "result", "timeline_v2", "timeline", "instructions");
        if (!t) return;
        const n = [];
        return t.forEach(e => {
            "TimelineAddEntries" == e.type && e.entries.forEach(e => {
                const t = Object(S.a)(e, "content", "itemContent", "tweet_results", "result") || Object(S.a)(e, "content", "itemContent", "tweet");
                if ("object" != typeof t) return;
                if ("object" != typeof t.legacy) return;
                const i = Object(S.a)(t, "core", "user") || Object(S.a)(t, "core", "user_results", "result");
                "object" == typeof i && "object" == typeof i.legacy && (t.legacy.id_str = t.rest_id, t.legacy.user = i.legacy, t.legacy.user.id_str = i.rest_id, t.legacy.retweeted_status_id_str = Object(S.a)(t.legacy, "retweeted_status_result", "result", "rest_id") || Object(S.a)(t.legacy, "retweeted_status", "rest_id"), n.push(t.legacy))
            })
        }), n
    }
    const E = (e, t, n, i) => {
        const o = e();
        if (o) n(o);
        else {
            if ("number" == typeof t) {
                if (t <= 0) return void i("time limit exceeded");
                t -= 100
            }
            setTimeout(() => E(e, t, n, i), 100)
        }
    };
    var M = function(e, t) {
        return new Promise((n, i) => {
            E(e, t, n, i)
        })
    };
    let I;
    const $ = async ({
        fromIndex: e = 0,
        getList: t,
        getFocusableEl: n
    }) => {
        if (!Tn) {
            Dn(), console.log("Scan list for usable index ...");
            for (let i = e; i < t().length; i++) {
                if (n(t()[i])) return i
            }
            return window.scrollBy(0, 300), await i(500), await $({
                fromIndex: e,
                getList: t,
                getFocusableEl: n
            })
        }
    }, A = async ({
        callback: e,
        getList: t,
        getFocusableEl: n,
        index: i
    }) => {
        if (Tn) return;
        if (Dn(), En) return void await C({
            callback: e,
            getList: t,
            getFocusableEl: n,
            index: i,
            milliseconds: 500
        });
        if (void 0 === t()) return;
        const o = t()[i];
        if (void 0 === o) await C({
            callback: e,
            getList: t,
            getFocusableEl: n,
            index: i,
            milliseconds: 100
        });
        else {
            try {
                o.focusableEl = await M(() => n(o), 2e3), I = window.scrollY
            } catch (o) {
                console.log(o), I && window.scrollTo(0, I);
                const a = await $({
                    fromIndex: i + 1,
                    getList: t,
                    getFocusableEl: n
                });
                return void await A({
                    callback: e,
                    getList: t,
                    getFocusableEl: n,
                    index: a
                })
            }
            o.focusableEl.focus(), await e(o, i), await A({
                callback: e,
                getList: t,
                getFocusableEl: n,
                index: i + 1
            })
        }
    }, C = async ({
        callback: e,
        getList: t,
        getFocusableEl: n,
        index: o,
        milliseconds: a
    }) => {
        await i(a), await A({
            callback: e,
            getList: t,
            getFocusableEl: n,
            index: o
        })
    };
    async function D({
        callback: e,
        getFocusableEl: t,
        getList: n
    }) {
        I = void 0;
        const i = await $({
            getList: n,
            getFocusableEl: t
        });
        await A({
            callback: e,
            getList: n,
            getFocusableEl: t,
            index: i
        })
    }

    function P(e) {
        return e.followers_count
    }

    function U(e) {
        return 1 == e.followed_by
    }

    function q(e) {
        const t = e.followers_count;
        if ("number" != typeof t) return;
        const n = e.friends_count;
        return "number" == typeof n ? t / n : void 0
    }

    function B(e) {
        return e.friends_count
    }

    function W(e) {
        return Object(j.a)(e, "id_str")
    }

    function G(e) {
        return 1 == e.protected
    }

    function N(e) {
        return 1 == e.verified
    }

    function X(e) {
        return Object(j.a)(e, "description")
    }

    function H(e) {
        return `/${Object(j.a)(e,"screen_name")}`
    }
    const K = e => Object(j.a)(e, "id_str");

    function V(e) {
        return Object(j.a)(e, "lang")
    }

    function Q(e) {
        return Object(j.a)(e, "favorite_count")
    }

    function J(e) {
        return 1 == e.favorited
    }

    function Y(e) {
        return "string" == typeof e.in_reply_to_status_id_str
    }

    function z(e) {
        return "string" == typeof e.retweeted_status_id_str
    }

    function Z(e) {
        return "string" == typeof e.quoted_status_id_str
    }

    function ee(e) {
        return 1 == e.retweeted
    }

    function te(e) {
        return e.retweeted_status_id_str || K(e)
    }

    function ne(e) {
        return e.full_text
    }
    const ie = e => Object(j.a)(e, "user");

    function oe(e) {
        return W(ie(e))
    }

    function ae(e) {
        const t = `[data-testid="tweet"] a[href$="/status/${te(e)}"][role="link"]`;
        return console.log(`Querying tweet link with ${t}`), document.querySelector(t)
    }

    function re(e) {
        return e.focusableEl.closest('[data-testid="tweet"]').lastElementChild
    }
    const se = document.createElement("script");
    se.type = "text/javascript", se.innerHTML = "\n(function() {\n  var XHR = XMLHttpRequest.prototype\n  var open = XHR.open\n  XHR.open = function(method, url) {\n    this.url = url\n    this.origin = location.href.toUpperCase()\n    return open.apply(this, arguments)\n  }\n  var send = XHR.send\n  XHR.send = function(body) {\n    this.addEventListener('load', function() {\n      window.postMessage({body: body, origin: this.origin, response: this.response, status: this.status, url: this.url}, '*')\n    })\n    return send.apply(this, arguments)\n  }\n})()\n", document.head.prepend(se);
    const le = {};

    function ce(e, t) {
        le[e] = le[e] || [], le[e].push(t)
    }
    window.addEventListener("message", e => {
        e.data.origin && "string" == typeof e.data.response && e.data.url && e.data.status && (({
            body: e,
            origin: t,
            response: n,
            status: i,
            url: o
        }) => {
            Object.keys(le).forEach(a => {
                if (!o.includes(a)) return;
                let r = {};
                if (n.length > 0) try {
                    r = JSON.parse(n)
                } catch (e) {
                    console.error(e)
                }
                le[a].forEach(n => n({
                    body: e,
                    origin: t,
                    parsedResponse: r,
                    status: i,
                    url: o
                }))
            })
        })(e.data)
    });
    const ue = {},
        fe = (e, t) => {
            !1 !== Array.isArray(t) && 0 !== t.length && (ue[e] ? ue[e] = ue[e].concat(t) : ue[e] = t)
        };
    ce("2/timeline/favorites/", ({
        origin: e,
        parsedResponse: t
    }) => fe(e, O(t))), ce("/Likes", ({
        origin: e,
        parsedResponse: t
    }) => fe(e, T(t)));
    const we = () => ue[location.href.toUpperCase()];
    async function de(e) {
        await D({
            callback: e,
            getFocusableEl: ae,
            getList: we
        })
    }

    function pe(e) {
        const t = `[data-testid="${e.id_str}-follow"]`;
        return console.log(`Querying follow button of ${e.screen_name} with ${t}`), document.querySelector(t)
    }

    function me(e) {
        const t = `[aria-modal="true"] [data-testid="UserCell"] a[href="${H(e)}"][role="link"]:not([dir])`;
        return console.log(`Querying profile link of ${e.screen_name} with ${t}`), document.querySelector(t)
    }

    function ye(e) {
        return e.focusableEl.closest('[data-testid="UserCell"]')
    }
    const be = {},
        ge = (e, t) => {
            t && 0 != t.length && (be[e] ? be[e] = be[e].concat(t) : be[e] = t)
        },
        ke = e => {
            const t = [];
            return e.timeline.instructions[0].addEntries.entries.forEach(n => {
                const i = Object(S.a)(n, "content", "item", "content", "user", "id");
                if (i) {
                    const n = e.globalObjects.users[i];
                    n && t.push(n)
                }
            }), t
        },
        _e = (e, t) => {
            const n = Object(S.a)(t, "data", "user", "followers_timeline", "timeline", "instructions") || Object(S.a)(t, "data", "favoriters_timeline", "timeline", "instructions") || Object(S.a)(t, "data", "user", "following_timeline", "timeline", "instructions") || Object(S.a)(t, "data", "user", "result", "timeline", "timeline", "instructions") || Object(S.a)(t, "data", "list", "members_timeline", "timeline", "instructions") || Object(S.a)(t, "data", "list", "subscribers_timeline", "timeline", "instructions") || Object(S.a)(t, "data", "retweeters_timeline", "timeline", "instructions");
            if (!n) return;
            const i = [];
            return n.forEach(t => {
                "TimelineAddEntries" == t.type ? t.entries.forEach(e => {
                    const t = Object(S.a)(e, "content", "itemContent", "user") || Object(S.a)(e, "content", "itemContent", "user_results", "result");
                    "object" == typeof t && "object" == typeof t.legacy && (t.legacy.id_str = t.rest_id, i.push(t.legacy))
                }) : "TimelineClearCache" == t.type && (be[e] = void 0)
            }), i
        };
    ce("/lists/members.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, t.users)), ce("/lists/subscribers.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, t.users)), ce("followers/list.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, t.users)), ce("friends/list.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, t.users)), ce("timeline/liked_by.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, ke(t))), ce("timeline/retweeted_by.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, ke(t))), ce("search/adaptive.json", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, ke(t))), ce("/Favoriters", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/Followers", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/Following", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/ListMembers", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/ListSubscribers", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/Retweeters", ({
        origin: e,
        parsedResponse: t
    }) => ge(e, _e(e, t))), ce("/api/2/people_discovery/modules_urt.json", ({
        origin: e,
        parsedResponse: t
    }) => {
        /\/I\/CONNECT_PEOPLE|\/FOLLOWERS|\/FOLLOWING|\/SUGGESTED/.test(e) && (e = e.replace(/FOLLOWERS|FOLLOWING/g, "SUGGESTED"), ge(e, ((e, t) => {
            const n = Object(S.a)(t, "timeline", "instructions");
            if (!1 === Array.isArray(n)) return;
            const i = [];
            return n.forEach(e => {
                const n = Object(S.a)(e, "addEntries", "entries");
                !1 !== Array.isArray(n) && n.forEach(e => {
                    const n = Object(S.a)(e, "content", "timelineModule", "items");
                    !1 !== Array.isArray(n) && n.forEach(e => {
                        const n = Object(S.a)(e, "item", "content", "user", "id");
                        if (n) {
                            const e = t.globalObjects.users[n];
                            e && i.push(e)
                        }
                    })
                })
            }), i
        })(0, t)))
    });
    const he = () => be[location.href.toUpperCase()];
    async function Fe(e, t = function(e) {
        const t = `[data-testid="UserCell"] a[href="${H(e)}"][role="link"]`;
        return console.log(`Querying profile link of ${e.screen_name} with ${t}`), document.querySelector(t)
    }) {
        await D({
            callback: e,
            getFocusableEl: t,
            getList: he
        })
    }
    const xe = {},
        ve = (e, t) => {
            !1 !== Array.isArray(t) && 0 !== t.length && (Gn() && (e = hn.toUpperCase()), xe[e] ? xe[e] = xe[e].concat(t) : xe[e] = t)
        };
    ce("search/adaptive.json", ({
        origin: e,
        parsedResponse: t
    }) => ve(e, O(t))), ce("/timeline/list.json", ({
        origin: e,
        parsedResponse: t
    }) => ve(e, O(t))), ce("/ListLatestTweetsTimeline", ({
        origin: e,
        parsedResponse: t
    }) => ve(e, T(t)));
    const Re = () => xe[location.href.toUpperCase()];
    async function Le(e) {
        await D({
            callback: e,
            getFocusableEl: ae,
            getList: Re
        })
    }
    const Se = {};
    ce("/2/timeline/home.json", ({
        origin: e,
        parsedResponse: t
    }) => ((e, t) => {
        !1 !== Array.isArray(t) && 0 !== t.length && (Gn() && (e = hn.toUpperCase()), Se[e] ? Se[e] = Se[e].concat(t) : Se[e] = t)
    })(e, O(t)));
    const je = () => Se[location.href.toUpperCase()];
    async function Oe(e) {
        await D({
            callback: e,
            getFocusableEl: ae,
            getList: je
        })
    }
    const Te = {},
        Ee = (e, t) => {
            !1 !== Array.isArray(t) && 0 !== t.length && (Te[e] ? Te[e] = Te[e].concat(t) : Te[e] = t)
        };
    ce("2/timeline/profile/", ({
        origin: e,
        parsedResponse: t
    }) => Ee(e, O(t))), ce("/UserTweets", ({
        origin: e,
        parsedResponse: t
    }) => Ee(e, T(t)));
    const Me = () => Te[location.href.toUpperCase()];
    async function Ie(e) {
        await D({
            callback: e,
            getFocusableEl: ae,
            getList: Me
        })
    }
    const $e = document.createElement("div");
    $e.innerText = "Autopilot", $e.setAttribute("role", "button"), $e.classList.add("sft-button", "sft-button--autopilot");
    const Ae = () => {
        $e.style.display = "none"
    };
    async function Ce() {
        "/home" == location.pathname && !he() && await async function() {
            return "object" == typeof await Vn()
        }() ? $e.style.display = "initial" : Ae()
    }
    $e.addEventListener("click", () => {
        Ae(), ri()
    });
    const De = window.indexedDB.open("MassFollowForTwitter", 8);
    let Pe;

    function Ue(e, t) {
        Pe.transaction([e], "readwrite").objectStore(e).add(t)
    }

    function qe(e, t) {
        return new Promise(n => {
            if (!Pe.objectStoreNames.contains(e)) return void n(void 0);
            const i = Pe.transaction([e]).objectStore(e).get(t);
            i.onsuccess = (() => {
                n(i.result)
            })
        })
    }
    De.onupgradeneeded = (e => {
        Pe = e.target.result, e.oldVersion < 3 && Pe.createObjectStore("v2FollowRecord", {
            keyPath: ["creatorId", "userId"]
        }), e.oldVersion < 4 && Pe.createObjectStore("retweetRecord", {
            keyPath: ["creatorId", "retweetedStatusId"]
        }), e.oldVersion < 5 && Pe.createObjectStore("likeRecord", {
            keyPath: ["creatorId", "tweetId"]
        }), e.oldVersion < 6 && De.transaction.objectStore("likeRecord").createIndex("tweetUserId", "tweetUserId"), e.oldVersion < 8 && De.transaction.objectStore("v2FollowRecord").createIndex("createdAt", ["creatorId", "createdAt"])
    }), De.onerror = (e => {
        console.log(e)
    }), De.onsuccess = (e => {
        Pe = e.target.result
    });
    const Be = "likeRecord";

    function We(e) {
        return function(e, t, n) {
            return new Promise(i => {
                const o = Pe.transaction([e], "readonly").objectStore(e).index(t).count(IDBKeyRange.only(n));
                o.onsuccess = (() => {
                    i(o.result)
                })
            })
        }(Be, "tweetUserId", oe(e))
    }
    const Ge = e => 0 === e.trim().length;

    function Ne(e) {
        if (!Ge(e)) return e.split(",").map(e => e.trim())
    }

    function Xe(e, t) {
        return t.includes(V(e))
    }
    var He = function(e) {
        return e[Math.floor(Math.random() * e.length)]
    };

    function Ke(e, t) {
        let n = 1e3 * parseFloat(e);
        const i = 1e3 * parseFloat(t),
            o = [n];
        for (; n < i;) n += 100, o.push(n);
        return o
    }

    function Ve(e) {
        return He(e)
    }
    let Qe;
    const Je = () => {
            try {
                Qe.scrollIntoView({
                    block: "center"
                })
            } catch (e) {
                console.error(e)
            }
        },
        Ye = (e, t) => {
            const n = document.createElement("div");
            n.classList.add("sft-notification", `sft-notification--${t}`), n.textContent = e;
            try {
                Qe.appendChild(n)
            } catch (e) {
                console.error(e)
            }
            Je()
        };

    function ze(e) {
        console.log(e), Ye(e, "success")
    }

    function Ze(e) {
        console.log(e), Ye(e, "warning")
    }

    function et(e) {
        Qe = e
    }

    function tt(e, t) {
        et(re(e)), Ze(t)
    }

    function nt(e, t) {
        et(re(e)), ze(t)
    }
    const it = "v2FollowRecord";

    function ot(e) {
        return t = it, n = [Object(F.a)(), e], void Pe.transaction([t], "readwrite").objectStore(t).delete(n);
        var t, n
    }

    function at(e) {
        return qe(it, [Object(F.a)(), W(e)])
    }

    function rt(e) {
        return qe("followRecord", e.id_str)
    }

    function st(e) {
        if (0 === e.length) return;
        const t = e.split(",").map(e => e.trim()).filter(e => e.length);
        return new RegExp(t.join("|"), "i")
    }
    var lt = n(8);
    const ct = async () => {
        const e = await lt.a.all();
        return e.languageWhitelist = Ne(e.likeLanguageWhitelist), e.intervalDurationRange = Ke(e.likeIntervalMin, e.likeIntervalMax), e.skipLikedXTweetsFromUser = parseInt(e.likeSkipLikedXTweetsFromUser), e.tweetTextBlacklist = st(e.likeTweetTextBlacklist), e.maxFollowing = parseInt(e.likeMaxFollowing), e.minFollowing = parseInt(e.likeMinFollowing), e.maxFollowers = parseInt(e.likeMaxFollowers), e.minFollowers = parseInt(e.likeMinFollowers), e.maxFollowersFollowingRatio = parseFloat(e.likeMaxFollowersFollowingRatio), e.minFollowersFollowingRatio = parseFloat(e.likeMinFollowersFollowingRatio), e.maxTweetLikes = parseInt(e.likeMaxTweetLikes), e.minTweetLikes = parseInt(e.likeMinTweetLikes), e
    }, ut = async (e, t) => {
        const n = await async function(e, t) {
            if (J(e)) return "already liked";
            if (t.minTweetLikes) {
                const n = Q(e);
                if (n < t.minTweetLikes) return `${n} Tweet likes, but ${t.minTweetLikes} minimum required`
            }
            if (t.maxTweetLikes) {
                const n = Q(e);
                if (n > t.maxTweetLikes) return `${n} Tweet likes, but ${t.maxTweetLikes} maximum required`
            }
            if (t.languageWhitelist && !Xe(e, t.languageWhitelist)) return `language "${V(e)}" not whitelisted`;
            if (t.tweetTextBlacklist instanceof RegExp && ne(e)) {
                const n = ne(e).match(t.tweetTextBlacklist);
                if (n) return `${n.join()} found in Tweet text, but is blacklisted`
            }
            if (t.likeSkipReplies && Y(e)) return "is reply";
            if (t.likeSkipRetweets && z(e)) return "is Retweet";
            if (t.likeSkipRetweetsWithComment && Z(e)) return "is Retweet with comment";
            if (t.minFollowing) {
                const n = B(ie(e));
                if ("number" == typeof n && n < t.minFollowing) return `${n} following, but ${t.minFollowing} minimum required`
            }
            if (t.maxFollowing) {
                const n = B(ie(e));
                if ("number" == typeof n && n > t.maxFollowing) return `${n} following, but ${t.maxFollowing} maximum required`
            }
            if (t.minFollowers) {
                const n = P(ie(e));
                if ("number" == typeof n && n < t.minFollowers) return `${n} followers, but ${t.minFollowers} minimum required`
            }
            if (t.maxFollowers) {
                const n = P(ie(e));
                if ("number" == typeof n && n > t.maxFollowers) return `${n} followers, but ${t.maxFollowers} maximum required`
            }
            if (t.minFollowersFollowingRatio) {
                const n = q(ie(e));
                if (n && n < t.minFollowersFollowingRatio) return `${n.toFixed(2)} followers/following ratio, but ${t.minFollowersFollowingRatio} minimum required`
            }
            if (t.maxFollowersFollowingRatio) {
                const n = q(ie(e));
                if (n && n >= t.maxFollowersFollowingRatio) return `${n.toFixed(2)} followers/following ratio, but ${t.maxFollowersFollowingRatio} maximum required`
            }
            if (t.likeSkipFollowed) {
                const t = ie(e);
                if (await at(t)) return "already followed once";
                if (await rt(t)) return "already followed once"
            }
            if (t.skipLikedXTweetsFromUser) {
                const n = await We(e);
                if ("number" == typeof n && n >= t.skipLikedXTweetsFromUser) return `already liked ${n} Tweet(s) from user`
            }
            return !0
        }(e, t);
        if (1 == n) {
            const n = function(e) {
                return e.focusableEl.closest('[data-testid="tweet"]').querySelector('[data-testid="like"]')
            }(e);
            if (!n) return !1;
            n.click(),
                function(e) {
                    const t = {
                        createdAt: Date.now(),
                        creatorId: Object(F.a)(),
                        tweetId: K(e),
                        tweetUserId: oe(e)
                    };
                    Ue(Be, t)
                }(e), Wn(), nt(e, "successfully liked");
            const i = Ve(t.intervalDurationRange);
            await Cn(i), Je()
        } else n && tt(e, n)
    };
    async function ft(e, t) {
        const n = await ct();
        await In(), n.likeLimit && qn(n.likeLimit), e && qn(e), t && An(t), Pn(n.likePauseWhenUnableToLike), Re() ? await Le(async e => {
            await ut(e, n)
        }) : je() ? (delete n.likeSkipFollowed, delete n.likeSkipLikedXTweetsFromUser, delete n.maxFollowing, delete n.minFollowing, delete n.maxFollowers, delete n.minFollowers, delete n.maxFollowersFollowingRatio, delete n.minFollowersFollowingRatio, await Oe(async e => {
            await ut(e, n)
        })) : we() ? await de(async e => {
            await ut(e, n)
        }) : Me() && (delete n.maxFollowing, delete n.minFollowing, delete n.maxFollowers, delete n.minFollowers, delete n.maxFollowersFollowingRatio, delete n.minFollowersFollowingRatio, await Ie(async e => {
            await ut(e, n)
        }))
    }
    const wt = document.createElement("div");
    wt.innerText = "Like all", wt.setAttribute("role", "button"), wt.classList.add("sft-button", "sft-button--like");
    const dt = () => {
        wt.style.display = "none"
    };
    wt.addEventListener("click", async () => {
        b(), Ae(), Et(), _t(), dt(), await ft()
    });
    const pt = "retweetRecord";
    var mt = n(9);
    const yt = async () => {
        const e = await mt.a.all();
        return e.languageWhitelist = Ne(e.retweetLanguageWhitelist), e.intervalDurationRange = Ke(e.retweetIntervalMin, e.retweetIntervalMax), e.tweetTextBlacklist = st(e.retweetTweetTextBlacklist), e
    }, bt = async (e, t) => {
        const n = await async function(e, t) {
            if (ee(e)) return "already retweeted";
            if (t.languageWhitelist && !Xe(e, t.languageWhitelist)) return `language "${V(e)}" not whitelisted`;
            if (t.tweetTextBlacklist instanceof RegExp && ne(e)) {
                const n = ne(e).match(t.tweetTextBlacklist);
                if (n) return `${n.join()} found in Tweet text, but is blacklisted`
            }
            if (t.retweetSkipFollowed) {
                const t = ie(e);
                if (await at(t)) return "already followed once";
                if (await rt(t)) return "already followed once"
            }
            return t.retweetSkipReplies && Y(e) ? "is reply" : t.retweetSkipRetweets && z(e) ? "is Retweet" : !t.retweetSkipRetweetsWithComment || !Z(e) || "is Retweet with comment"
        }(e, t);
        if (1 == n) {
            const n = function(e) {
                return e.focusableEl.closest('[data-testid="tweet"]').querySelector('[data-testid="retweet"]')
            }(e);
            if (!n) return !1;
            Bn("/compose/tweet"), n.click(), (await M(() => (() => document.querySelector('div[data-testid="retweetConfirm"]'))() || (() => document.querySelector('[aria-modal="true"] [data-testid="toolBar"] [data-testid="tweetButton"]'))(), 9999)).click(),
                function(e) {
                    const t = te(e),
                        n = {
                            createdAt: Date.now(),
                            creatorId: Object(F.a)(),
                            retweetedStatusId: t
                        };
                    Ue(pt, n)
                }(e), Wn(), nt(e, "successfully retweeted");
            const i = Ve(t.intervalDurationRange);
            await Cn(i), Je()
        } else n && tt(e, n)
    };
    async function gt(e, t) {
        const n = await yt();
        await In(), n.retweetLimit && qn(n.retweetLimit), e && qn(e), t && An(t), Pn(n.retweetPauseWhenUnableToRetweet), Re() ? await Le(async e => {
            await bt(e, n)
        }) : je() ? (delete n.retweetSkipFollowed, await Oe(async e => {
            await bt(e, n)
        })) : Me() && await Ie(async e => {
            await bt(e, n)
        })
    }
    const kt = document.createElement("div");
    kt.innerText = "Retweet all", kt.setAttribute("role", "button"), kt.classList.add("sft-button", "sft-button--retweet");
    const _t = () => {
        kt.style.display = "none"
    };

    function ht(e) {
        return e.split(",").map(e => e.trim().toUpperCase())
    }

    function Ft(e, t) {
        return t.includes(`@${Object(j.a)(e,"screen_name").toUpperCase()}`)
    }

    function xt(e) {
        ! function(e) {
            const t = {
                createdAt: Date.now(),
                creatorId: Object(F.a)(),
                userId: W(e)
            };
            Ue(it, t)
        }(e), Wn()
    }
    async function vt(e, t) {
        if (! function(e) {
                return Object(j.a)(e, "screen_name") == Object(F.b)()
            }(e) && function(e) {
                return 1 != e.following && 1 != e.follow_request_sent
            }(e)) {
            if (function(e) {
                    return 1 == e.blocked_by
                }(e)) return "is blocking you";
            if (t.followBioRequired && function(e) {
                    return "" === Object(j.a)(e, "description")
                }(e)) return "has no biography";
            if (t.followSkipVerified && N(e)) return "is verified";
            if (Ft(e, t.blacklist)) return "is blacklisted";
            if (t.followProfileImageRequired && function(e) {
                    return 1 == e.default_profile_image
                }(e)) return "has default profile image";
            if (t.followSkipProtected && G(e)) return "is protected";
            if (t.followProtectedRequired && !G(e)) return "is not protected";
            if (t.followSkipFollower && U(e)) return "is following you";
            if (t.minFollowing) {
                const n = B(e);
                if ("number" == typeof n && n < t.minFollowing) return `${n} following, but ${t.minFollowing} minimum required`
            }
            if (t.maxFollowing) {
                const n = B(e);
                if ("number" == typeof n && n > t.maxFollowing) return `${n} following, but ${t.maxFollowing} maximum required`
            }
            if (t.minFollowers) {
                const n = P(e);
                if ("number" == typeof n && n < t.minFollowers) return `${n} followers, but ${t.minFollowers} minimum required`
            }
            if (t.maxFollowers) {
                const n = P(e);
                if ("number" == typeof n && n > t.maxFollowers) return `${n} followers, but ${t.maxFollowers} maximum required`
            }
            if (t.minFollowersFollowingRatio) {
                const n = q(e);
                if (n && n < t.minFollowersFollowingRatio) return `${n.toFixed(2)} followers/following ratio, but ${t.minFollowersFollowingRatio} minimum required`
            }
            if (t.maxFollowersFollowingRatio) {
                const n = q(e);
                if (n && n >= t.maxFollowersFollowingRatio) return `${n.toFixed(2)} followers/following ratio, but ${t.maxFollowersFollowingRatio} maximum required`
            }
            if (t.bioBlacklist instanceof RegExp) {
                const n = X(e).match(t.bioBlacklist);
                if (n) return `${n.join()} found in bio, but is blacklisted`
            }
            if (t.bioWhitelist instanceof RegExp) {
                const n = X(e);
                if (!1 === t.bioWhitelist.test(n)) return "no whitelisted word found in bio"
            }
            if (t.followSkipFollowed) {
                if (await at(e)) return "already followed once";
                if (await rt(e)) return "already followed once"
            }
            return !0
        }
    }
    async function Rt(e, t) {
        let n;
        if (1 == (n = t.tweetLanguageWhitelist && !Xe(e, t.tweetLanguageWhitelist) ? `language "${V(e)}" not whitelisted` : await vt(e.user, t))) {
            let n;
            Bn(H(e.user)),
                function(e) {
                    const t = `a[href="${H(e.user)}"][role="link"]`;
                    return e.focusableEl.closest('[data-testid="tweet"]').querySelector(t)
                }(e).click();
            try {
                n = await M(() => pe(e.user), 2e3)
            } catch (e) {
                console.log(e)
            }
            if (n && n.click(), window.history.back(), await M(() => Nn()), e.focusableEl = await M(() => ae(e)), e.focusableEl.focus(), et(re(e)), !n) return Ze("follow button not found");
            xt(e.user), ze("successfully followed");
            const i = Ve(t.intervalDurationRange);
            await Cn(i)
        } else et(re(e)), n && (Ze(n), await Cn(500))
    }
    kt.addEventListener("click", async () => {
        g(), Et(), _t(), dt(), await gt()
    });
    const Lt = async e => {
        if (!Tn) {
            for (let t = e; t >= 0; t--) {
                const n = he()[t];
                if (n.focusableEl = me(n), n.focusableEl) {
                    if (n.focusableEl.scrollIntoView(), t === e) return;
                    break
                }
            }
            await Cn(40), await Lt(e)
        }
    };
    var St = n(10);
    const jt = async () => {
        const e = await St.a.all();
        return e.blacklist = ht(e.followBlacklist), e.bioBlacklist = st(e.followBioBlacklist), e.bioWhitelist = st(e.followBioWhitelist), e.tweetLanguageWhitelist = Ne(e.followTweetLanguageWhitelist), e.intervalDurationRange = Ke(e.followIntervalMin, e.followIntervalMax), e.maxFollowing = parseInt(e.followMaxFollowing), e.minFollowing = parseInt(e.followMinFollowing), e.maxFollowers = parseInt(e.followMaxFollowers), e.minFollowers = parseInt(e.followMinFollowers), e.maxFollowersFollowingRatio = parseFloat(e.followMaxFollowersFollowingRatio), e.minFollowersFollowingRatio = parseFloat(e.followMinFollowersFollowingRatio), e.followPauseAfterSkipMin && e.followPauseAfterSkipMax && (e.pauseAfterSkipRange = Ke(e.followPauseAfterSkipMin, e.followPauseAfterSkipMax)), e
    };
    async function Ot(e, t) {
        const n = await jt();
        var i;
        await In(), n.followLimit && qn(n.followLimit), e && qn(e), n.followDailyLimit && (i = await async function() {
                const e = Pe.transaction([it], "readonly").objectStore(it).index("createdAt"),
                    t = IDBKeyRange.bound([Object(F.a)(), Date.now() - 864e5], [Object(F.a)(), Date.now()]);
                let n = 0;
                return new Promise(i => {
                    e.openCursor(t).onsuccess = (e => {
                        const t = e.target.result;
                        t ? (n += 1, t.continue()) : i(n)
                    })
                })
            }(), vn = i,
            function(e) {
                vn >= (Fn = e) && (Tn = !0, r(), mn())
            }(n.followDailyLimit)), t && An(t), Pn(n.followPauseWhenTwitterLimitExceeded), L() && he() ? await async function(e) {
            await Fe(async (t, n) => {
                const i = await vt(t, e);
                if (1 == i) {
                    let i = pe(t);
                    if (i) i.click(), xt(t);
                    else {
                        Bn(H(t)), t.focusableEl.click();
                        try {
                            i = await M(() => pe(t), 4e3)
                        } catch (e) {
                            console.log(e)
                        }
                        i && (i.click(), xt(t)), window.history.back(), await M(() => Nn()), await Lt(n)
                    }
                    if (et(ye(t)), !i) return Ze("follow button not found");
                    ze("successfully followed");
                    const o = Ve(e.intervalDurationRange);
                    await Cn(o)
                } else et(ye(t)), i && (Ze(i), await Cn(500))
            }, me)
        }(n): Re() ? await async function(e) {
            await Le(async t => {
                await Rt(t, e)
            })
        }(n): we() ? await async function(e) {
            await de(async t => {
                await Rt(t, e)
            })
        }(n): await async function(e) {
            await Fe(async t => {
                const n = await vt(t, e);
                if (et(ye(t)), 1 == n) {
                    const n = pe(t);
                    if (!n) return Ze("follow button not found");
                    n.click(), xt(t), ze("successfully followed");
                    const i = Ve(e.intervalDurationRange);
                    await Cn(i)
                } else if (n && Ze(n), e.pauseAfterSkipRange) {
                    const t = Ve(e.pauseAfterSkipRange);
                    await Cn(t)
                }
            })
        }(n)
    }
    const Tt = document.createElement("div");
    Tt.innerText = "Follow all", Tt.setAttribute("role", "button"), Tt.classList.add("sft-button", "sft-button--follow");
    const Et = () => {
        Tt.style.display = "none"
    };
    Tt.addEventListener("click", async () => {
        m(), Et(), dt(), _t(), await Ot()
    });
    const Mt = 864e5;

    function It(e) {
        return (Date.now() - e) / Mt
    }
    const $t = (e, t, n) => n.indexOf(e) == t,
        At = (e, t) => {
            const n = [];
            if (t.followingLessThan) {
                if (B(e) < t.followingLessThan) return !0;
                n.push(`${B(e)} Following`)
            }
            if (t.followingGreaterThan) {
                if (B(e) > t.followingGreaterThan) return !0;
                n.push(`${B(e)} Following`)
            }
            if (t.followersLessThan) {
                if (P(e) < t.followersLessThan) return !0;
                n.push(`${P(e)} Followers`)
            }
            if (t.followersGreaterThan) {
                if (P(e) > t.followersGreaterThan) return !0;
                n.push(`${P(e)} Followers`)
            }
            return 0 === n.length || n.filter($t).join(", ")
        };
    async function Ct(e, t) {
        if (function(e) {
                return Object(j.a)(e, "following")
            }(e)) {
            if (t.unfollowSkipFollower && U(e)) return "is following you";
            if (t.unfollowSkipVerified && N(e)) return "is verified";
            if (Ft(e, t.blacklist)) return "is blacklisted";
            if (t.bioBlacklist instanceof RegExp) {
                const n = X(e).match(t.bioBlacklist);
                if (n) return `${n.join()} found in bio, but is blacklisted`
            }
            if (t.unfollowMassFollowedRequired || t.minDaysFollowed) {
                const n = await at(e),
                    i = await rt(e);
                if (t.unfollowMassFollowedRequired && !n && !i) return "has not been mass followed";
                if (t.minDaysFollowed && n) {
                    const e = It(n.createdAt);
                    if (e < t.minDaysFollowed) return `${e.toFixed(2)} days followed, but ${t.minDaysFollowed} days minimum required`
                }
                if (t.minDaysFollowed && i) {
                    const e = It(i.createdAt);
                    if (e < t.minDaysFollowed) return `${e} days followed, but ${t.minDaysFollowed} days minimum required`
                }
            }
            return At(e, t)
        }
    }
    var Dt = n(11);
    const Pt = async () => {
        const e = await Dt.a.all();
        return e.blacklist = ht(e.unfollowBlacklist), e.bioBlacklist = st(e.unfollowBioBlacklist), e.followingLessThan = parseInt(e.unfollowFollowingLessThan), e.followingGreaterThan = parseInt(e.unfollowFollowingGreaterThan), e.followersLessThan = parseInt(e.unfollowFollowersLessThan), e.followersGreaterThan = parseInt(e.unfollowFollowersGreaterThan), e.intervalDurationRange = Ke(e.unfollowIntervalMin, e.unfollowIntervalMax), e.minDaysFollowed = parseFloat(e.unfollowMinDaysFollowed), e.unfollowPauseAfterSkipMin && e.unfollowPauseAfterSkipMax && (e.pauseAfterSkipRange = Ke(e.unfollowPauseAfterSkipMin, e.unfollowPauseAfterSkipMax)), e
    };
    async function Ut(e, t) {
        const n = await Pt();
        await In(), n.unfollowLimit && qn(n.unfollowLimit), e && qn(e), t && An(t), await Fe(async e => {
            et(ye(e));
            const t = await Ct(e, n);
            if (1 == t) {
                const t = function(e) {
                    const t = `[data-testid="${e.id_str}-unfollow"]`;
                    return console.log(`Querying unfollow button of ${e.screen_name} with ${t}`), document.querySelector(t)
                }(e);
                if (!t) return Ze("unfollow button not found");
                t.click(), document.querySelector('div[data-testid="confirmationSheetConfirm"]').click(), Wn(), ze("successfully unfollowed");
                const i = Ve(n.intervalDurationRange);
                await Cn(i)
            } else if (t && Ze(t), n.pauseAfterSkipRange) {
                const e = Ve(n.pauseAfterSkipRange);
                await Cn(e)
            }
        })
    }
    const qt = document.createElement("div");
    qt.innerText = "Unfollow all", qt.setAttribute("role", "button"), qt.classList.add("sft-button", "sft-button--unfollow");
    const Bt = () => {
        qt.style.display = "none"
    };
    async function Wt(e, t) {
        if (J(e)) {
            if (t.unlikeMassLikedRequired || t.minDaysSinceLike) {
                const n = await
                function(e) {
                    return qe(Be, [Object(F.a)(), K(e)])
                }(e);
                if (t.unlikeMassLikedRequired && !n) return "has not been mass liked";
                if (t.minDaysSinceLike && n) {
                    const e = It(n.createdAt);
                    if (e < t.minDaysSinceLike) return `${e.toFixed(2)} days since like, but ${t.minDaysSinceLike} minimum required`
                }
            }
            return !0
        }
    }
    qt.addEventListener("click", async () => {
        y(), Bt(), await Ut()
    });
    var Gt = n(12);
    const Nt = async () => {
        const e = await Object(Gt.a)();
        return e.intervalDurationRange = Ke(e.unlikeIntervalMin, e.unlikeIntervalMax), e.minDaysSinceLike = parseFloat(e.unlikeMinDaysSinceLike), e
    };
    async function Xt(e, t) {
        const n = await Nt();
        await In(), n.unlikeLimit && qn(n.unlikeLimit), e && qn(e), t && An(t), await de(async e => {
            const t = await Wt(e, n);
            if (1 == t) {
                const t = function(e) {
                    return e.focusableEl.closest('[data-testid="tweet"]').querySelector('[data-testid="unlike"]')
                }(e);
                if (!t) return !1;
                t.click(), Wn(), nt(e, "successfully unliked");
                const i = Ve(n.intervalDurationRange);
                await Cn(i)
            } else t && (tt(e, t), await Cn(500))
        })
    }
    const Ht = document.createElement("div");
    Ht.innerText = "Unlike all", Ht.setAttribute("role", "button"), Ht.classList.add("sft-button", "sft-button--unlike");
    const Kt = () => {
        Ht.style.display = "none"
    };
    async function Vt(e, t) {
        if (ee(e)) {
            if (t.minDaysSinceRetweet) {
                const n = It(function(e) {
                    const t = Object(j.a)(e, "created_at");
                    return Date.parse(t)
                }(e));
                if (n < t.minDaysSinceRetweet) return `${n.toFixed(2)} days since retweet, but ${t.minDaysSinceRetweet} minimum required`
            }
            if (t.unretweetMassRetweetedRequired) {
                if (!await
                    function(e) {
                        const t = te(e);
                        return qe(pt, [Object(F.a)(), t])
                    }(e)) return "has not been mass retweeted"
            }
            return !0
        }
    }
    Ht.addEventListener("click", async () => {
        _(), Kt(), await Xt()
    });
    var Qt = n(13);
    const Jt = () => document.querySelector('div[data-testid="unretweetConfirm"]'),
        Yt = async () => {
            const e = await Object(Qt.a)();
            return e.intervalDurationRange = Ke(e.unretweetIntervalMin, e.unretweetIntervalMax), e.minDaysSinceRetweet = parseFloat(e.unretweetMinDaysSinceRetweet), e
        };
    async function zt(e, t) {
        const n = await Yt();
        await In(), n.unretweetLimit && qn(n.unretweetLimit), e && qn(e), t && An(t), await Ie(async e => {
            const t = await Vt(e, n);
            if (1 == t) {
                const t = function(e) {
                    return e.focusableEl.closest('[data-testid="tweet"]').querySelector('[data-testid="unretweet"]')
                }(e);
                if (!t) return !1;
                t.click(), (await M(() => Jt())).click(), Wn(), nt(e, "successfully unretweeted");
                const i = Ve(n.intervalDurationRange);
                await Cn(i)
            } else t && (tt(e, t), await Cn(500))
        })
    }
    const Zt = document.createElement("div");
    Zt.innerText = "Unretweet all", Zt.setAttribute("role", "button"), Zt.classList.add("sft-button", "sft-button--unretweet");
    const en = () => {
        Zt.style.display = "none"
    };
    Zt.addEventListener("click", async () => {
        k(), en(), await zt()
    });
    const tn = document.createElement("aside");
    tn.setAttribute("role", "complementary"), tn.classList.add("sft-panel"), document.body.appendChild(tn);
    const nn = () => {
            tn.style.display = "none"
        },
        on = () => {
            tn.style.display = "flex"
        };

    function an() {
        Tn || (Ce(), he() && !x() || Re() && !L() || we() ? Tt.style.display = "initial" : Et(), Re() || Me() && !R() || we() && !v() || je() ? wt.style.display = "initial" : dt(), Re() || je() || Me() && !R() ? kt.style.display = "initial" : _t(), he() && x() ? qt.style.display = "initial" : Bt(), we() && v() ? Ht.style.display = "initial" : Kt(), Me() && R() ? Zt.style.display = "initial" : en(), "initial" == $e.style.display || "initial" == Tt.style.display || "initial" == wt.style.display || "initial" == kt.style.display || "initial" == qt.style.display || "initial" == Ht.style.display || "initial" == Zt.style.display ? (rn.style.display = "none", tn.classList.toggle("sft-panel--search-page", "/search" == location.pathname), on()) : nn())
    }
    const rn = document.createElement("div");
    rn.classList.add("sft-status-bar");
    const sn = document.createElement("div");
    sn.innerText = "Skip", sn.setAttribute("role", "button"), sn.classList.add("sft-status-bar__button"), rn.append(sn), sn.addEventListener("click", async () => {
        sn.style.display = "none", await ui()
    });
    const ln = document.createElement("div");
    ln.innerText = "Cancel", ln.setAttribute("role", "button"), ln.classList.add("sft-status-bar__button"), rn.append(ln), ln.addEventListener("click", () => {
        Mn(), si(), nn(), f()
    });
    const cn = document.createElement("div");

    function un() {
        ln.style.display = "initial", cn.style.display = "none", sn.style.display = "none",
            function() {
                switch (p) {
                    case "follow":
                        d.textContent = `Twitter follow limit exceeded. Continuing in ${w(En)} ...`;
                        break;
                    case "like":
                        d.textContent = `Unable to like. Continuing in ${w(En)} ...`;
                        break;
                    case "retweet":
                        d.textContent = `Unable to retweet. Continuing in ${w(En)} ...`
                }
            }()
    }

    function fn(e) {
        ln.style.display = "initial", cn.style.display = "none", sn.style.display = "none",
            function(e) {
                d.textContent = `Repeating autopilot in ${w(e)} ...`
            }(e)
    }

    function wn(e) {
        ln.style.display = "initial", cn.style.display = "none", sn.style.display = "none", h(e)
    }

    function dn(e, t) {
        ln.style.display = "initial", cn.style.display = "none", sn.style.display = "initial",
            function(e, t) {
                d.textContent = `Autopilot ${e}/${t} ...`
            }(e, t)
    }

    function pn() {
        ln.style.display = "none", cn.style.display = "initial", sn.style.display = "none",
            function() {
                switch (p) {
                    case "follow":
                        d.textContent = `Successfully followed ${_n} users`;
                        break;
                    case "unfollow":
                        d.textContent = `Successfully unfollowed ${_n} users`;
                        break;
                    case "like":
                        d.textContent = `Successfully liked ${_n} Tweets`;
                        break;
                    case "retweet":
                        d.textContent = `Successfully retweeted ${_n} Tweets`;
                        break;
                    case "unretweet":
                        d.textContent = `Successfully unretweeted ${_n} Tweets`;
                        break;
                    case "unlike":
                        d.textContent = `Successfully unliked ${_n} Tweets`
                }
            }()
    }

    function mn() {
        ln.style.display = "none", cn.style.display = "initial", sn.style.display = "none", d.textContent = `You have reached the daily limit of ${Fn}`, console.log(d.textContent)
    }

    function yn() {
        ln.style.display = "initial", cn.style.display = "none", sn.style.display = di() ? "initial" : "none",
            function() {
                const e = xn ? `${_n}/${xn}` : _n;
                switch (p) {
                    case "follow":
                        d.textContent = `Following ${e} ...`;
                        break;
                    case "unfollow":
                        d.textContent = `siktir çekildi ${e} ...`;
                        break;
                    case "like":
                        d.textContent = `Liking ${e} ...`;
                        break;
                    case "retweet":
                        d.textContent = `Retweeting ${e} ...`;
                        break;
                    case "unretweet":
                        d.textContent = `Unretweeting ${e} ...`;
                        break;
                    case "unlike":
                        d.textContent = `Unliking ${e} ...`
                }
            }()
    }

    function bn() {
        rn.style.display = "flex", Et(), dt(), _t(), Bt()
    }
    cn.innerText = "Close", cn.setAttribute("role", "button"), cn.classList.add("sft-status-bar__button"), rn.append(cn), cn.addEventListener("click", () => nn());
    var gn = n(5);
    const kn = 950;
    let _n, hn, Fn, xn, vn, Rn, Ln, Sn, jn, On, Tn = !1,
        En = !1;

    function Mn() {
        Tn = !0
    }
    async function In() {
        _n = 0, vn = void 0, Fn = void 0, En = !1, hn = location.href, Rn = void 0, Ln = void 0, jn = void 0;
        const e = await Object(gn.a)();
        (Sn = Object(gn.b)(e)) || (xn = kn, u.innerHTML = s(l, 3).map(e => c(e)).join(""), u.style.display = "flex"), yn(), bn()
    }
    const $n = () => {
        Ln = Rn ? Date.now() + Rn : void 0
    };

    function An(e) {
        Rn = 1e3 * parseFloat(e), $n()
    }
    async function Cn(e) {
        Ln && (Ln += e), await i(e)
    }

    function Dn() {
        Ln && Ln <= Date.now() && (console.log("Idle timeout"), Ln = void 0, Tn = !0)
    }

    function Pn(e) {
        On = 60 * parseFloat(e)
    }

    function Un() {
        En = On;
        const e = setInterval(() => {
            En -= 1, un(), (En <= 0 || Tn) && (clearInterval(e), En = !1)
        }, 1e3)
    }

    function qn(e) {
        Sn ? xn = e : xn && e < xn && (xn = e), yn()
    }

    function Bn(e) {
        jn = e
    }

    function Wn() {
        _n += 1, xn && xn <= _n ? (Tn = !0, pn()) : Fn && _n + vn >= Fn ? (Tn = !0, r(), mn()) : yn(), $n()
    }

    function Gn() {
        return location.href == hn || (location.pathname == jn || (Tn = !1, !1))
    }

    function Nn() {
        return location.href == hn
    }
    var Xn = n(6);
    const Hn = e => {
            switch (e.type) {
                case "mass_follow":
                case "mass_like":
                case "mass_retweet":
                    return e.url;
                case "mass_unfollow":
                case "mass_unlike":
                case "mass_unretweet":
                    return !0;
                default:
                    return !1
            }
        },
        Kn = async () => {
            const e = await Object(Xn.a)();
            return Array.isArray(e) ? e.filter(Hn) : []
        };
    async function Vn() {
        return (await Kn())[0]
    }
    const Qn = e => `https://www.twitter.com${e}`;
    const Jn = "SuperpowersForTwitterAutopilotActionId";
    async function Yn() {
        const e = sessionStorage.getItem(Jn);
        if ("string" == typeof e) return sessionStorage.removeItem(Jn), await async function(e) {
            return (await Kn()).find(t => t.id === e)
        }(e)
    }

    function zn(e) {
        switch (sessionStorage.setItem(Jn, e.id), e.type) {
            case "mass_follow":
            case "mass_like":
            case "mass_retweet":
                location.href = e.url;
                break;
            case "mass_unfollow":
                location.href = (t = Object(F.b)(), Qn(`/${t}/following`));
                break;
            case "mass_unlike":
                location.href = function(e) {
                    return Qn(`/${e}/likes`)
                }(Object(F.b)());
                break;
            case "mass_unretweet":
                location.href = function(e) {
                    return Qn(`/${e}`)
                }(Object(F.b)())
        }
        var t
    }
    const Zn = 2;
    async function ei() {
        const e = await async function() {
            return (await Kn()).length
        }();
        if (e <= Zn) return e;
        const t = await Object(gn.a)();
        return Object(gn.b)(t) ? e : Zn
    }
    const ti = async (e, t) => {
        try {
            return await M(() => (t && console.log(t), e()), 9e3)
        } catch (e) {
            return console.log(e), console.log("Skipping action ..."), void ui()
        }
    };
    var ni = n(7);
    let ii, oi, ai = !1;
    const ri = async () => {
        sessionStorage.removeItem(o), ii = await Vn(), ai = !1;
        const e = await ei();
        dn(ii.number, e), on(), bn(), zn(ii)
    }, si = () => {
        ai = !0
    }, li = async () => {
        const e = await Object(ni.a)();
        if (!e.autopilotRepeatAfter) return void si();
        const t = await Object(gn.a)();
        if (!Object(gn.b)(t)) return void si();
        let n = ((e, t) => {
            let n = 60 * parseFloat(e);
            const i = 60 * parseFloat(t),
                o = [n];
            for (; n < i;) n += 60, o.push(n);
            return He(o)
        })(e.autopilotRepeatAfter, e.autopilotRepeatAfterMax);
        fn(n);
        const i = setInterval(() => {
            ai ? clearInterval(i) : (fn(n -= 1), n <= 0 && (clearInterval(i), ri()))
        }, 1e3)
    }, ci = async e => {
        const t = await async function(e) {
            const t = await Kn(),
                n = a(),
                i = t.filter(t => t.id == e || !n.includes(t.type)),
                o = i.map(e => e.id).indexOf(e);
            if (-1 !== o) return i[o + 1]
        }(ii.id);
        if (t && t.number <= e) {
            if (await (async () => {
                    const {
                        autopilotPauseAfterActionMin: e,
                        autopilotPauseAfterActionMax: t
                    } = await Object(ni.a)();
                    if (!e) return;
                    if (!t) return;
                    let n = Ve(Ke(e, t));
                    for (; n > 0;) {
                        if (ai) return;
                        wn(n), n -= 100, await i(100)
                    }
                })(), ai) return;
            dn(t.number, e), zn(t)
        } else await li()
    };
    async function ui() {
        oi = !0, Mn();
        const e = await ei();
        ci(e)
    }
    async function fi() {
        if (ii = await Yn()) {
            oi = !1;
            const e = await ei();
            if (dn(ii.number, e), on(), bn(), await async function(e) {
                    switch (e.type) {
                        case "mass_follow":
                            if (await ti(() => Re() || he() || we(), "Find Tweets, users or likes ..."), !di()) return;
                            if (wi()) return;
                            m(), await Ot(e.limit, e.idleTimeout);
                            break;
                        case "mass_like":
                            if (await ti(() => Re() || we() || Me() || je(), "Find Tweets or likes ..."), !di()) return;
                            if (wi()) return;
                            b(), await ft(e.limit, e.idleTimeout);
                            break;
                        case "mass_retweet":
                            if (await ti(() => Re() || Me(), "Find Tweets ..."), !di()) return;
                            if (wi()) return;
                            g(), await gt(e.limit, e.idleTimeout);
                            break;
                        case "mass_unfollow":
                            if (await ti(() => he() && x(), "Find users ..."), !di()) return;
                            if (wi()) return;
                            y(), await Ut(e.limit, e.idleTimeout);
                            break;
                        case "mass_unlike":
                            if (await ti(() => we() && v(), "Find likes ..."), !di()) return;
                            if (wi()) return;
                            _(), await Xt(e.limit, e.idleTimeout);
                            break;
                        case "mass_unretweet":
                            if (await ti(() => Me() && R(), "Find Tweets ..."), !di()) return;
                            if (wi()) return;
                            k(), await zt(e.limit, e.idleTimeout)
                    }
                }(ii), ai) return;
            if (oi) return;
            await ci(e)
        }
    }

    function wi() {
        return !0 === oi
    }

    function di() {
        return "object" == typeof ii && !1 === ai
    }
    const pi = e => {
        if ("object" != typeof e) return;
        const t = e.errors;
        if (!Array.isArray(t)) return;
        const n = t[0];
        return "object" == typeof n ? 162 === n.code : void 0
    };
    rn.prepend(d), tn.append(rn, $e, Tt, qt, kt, wt, Zt, Ht), ce("friendships/create.json", ({
        body: e,
        parsedResponse: t,
        status: n
    }) => {
        200 != n && (ot(e.match(/&id=(\d+)/)[1]), pi(t) || (Un(), di() ? (r(), Mn()) : Un()))
    }), ce("favorites/create.json", ({
        status: e
    }) => {
        200 != e && (di() ? (r(), Mn()) : Un())
    }), ce("statuses/retweet.json", ({
        status: e
    }) => {
        200 != e && (di() ? (r(), Mn()) : Un())
    });
    (async () => {
        await fi(), setInterval(async () => {
            di() || Gn() || (await an(), f())
        }, 200)
    })()
}]);