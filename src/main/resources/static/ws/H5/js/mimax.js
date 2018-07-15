function geneDialog(e) {
    var t = {
        lj: {id: "lj", name: "雷军", avatar: _imgUrl + "a-lj.png"},
        lwq: {id: "lwq", name: "小米市场黎万强", avatar: _imgUrl + "a-lwq.png"},
        lb: {id: "lb", name: "小米网林斌", avatar: _imgUrl + "a-lb.png"},
        zgp: {id: "zgp", name: "手机研发周光平", avatar: _imgUrl + "a-zgp.png"},
        wc: {id: "wc", name: "小米电视王川", avatar: _imgUrl + "a-wc.png"},
        ld: {id: "ld", name: "生态链刘德", avatar: _imgUrl + "a-ld.png"},
        hf: {id: "hf", name: "MIUI洪锋", avatar: _imgUrl + "a-hf.png"},
        kk: {id: "kk", name: "小米路由云KK", avatar: _imgUrl + "a-kk.png"},
        st: {id: "st", name: "沈腾", avatar: _imgUrl + "a-st.png"}
    };
    _members = $.extend(_members, t), _dialog.d0 = [{
        type: "plain",
        author: _members.lj,
        content: e + " 你好，are you ok？",
        pause: 2e3
    }, {
        type: "plain",
        author: _members.lwq,
        content: "欢迎 " + e + gif.welcome + gif.welcome + gif.welcome,
        flag: "emoji-welcome"
    }, {
        type: "plain",
        author: _members.lb,
        content: "欢迎" + gif.welcome + gif.welcome + gif.welcome + gif.welcome + gif.welcome
    }, {
        type: "plain",
        author: _members.zgp,
        content: "欢迎" + gif.welcome + gif.welcome + gif.welcome + gif.welcome
    }, {type: "plain", author: _members.lj, content: "我们刚刚发布了小米Max，先发几张美图和外观视频，你欣赏一下", pause: 3e3}, {
        type: "video",
        author: _members.lj,
        content: {
            video: "http://v.qq.com/iframe/player.html?vid=j0199fr5noz&tiny=0&auto=0",
            poster: _imgUrl + "d-thumb-design.jpg"
        }
    }, {
        type: "picture",
        author: _members.lj,
        content: _imgUrl + "gallery-02-s.jpg",
        extra: "gallery",
        pause: 4e3
    }, {type: "plain", author: _members.lj, content: "怎么样，不错吧？太忙没来得及邀请你参加发布会，我把大家叫过来单独给你介绍"}, {
        type: "plain",
        author: _members.lj,
        content: "想了解啥尽管问吧：）"
    }], _dialog.d1 = [{type: "plain", author: _members.me, content: "小米Max到底有多大？"}, {
        type: "plain",
        author: _members.lj,
        content: "你问的是屏幕多大还是手机多大？"
    }], _dialog.d2 = [{type: "plain", author: _members.me, content: "小米Max能存多少东西？好想放很多很多视频，路上慢慢看"}, {
        type: "plain",
        author: _members.lwq,
        content: "海内存知己，大内存天下啊！" + _translate.replace("%placehold%", "可选4GB＋128GB容量，最高可扩展到256GB"),
        pause: 3e3
    }, {type: "plain", author: _members.zgp, content: "最高可通过3选2卡槽，扩展到256GB @王川 能装多少部剧呢？", pause: 3e3}, {
        type: "plain",
        author: _members.wc,
        content: "我统计了一下，@" + e + " 给你三个选项，要不你来猜猜？"
    }], _dialog.d3 = [{type: "plain", author: _members.me, content: "据说小米Max电量很大？"}, {
        type: "plain",
        author: _members.lj,
        content: "小米Max是小米有史以来电量最大的手机，容量达到4850mAh。",
        pause: 2e3
    }, {type: "plain", author: _members.kk, content: "我们测试了，从北京出发，开车到包头，全程8小时手机导航，最后还能剩下33%的电量"}, {
        type: "animation",
        author: _members.kk,
        content: _animation.tour,
        flag: "animate-tour",
        pause: 5e3
    }, {
        type: "plain",
        author: _members.wc,
        content: "如果你是坐火车的话，下载一部《太阳的后裔》在小米Max里，最后只有两种情况",
        pause: 3e3
    }, {
        type: "plain",
        author: _members.wc,
        content: "要么火车到了，要么剧看完了，但是小米Max还是妥妥得有电哦~",
        flag: "animate-train",
        pause: 6e3
    }, {type: "plain", author: _members.zgp, content: "我们还有实测视频，看看真实数据"}, {
        type: "video",
        author: _members.zgp,
        content: {
            video: "http://v.qq.com/iframe/player.html?vid=f0199i5woho&tiny=0&auto=0",
            poster: _imgUrl + "d-thumb-power.jpg"
        },
        pause: 3e3
    }, {type: "plain", author: _members.kk, content: "小米Max不仅续航惊人，其它方面也很赞"}], _dialog.d4 = [{
        type: "plain",
        author: _members.me,
        content: "小米Max这么赞，配置和价格怎么样？"
    }, {type: "plain", author: _members.lwq, content: "配置当然也很赞，你看看配置表"}, {
        type: "picture",
        author: _members.lwq,
        content: _imgUrl + "d-4-specs.jpg"
    }, {type: "plain", author: _members.me, content: "价格呢？好期待" + gif.lol}, {
        type: "plain",
        author: _members.lb,
        content: "价格就更赞了！"
    }, {
        type: "plain",
        author: _members.lb,
        content: "4GB+128GB版本1999元，给力吧？我们还给大家准备了3GB+32GB版本。",
        pause: 4e3
    }], _dialog.d5 = [{type: "plain", author: _members.me, content: "这手机好看吗？感觉要剁手了！"}, {
        type: "plain",
        author: _members.ld,
        content: "美到哭，真的很漂亮",
        flag: "emoji",
        pause: 5e3
    }, {type: "plain", author: _members.ld, content: "你看这轻薄的金属机身", pause: 150}, {
        type: "picture",
        author: _members.ld,
        content: _imgUrl + "gallery-06.jpg",
        pause: 3e3
    }, {type: "plain", author: _members.ld, content: "你看这优雅的2.5D玻璃", pause: 150}, {
        type: "picture",
        author: _members.ld,
        content: _imgUrl + "gallery-05.jpg",
        pause: 4e3
    }, {type: "plain", author: _members.ld, content: "要不然再看一遍外观视频吧", pause: 150}, {
        type: "video",
        author: _members.ld,
        content: {
            video: "http://v.qq.com/iframe/player.html?vid=j0199fr5noz&tiny=0&auto=0",
            poster: _imgUrl + "d-thumb-design.jpg"
        }
    }], _dialog.d6 = [{type: "plain", author: _members.me, content: "咋买呢"}, {
        type: "plain",
        author: _members.lb,
        content: "这个我来回答，小米网5月17日周二首批开售3GB+32GB版本，小米之家17日也同步开售哦",
        pause: 2500
    }, {type: "picture", author: _members.lb, content: _imgUrl + "d-6-fcode.jpg", pause: 2e3}, {
        type: "plain",
        author: _members.ld,
        content: "我也没有" + gif.cry + gif.cry + gif.cry
    }, {type: "plain", author: _members.kk, content: "我也没有" + gif.cry + gif.cry}, {
        type: "plain",
        author: _members.lb,
        content: "除了小米网和小米之家，天猫、京东、苏宁等电商平台都能买到哦，请多留意～"
    }], _dialog.d7 = [{type: "plain", author: _members.me, content: "彩蛋是什么呀？"}, {
        type: "system",
        content: "沈腾加入群聊"
    }, {type: "plain", author: _members.st, content: "彩蛋在这儿呢"}, {
        type: "plain",
        author: _members.st,
        content: "哈哈哈" + gif.lol + gif.lol + gif.lol
    }, {
        type: "plain",
        author: _members.st,
        content: "我们和小米合作了一系列脑洞大开的大片，你要先看哪个？",
        pause: 2e3
    }], _dialog.d8 = [{type: "plain", author: _members.me, content: "我听了这么多，老板们发个红包呗"}, {
        type: "system",
        content: "生态链刘德退出群聊",
        pause: 500
    }, {type: "system", content: "小米网林斌退出群聊", pause: 400}, {
        type: "system",
        content: "MIUI洪锋退出群聊",
        pause: 700
    }, {type: "system", content: "小米电视王川退出群聊", pause: 400}, {
        type: "system",
        content: "小米路由云KK退出群聊",
        pause: 500
    }, {type: "system", content: "手机研发周光平退出群聊", pause: 1500}, {
        type: "plain",
        author: _members.lwq,
        content: "哈哈，大家开个玩笑，微信公众号现在不允许H5发红包了哦.."
    }, {type: "plain", author: _members.lwq, content: "但是到16号为止，小米网有预约赢手机的活动，每2小时抽1台，你可以去小米网看看"}, {
        type: "plain",
        author: _members.lwq,
        content: "说不定会中手机呢"
    }], _dialog.d9 = [{type: "plain", author: _members.me, content: "不聊了，我妈喊我回家吃饭了"}, {
        type: "plain",
        author: _members.me,
        content: "感谢各位老板介绍，我能把我们的聊天记录晒给朋友们吗？"
    }, {type: "plain", author: _members.lj, content: "当然可以"}, {
        type: "plain",
        author: _members.lb,
        content: "感谢 " + e
    }, {type: "plain", author: _members.hf, content: "大屏手机就是小米Max，" + e + "再见"}, {
        type: "plain",
        author: _members.wc,
        content: "大屏手机就是小米Max，" + e + "再见"
    }, {type: "plain", author: _members.lwq, content: "大屏手机就是小米Max，" + e + "再见", pause: 5e3}, {
        type: "system",
        content: "本活动页面中涉及图片、数据及宣传用语的详细说明，来源自小米官网mi.com，以官网信息为准；相关信息不作为买卖交易条件，仅供参考；因客观环境变化，测试数据会有偏差；活动页面中合伙人及沈腾对话均为活动用语，不代表本人言论立场。"
    }], _dialog.d1_1 = [{type: "plain", author: _members.me, content: "我比较关心屏幕多大"}, {
        type: "plain",
        author: _members.wc,
        content: "比小米电视略小一点" + gif.lol
    }, {
        type: "plain",
        author: _members.lwq,
        content: "屏到用时方恨小，大屏底下好乘凉" + _translate.replace("%placehold%", '6.44"黄金尺寸大屏，看什么都震撼'),
        pause: 3e3
    }, {type: "plain", author: _members.lwq, content: "先来看看跟其他手机的对比"}, {
        type: "picture",
        author: _members.lwq,
        content: _imgUrl + "d-1-contrast.jpg"
    }, {type: "plain", author: _members.lj, content: "再给你欣赏几张美美的场景图", pause: 2e3}, {
        type: "picture",
        author: _members.lj,
        content: _imgUrl + "d-sence-01.jpg"
    }, {type: "picture", author: _members.lj, content: _imgUrl + "d-sence-02.jpg"}, {
        type: "picture",
        author: _members.lj,
        content: _imgUrl + "d-sence-03.jpg",
        pause: 3500
    }, {
        type: "plain",
        author: _members.lj,
        content: "怎么样？还不错吧，小米Max其他方面也很赞，你对哪方面感兴趣？"
    }], _dialog.d1_2 = [{type: "plain", author: _members.me, content: "既然屏幕这么大，手机也很大吗，手感怎么样？"}, {
        type: "plain",
        author: _members.lj,
        content: e + "，好问题，我们都想要大屏幕，但没人想要大手机。"
    }, {type: "plain", author: _members.lb, content: "对，小米Max屏幕大，但是依然很轻薄"}, {
        type: "picture",
        author: _members.lb,
        content: _imgUrl + "d-holdphone.jpg"
    }, {
        type: "plain",
        author: _members.lwq,
        content: "我们跟其他手机做了对比，也让很多人试用了一下，你想看哪个？"
    }], _dialog.d1_2_1 = [{type: "plain", author: _members.me, content: "看看对比图，比较有感觉"}, {
        type: "plain",
        author: _members.lwq,
        content: "对比图在这里，你感受一下"
    }, {
        type: "picture",
        author: _members.lwq,
        content: _imgUrl + "d-1-contrast.jpg"
    }], _dialog.d1_2_2 = [{type: "plain", author: _members.me, content: "我比较想看看别人怎么说"}, {
        type: "plain",
        author: _members.lwq,
        content: "我们在街上随机采访了一些人，问了他们的使用体验，发给你看看",
        pause: 2500
    }, {
        type: "video",
        author: _members.lwq,
        content: {
            video: "http://v.qq.com/iframe/player.html?vid=p01993h0yaj&tiny=0&auto=0",
            poster: _imgUrl + "d-thumb-user.jpg"
        }
    }], _dialog.d2_1 = [{type: "plain", author: _members.me, content: "我觉得能放个30部影片已经很大了！"}, {
        type: "plain",
        author: _members.wc,
        content: "那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！"
    }, {type: "plain", author: _members.me, content: "果然是大容量啊！"}], _dialog.d2_2 = [{
        type: "plain",
        author: _members.me,
        content: "我觉得能放个80集美剧已经很牛了！"
    }, {type: "plain", author: _members.wc, content: "那你可就小看小米Max了，它最大可是能放下700集左右的海贼王的！", pause: 3e3}, {
        type: "plain",
        author: _members.me,
        content: "果然是大容量啊！"
    }], _dialog.d2_3 = [{type: "plain", author: _members.me, content: "既然容量这么大，应该能放一整部海贼王吧？"}, {
        type: "plain",
        author: _members.wc,
        content: "你太厉害了，小米Max通过扩展卡最大存储达到256GB，700集左右的《海贼王》存进去杠杠的！",
        pause: 3e3
    }, {type: "plain", author: _members.me, content: "果然是大容量啊！"}], _dialog.d7_1 = [{
        type: "plain",
        author: _members.st,
        content: "这个彩蛋很给力吧？你再问问老板们其他问题，我也一起了解一下。",
        pause: 2800
    }], _dialog.dr_1 = [{
        type: "plain",
        author: _members.lj,
        content: "还对啥感兴趣？可以继续问我们"
    }], _dialog.dr_2 = [{
        type: "plain",
        author: _members.lb,
        content: "小米Max的其他方面也很优秀，不信来问我们。"
    }], _dialog.dr_3 = [{
        type: "plain",
        author: _members.lwq,
        content: "再看看其他方面的特性吧，关于小米Max我们还有很多要跟你分享"
    }], _dialog.dv_1 = [{type: "plain", author: _members.lb, content: "怎么样？够大吗？"}, {
        type: "plain",
        author: _members.me,
        content: "好大，好轻薄！小米的妹子也很美" + gif.lol + gif.lol + gif.lol
    }, {type: "plain", author: _members.hf, content: "同感，哈哈..还有啥感兴趣的？"}], _dialog.dv_2 = [{
        type: "system",
        content: "视频通话已拒绝"
    }, {type: "plain", author: _members.lwq, content: "了解点儿别的吧？"}], _dialog.dreg_1 = [{
        type: "plain",
        author: _members.lb,
        content: "赞！你已经成功预约了。5月17日可以到小米网来购买" + gif.lol
    }], _dialog.dreg_2 = [{type: "plain", author: _members.hf, content: "系统说预约失败，再点一下试试"}]
}

