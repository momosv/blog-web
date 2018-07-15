XIAOMI.namespace("app.slide"), XIAOMI.app.slide = function (t) {
    function n() {
        var t, n = document.createElement("check"), e = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };
        for (t in e) if (void 0 !== n.style[t]) return e[t]
    }

    function e(t) {
        var e, i, o = this, s = $(t.slideObj), a = s.find(".xm-slide-scroll"), r = s.find("figure"), d = r.length,
            l = s.width(), f = l * d, u = t.position;
        if (r.width(l), t.hasTag) {
            for (var c = $('<ul class="xm-slide-pagination"></ul>'), h = "<li></li>", m = 1; d > m; m++) h += "<li></li>";
            c.append(h);
            var v = c.children("li");
            v.eq(u).addClass("current"), s.append(c), t.tagCenter && c.css({
                "margin-left": -(c.width() / 2),
                left: "50%"
            })
        }
        if (t.hasButton) {
            var p = $('<span class="xm-slide-leftbutton hide"></span><span id="" class="xm-slide-rightbutton"></span>');
            s.append(p), s.find(".xm-slide-leftbutton").on("click", function () {
                o.toLeft()
            }), s.find(".xm-slide-rightbutton").on("click", function () {
                o.toRight()
            })
        }
        if (a.css("width", f).on(n(), function () {
            a.removeClass("transition"), o.events();
            var n = s.find("figure[data-source]");
            "continue" === t.edgeType && n.length > 0 && (u = Number(n.data("source")), o.transform(a, l * u), n.css({"z-index": "-1"}), setTimeout(function () {
                g.removeAttr("data-source"), b.removeAttr("data-source")
            }, 0))
        }), this.init = function () {
            o.transform(a, l * u), o.toPlay()
        }, this.transform = function (t, n) {
            t.css({
                "-moz-transform": "translate3d(" + -n + "px, 0, 0)",
                "-webkit-transform": "translate3d(" + -n + "px, 0, 0)",
                "-o-transform": "translate3d(" + -n + "px, 0, 0)",
                "-ms-transform": "translate3d(" + -n + "px, 0, 0)",
                transform: "translate3d(" + -n + "px, 0, 0)"
            })
        }, this.toRun = function (n, e) {
            var i;
            if (void 0 !== n) i = l * u - n; else if (o.runType[t.edgeType](), a.addClass("transition"), i = l * u, r.off("touchstart").off("touchend"), s.off("touchmove"), v && v.length > 0) {
                var d = u >= v.length ? 0 : u;
                v.removeClass("current"), v.eq(d).addClass("current")
            }
            o.transform(a, i)
        }, this.toPlay = function () {
            t.autoPlay && (e = setInterval(function () {
                o.toRight()
            }, t.interval))
        }, this.toRight = function () {
            u++, o.toRun()
        }, this.toLeft = function () {
            u--, o.toRun()
        }, this.runType = {
            rollback: function () {
                0 > u ? u = d - 1 : u > d - 1 && (u = 0)
            }, end: function () {
                0 >= u ? (u = 0, s.find(".xm-slide-leftbutton").addClass("hide"), s.find(".xm-slide-rightbutton").removeClass("hide")) : u >= d - 1 ? (u = d - 1, s.find(".xm-slide-rightbutton").addClass("hide"), s.find(".xm-slide-leftbutton").removeClass("hide")) : (s.find(".xm-slide-leftbutton").removeClass("hide"), s.find(".xm-slide-rightbutton").removeClass("hide"))
            }, "continue": function () {
                g.css({"z-index": "1"}), b.css({"z-index": "1"}), 0 > u ? (g.data("source", d - 1), o.toRun(l * u, d - 1)) : u > d - 1 && (b.data("source", 0), o.toRun(-l * u, 0))
            }
        }, this.events = function () {
            r.off("touchstart").off("touchend").on("touchstart", function (t) {
                clearInterval(e), a.removeClass("transition"), i = t.targetTouches[0].pageX
            }).on("touchend", function (t) {
                var n = t.changedTouches[0].pageX, e = n - i, s = Math.abs(e), a = $(window).width() / 6;
                e > 0 && s > a ? o.toLeft() : 0 > e && s > a ? o.toRight() : o.toRun(), o.toPlay()
            }), s.off("touchmove").on("touchmove", function (t) {
                var n = t.targetTouches[0].pageX, e = n - i, s = Math.abs(e);
                $(window).width() / 36;
                s >= 10 && t.preventDefault(), o.toRun(e)
            })
        }, $(window).resize(function () {
            r.width(s.width()), l = r.width(), f = l * d, a.css("width", f)
        }), this.events(), "continue" === t.edgeType) {
            var g = r.eq(-1).clone(), b = r.eq(0).clone(), x = function (t, n) {
                o.transform(t, n), t.css({position: "absolute", "z-index": "1", top: "0"}), a.append(t)
            };
            x(g, l), x(b, -f)
        }
    }

    var i = {
        slideObj: ".xm-slide",
        hasTag: !0,
        tagCenter: !1,
        hasButton: !1,
        edgeType: "rollback",
        autoPlay: !0,
        interval: 5,
        position: 0
    };
    for (var o in t) i[o] = t[o];
    i.interval = 1e3 * i.interval;
    var s = $(i.slideObj).find("xm-slide-scroll"), a = $(i.slideObj).find("figure"), r = a.length;
    if (1 >= r) return s.width("100%"), void a.width("100%");
    if ($(i.slideObj).length > 0) {
        var d = new e(i);
        d.init()
    }
};