!function (e) {
    function t(e) {
        e = e || {}, this.maxFlake = e.maxFlake || 200, this.flakeSize = e.flakeSize || 10, this.fallSpeed = e.fallSpeed || 2, this.emojiImage = e.emojiImage
    }

    function a() {
        var e = document.getElementById("emoji");
        this.canvas = e, this.ctx = e.getContext("2d")
    }

    function n() {
        for (var e = this.maxFlake, t = this.flakes = [], a = this.canvas, n = 0; e > n; n++) t.push(new r(a.width, a.height, this.flakeSize, this.fallSpeed, this.emojiImage))
    }

    function o() {
        var e = this.maxFlake, t = this.flakes;
        ctx = this.ctx, canvas = this.canvas, that = this, ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var a = 0; e > a; a++) t[a].update(), t[a].render(ctx);
        this.loop = l(function () {
            o.apply(that)
        })
    }

    function i() {
        var e = this.ctx, t = this.canvas;
        e && e.clearRect(0, 0, t.width, t.height)
    }

    function r(e, t, a, n, o) {
        this.x = Math.floor(Math.random() * e), this.y = Math.floor(Math.random() * t * 1.5) - 1.5 * t, this.size = Math.random() * a + 2, this.maxSize = a, this.speed = 1 * Math.random() + n, this.fallSpeed = n, this.velY = this.speed, this.velX = 0, this.stepSize = Math.random() / 30, this.step = 0, this.emojiImage = o
    }

    e.emojiFall = t;
    var l = e.requestAnimationFrame || e.mozRequestAnimationFrame || e.webkitRequestAnimationFrame || e.msRequestAnimationFrame || e.oRequestAnimationFrame || function (e) {
            setTimeout(e, 1e3 / 60)
        },
        m = e.cancelAnimationFrame || e.mozCancelAnimationFrame || e.webkitCancelAnimationFrame || e.msCancelAnimationFrame || e.oCancelAnimationFrame;
    t.prototype.start = function () {
        a.apply(this), n.apply(this), o.apply(this)
    }, r.prototype.update = function () {
        this.x, this.y;
        this.velX *= .98, this.velY <= this.speed && (this.velY = this.speed), this.velX += Math.cos(this.step += .05) * this.stepSize * 5, this.y += this.velY, this.x += this.velX
    }, r.prototype.reset = function (e, t) {
        this.x = Math.floor(Math.random() * e), this.y = 0, this.size = Math.random() * this.maxSize + 2, this.speed = 1 * Math.random() + this.fallSpeed, this.velY = this.speed, this.velX = 0
    }, t.prototype.stop = function () {
        this.pause(), i()
    }, t.prototype.pause = function () {
        m(this.loop)
    }, t.prototype.resume = function () {
        this.loop = l(function () {
            o.apply(that)
        })
    }, r.prototype.render = function (e) {
        var t = new Image;
        t.src = this.emojiImage, t.complete ? e.drawImage(t, this.x, this.y, 84, 84) : (t.onload = function () {
            e.drawImage(t, this.x, this.y, 84, 84)
        }, t.onerror = function () {
        })
    }
}(window);
var _imgUrl = "http://c1.mifile.cn/f/i/hd/2016051101/", _userName = me.name, _dialog = {}, _members = {},
    _emoji = new emojiFall({maxFlake: 20, fallSpeed: 5, emojiImage: _imgUrl + "cry.gif"}), gif = {
        welcome: '<img src="' + _imgUrl + 'welcome.gif">',
        lol: '<img src="' + _imgUrl + 'lol.gif">',
        cry: '<img src="' + _imgUrl + 'cry.gif">'
    }, _animation = {tour: $(".J_map").html()},
    _translate = '<span class="trans J_trans">点击翻译</span><span class="hide J_actualContent">%placehold%</span>';
$.fn.loadingMask = function () {
    var e = this, t = e.css("position").toLowerCase();
    "relative" != t && "absolute" != t && "fixed" != t && e.css("position", "relative"), e.css("minHeight", 100);
    var a = $('<div class="loading"><div class="loader loader-white"></div></div>').appendTo(e);
    return function () {
        a.remove(), e.css("position", t)
    }
}, $.fn.scrollSmooth = function (e, t) {
    function a() {
        var e = Math.min(1, (Date.now() - l) / t);
        o.scrollTop = r * e + i, 1 > e && setTimeout(a, 10)
    }

    var n = this, o = n[0], i = o.scrollTop, r = e - i, l = Date.now();
    a()
}, $.fn.goSmooth = function (e, t) {
    function a() {
        var e = Math.min(1, (Date.now() - r) / t);
        n.css("margin-bottom", i * e + o), 1 > e && setTimeout(a, 10)
    }

    var n = this, o = 1 * n.css("margin-bottom").replace("px", ""), i = e - o, r = Date.now();
    a()
}, $(document).ready(function () {
    function e() {
    }

    function t(t) {
        for (var a = new e, n = 0; n < t.length; n++) a.add(t[n]);
        return a
    }

    function a(e) {
        h.html(""), unmask = h.loadingMask();
        var t = new Image;
        t.onload = function () {
            var a = t.width, n = t.height, o = $(window).width(), i = $(window).height();
            (n > i || a > o) && (n / a > i / o ? (a = a * i / n, n = i) : (n = n * o / a, a = o)), h.css({
                width: a,
                height: n,
                marginLeft: -a / 2,
                marginTop: -n / 2
            }), unmask && unmask(), unmask = null, h.append('<img src="' + e + '">')
        }, t.src = e
    }

    function n() {
        _members.me = me
    }

    function o() {
        $(".J_mapWrapper").addClass("animate");
        var e = 0, t = setInterval(function () {
            e >= 9 ? ($(".J_tourtime").html(8), clearInterval(t)) : (e++, $(".J_tourtime").html(e % 9))
        }, 5e3 / 9)
    }

    function i() {
        $(".box_ft").find(".input-wrapper").addClass("J_inputWrapper")
    }

    function r() {
        $(".box_ft").find(".input-wrapper").removeClass("J_inputWrapper")
    }

    function l(e, a) {
        function n(e) {
            void 0 == e && (e = 1e3 * Math.random() + 600);
            var t = setTimeout(function () {
                if (l) {
                    var e = m([l.el]);
                    c.append(e), $("#message-push-music")[0].play();
                    var r = $(".J_scrollContent").height(), s = c.height();
                    if (s > r && $(".J_scrollContent").scrollSmooth(s - r + 16, 300), l.el.flag) {
                        var p = l.el.flag;
                        switch (p) {
                            case"emoji":
                                _emoji.stop(), _emoji.start();
                                break;
                            case"emoji-welcome":
                                var h = new emojiFall({
                                    maxFlake: 20,
                                    fallSpeed: 9,
                                    emojiImage: _imgUrl + "welcome.gif"
                                });
                                h.start();
                                break;
                            case"playVideo":
                                break;
                            case"animate-tour":
                                o();
                                break;
                            case"animate-train":
                                setTimeout(function () {
                                    var e = $(".J_train").find("img"), t = e.attr("data-origin");
                                    e.attr("src", t), $(".J_train").addClass("animate"), $("#train-run-music")[0].play()
                                }, 800), setTimeout(function () {
                                    $(".J_train").hide(), $("#train-run-music")[0].pause()
                                }, 5e3)
                        }
                    }
                    void 0 != l.el.pause ? n(l.el.pause) : n(), l = l._next
                } else i(), clearTimeout(t), a && a()
            }, e)
        }

        r();
        var l = t(e)._first, m = doT.template($("#messageTpl").html());
        n(0)
    }

    function m(e, t) {
        $(".J_noticeInput").hide(), null === t && (t = 100), e || (e = "0"), setTimeout(function () {
            $(".J_choiceWrapper").addClass("opened").find(".J_choice").removeClass("choosen").hide(), $(".J_inputWrapper").addClass("opened");
            var t = $(".J_choiceWrapper").find(".J_choice").filter('[data-choice="' + e + '"]'),
                a = t.addClass("choosen").show().height(), n = $(".box_ft").height(), o = $("#chatContent").height();
            $(".box_bd").goSmooth(a, 100), $(".J_scrollContent").scrollSmooth(n + o, 300)
        }, t)
    }

    function s() {
        $(".box_bd").goSmooth(0, 100), $(".J_inputWrapper").removeClass("opened"), $(".J_choiceWrapper").removeClass("opened")
    }

    function p() {
        n(), geneDialog(_userName), l(_dialog.d0, function () {
            $(".J_noticeInput").show()
        }), $(".box_ft").on("click", ".J_choice .J_liNext", function (e) {
            e.preventDefault();
            var t = $(this), a = t.attr("data-target-dialog"), n = t.attr("data-target-choice"),
                o = "false" !== t.attr("data-continue");
            $(".J_mainChoice").find('.J_liNext[data-target-dialog="' + a + '"]').addClass("disabled"), n || (n = "0"), s(), clearTimeout(window.waitUser), l(_dialog["d" + a], function () {
                o && (m(n, 500), window.waitUser = setTimeout(function () {
                    var e = Math.floor(3 * Math.random() + 1);
                    l(_dialog["dr_" + e])
                }, 3e4))
            }), $(".J_mainChoice").find(".J_liNext").not(".disabled") || clearTimeout(window.waitUser)
        }), $(document).on("click", ".J_inputWrapper", function () {
            var e = $(".J_choice").filter(".choosen").attr("data-choice");
            $(".J_choiceWrapper").hasClass("opened") ? s() : m(e, 0)
        }), $(document).on("click", ".J_img", function (e) {
            var t = $(this), n = t.attr("src").replace(/\.(jpg|jpeg|png|gif)/, "-hd.$1");
            n && (a(n), $("#J_fullPics").show())
        }), $(document).on("click", "#J_fullPics", function (e) {
            h.html("").attr("style", ""), $("#J_fullPics").hide()
        }), $(document).on("click", ".J_trans", function (e) {
            "true" != $(this).attr("translated") && $(this).html($(this).siblings(".J_actualContent").html()).attr("translated", "true")
        }), $(document).on("click", ".J_register", function (e) {
            var t = $(this);
            "true" != $(this).attr("registered") && $.ajax({
                url: "http://xmt.www.mi.com/index.php?id=338&do=book",
                type: "POST",
                dataType: "json",
                success: function (e) {
                    e && 1e3 === e.header.code ? (t.html("您已成功预约").attr("registered", "true"), l(_dialog.dreg_1)) : l(_dialog.dreg_2)
                }
            })
        }), $(document).on("click", ".J_fpVideo", function (e) {
            var t = $(this).attr("data-src"), a = $(".J_videoOverlay");
            if (t) {
                var n = a.loadingMask(), o = document.createElement("iframe");
                o.onload = function () {
                    n && n(), n = null
                }, o.src = t, $(o).attr({
                    frameborder: 0,
                    allowfullscreen: !0
                }), $(".J_videoOverlay").show().find(".J_videoWrapper").append(o)
            }
        }), $(document).on("click", ".J_videoClose", function (e) {
            $(".J_videoOverlay").hide().find(".J_videoWrapper").html("")
        }), $(document).on("click", ".J_galleryShow", function (e) {
            $(".J_galleryOverlay").filter('[data-gallery="1"]').show(), $(".J_gallerySlide").css({"line-height": $(window).height() + "px"}), $(".J_gallerySlide").find("img").each(function (e, t) {
                var a = $(t).attr("data-origin");
                a && $(t).attr("src", a)
            }), XIAOMI.app.slide({slideObj: ".J_gallerySlide", edgeType: "rollback", autoPlay: !1});
            var t = $(".J_galleryClose"), a = $(".J_galleryOverlay");
            t.on("click", function () {
                a.hide()
            })
        })
    }

    var c = $("#chatContent"), h = $("#J_fullPics .pic");
    e.prototype = {
        add: function (e) {
            return this._last ? this._last = this._last._next = {
                el: e,
                _next: null
            } : this._last = this._first = {el: e, _next: null}, this
        }
    }, p()
});