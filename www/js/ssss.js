/**
 * Created by shenyinlin on 2017/5/10.
 */
/**
 * Created by Administrator on 2017/1/4.
 */
!function () {
  "use strict";
  function e(t, a, s, n, c, i) {
    var h = t.length, o = t.substring(0, s);
    $("." + a).html(o), s++, s > h || (y = setTimeout(function () {
      e(t, a, s, n)
    }, 80), c && (0 !== n ? i ? setTimeout(c, 80 * h + n + i) : setTimeout(c, 80 * h + n) : c()), T = s)
  }

  function t() {
    setTimeout(function () {
      e(chodoPaper[0], "chodo .tjduihua p", 1, 1200, function () {
        e(chodoPaper[1], "chodo .tjduihua p", 1, 1200, function () {
          e(chodoPaper[2], "chodo .tjduihua p", 1, 1200)
        }, 4160)
      })
    }, 7e3)
  }

  function a() {
    clearTimeout(x), clearTimeout(q), $(".street .shan").stop(), $(".street .yun").stop(), $(".street .jianzhu").stop(), $(".street .tjshen").stop(), $(".street .tanghulu").stop()
  }

  function s(e, t) {
    var a = parseInt(E.css("left"), 10), n = parseInt(B.css("left"), 10), c = parseInt(L.css("left"), 10);
    "right" === e ? (E.animate({left: a - 200}, 1e3, "linear"), B.animate({left: n - 150}, 1e3, "linear"), L.animate({left: c - 355}, 1e3, "linear")) : (E.animate({left: a + 200}, 1e3, "linear"), B.animate({left: n + 150}, 1e3, "linear"), L.animate({left: c + 355}, 1e3, "linear")), x = setTimeout(function () {
      s(e)
    }, 1e3)
  }

  function n(e) {
    if (P = parseInt($(".street .jianzhu").css("left"), 10), P >= 300 && "left" === e) a(); else if (!$(".street").hasClass("thl") && P <= -350 && "right" === e && !$(".street").hasClass("yu")) 0 === I && ($(".taijian .duihua").addClass("start").removeClass("end"), setTimeout(function () {
      $(".taijian .duihua").addClass("end").removeClass("start")
    }, 1760), I = 1), a(); else if ($(".street").hasClass("dt") && $(".street").hasClass("cq") || !(P <= -4200) || "right" !== e)if (P >= -3990 && "left" === e && $(".street").hasClass("yz")) $(".zhishi3").removeClass("active"), q = setTimeout(function () {
      n(e)
    }, 15); else if (P <= -4680 && P >= -4915) $(".zhishi2").hide(), q = setTimeout(function () {
      $(".street .taijian").css("top", 758 - 60 * (-4680 - P) / 235), n(e)
    }, 15); else if (P < -4915 && P >= -5150) q = setTimeout(function () {
      $(".street .taijian").css("top", 758 - 60 * (P + 5150) / 235), n(e)
    }, 15); else if (P < -5550 && "right" === e) {
      if (a(), 0 === F) {
        var t = document.getElementById("qiezi");
        t.paused && t.play(), setTimeout(function () {
          $(".yongzheng .maoyan").addClass("active")
        }, 2e3), F = 1
      }
      q = setTimeout(function () {
        n(e)
      }, 15)
    } else q = setTimeout(function () {
      n(e)
    }, 15); else a()
  }

  function c() {
    $(".right_btn").bind("touchstart", function () {
      return o(), $(".street").hasClass("active") || ($(this).addClass("active"), $(".street").hasClass("bmh") ? ($(".street .tjshen").removeClass("leftFace"), $(".street .tjshen").addClass("tjhaveBmhRight")) : $(".street").hasClass("thl") ? ($(".street .tanghulu").addClass("right_zou"), $(".street .tanghulu").addClass("active"), $(".street .tanghulu").removeClass("rightFace"), $(".street .tanghulu").css({
        position: "fixed",
        left: "50px"
      }), $(".street .tjshen").removeClass("leftFace"), $(".street .tjshen").addClass("active")) : ($(".street .tjshen").removeClass("leftFace"), $(".street .tjshen").addClass("active")), s("right"), n("right")), !1
    })
  }

  function i() {
    $(".left_btn").bind("touchstart", function () {
      return h(), $(".street").hasClass("active") || ($(this).addClass("active"), $(".street").hasClass("bmh") ? ($(".street .tjshen").addClass("tjhaveBmhLeft"), $(".street .tjshen").addClass("leftFace")) : $(".street").hasClass("thl") ? ($(".street .tanghulu").addClass("left_zou"), $(".street .tanghulu").addClass("activeLeft"), $(".street .tanghulu").css({
        position: "fixed",
        left: "350px"
      }), $(".street .tjshen").addClass("activeLeft"), $(".street .tjshen").addClass("leftFace")) : ($(".street .tjshen").addClass("activeLeft"), $(".street .tjshen").addClass("leftFace")), s("left"), n("left")), !1
    })
  }

  function h() {
    $(".street .posBtn .right_btn").unbind("touchstart")
  }

  function o() {
    $(".street .posBtn .left_btn").unbind("touchstart")
  }

  function m(e) {
    $(".street ." + e).unbind("touchstart"), $("." + e + " .duihua").addClass("start").removeClass("end"), setTimeout(function () {
      $("." + e + " .duihua").addClass("end").removeClass("start"), $(".street ." + e).bind("touchstart", function () {
        m(e)
      })
    }, 1760)
  }

  function r(e) {
    for (var t in e)return {people: t}
  }

  function g(t, a, s, n) {
    "yu" === t && 0 === k ? $(".fast_ceng .tj .pic").css("background-position", "-157px 0") : "thl" !== t || 2 !== k && 3 !== k ? "dt" === t && 0 === k || "yz" === t && 3 === k ? $(".fast_ceng .tj .pic").css("background-position", "-628px 0") : "bmh" === t && 0 === k ? $(".fast_ceng .tj .pic").css("background-position", "-942px 0") : "yz" === t && 6 === k || "yz" === t && 4 === k || "thl" === t && 6 === k ? $(".fast_ceng .tj .pic").css("background-position", "-785px 0") : "yz" === t && 9 === k ? $(".fast_ceng .tj .pic").css("background-position", "-314px 0") : $(".fast_ceng .tj .pic").css("background-position", "0 0") : $(".fast_ceng .tj .pic").css("background-position", "-471px 0");
    var c, i;
    k >= a.length ? "yu" === t ? k >= a.length + 1 ? (k = 0, s()) : ($(".tanceng .a_yu").show().siblings().hide(), $(".tanceng .close_btn").hide(), $(".tanceng").addClass("activeStart").removeClass("activeEnd"), $(".tanceng .a_" + t + " .m_btn").bind("touchstart", function () {
      $(this).addClass("active"), J = !1, setTimeout(function () {
        $(".tanceng").addClass("activeEnd").removeClass("activeStart"), $(".fast_ceng").hide()
      }, 200), setTimeout(function () {
        $(".tanceng .rw_btn").removeClass("active"), $(".street").addClass(t), k++, g(t, a, s)
      }, 800)
    })) : (k = 0, s()) : 0 === k ? ($(".tanceng .cuo").unbind("touchstart"), $(".tanceng .dui").unbind("touchstart"), $(".tanceng .m_btn").unbind("touchstart"), $(".fast_ceng .tj").show().siblings().hide(), $(".fast_ceng .tj .text").html(a[0].tj), $(".fast_ceng").show(), k++, setTimeout(function () {
      g(t, a, s, n)
    }, 1200)) : n === k + 1 ? ($(".tanceng").addClass("activeStart").removeClass("activeEnd"), "yu" === t ? $(".tanceng .a_" + t).show().siblings().hide() : $(".tanceng .q_" + t).show().siblings().hide(), $(".tanceng .cuo").bind("touchstart", function () {
      $(this).addClass("active"), setTimeout(function () {
        $(".tanceng").addClass("activeEnd").removeClass("activeStart")
      }, 200), setTimeout(function () {
        $(".tanceng .rw_btn").removeClass("active"), $(".cuo").unbind("touchstart"), $(".fast_ceng ." + t).show().siblings().hide(), e(a[k][t + "false"], "fast_ceng ." + t + " .text", 1, 1200, function () {
          $(".tanceng").addClass("activeStart").removeClass("activeEnd"), $(".tanceng .q_" + t).show().siblings().hide()
        })
      }, 800)
    }), $(".tanceng .dui").bind("touchstart", function () {
      $(this).addClass("active"), setTimeout(function () {
        $(".tanceng").addClass("activeEnd").removeClass("activeStart")
      }, 200), setTimeout(function () {
        $(".tanceng .rw_btn").removeClass("active"), $(".fast_ceng ." + t).show().siblings().hide(), e(a[k][t + "true"], "fast_ceng ." + t + " .text", 1, 1200, function () {
          $(".tanceng").addClass("activeStart").removeClass("activeEnd"), $(".tanceng .a_" + t).show().siblings().hide()
        })
      }, 800)
    }), $(".tanceng .a_" + t + " .m_btn").bind("touchstart", function () {
      $(this).addClass("active"), setTimeout(function () {
        $(".tanceng").addClass("activeEnd").removeClass("activeStart")
      }, 200), setTimeout(function () {
        $(".tanceng .rw_btn").removeClass("active"), $(".street").addClass(t), k++, g(t, a, s)
      }, 800)
    }), $(".tanceng .close_btn").bind("touchstart", function () {
      $(".tanceng").addClass("activeEnd").removeClass("activeStart"), $(".fast_ceng").hide(), k = 0
    })) : (c = r(a[k - 1]).people, i = r(a[k]).people, "tj" === i ? "tj" === c ? e(a[k][i], "fast_ceng .tj .text", 1, 1200, function () {
      g(t, a, s, n)
    }) : ($(".fast_ceng .tj").show().siblings().hide(), e(a[k][i], "fast_ceng .tj .text", 1, 1200, function () {
      g(t, a, s, n)
    })) : "tj" === c ? ($(".fast_ceng ." + t).show().siblings().hide(), e(a[k][i], "fast_ceng ." + t + " .text", 1, 1200, function () {
      g(t, a, s, n)
    })) : e(a[k][i], "fast_ceng ." + t + " .text", 1, 1200, function () {
      g(t, a, s, n)
    }), k++)
  }

  function d(e, t, a) {
  }

  function u(e, t, a, s) {
    clearTimeout(y), T = t[a][r(t[a]).people].length, $(".fast_ceng ." + r(t[a]).people + " .text").html(t[a][r(t[a]).people])
  }

  function f() {
    setTimeout(function () {
      e(chodo2_yz[0], "chodo2 .duihua_yz p", 1, 1200, function () {
        e(chodo2_yz[1], "chodo2 .duihua_yz p", 1, 1200, function () {
          $(".chodo2 .duihua_yz").removeClass("start").addClass("end"), l()
        })
      })
    }, 1760)
  }

  function l() {
    $(".chodo2 .duihua1").removeClass("end").addClass("start"), $(".chodo2 .tou3").addClass("active"), setTimeout(function () {
      $(".chodo2 .duihua2").removeClass("end").addClass("start"), $(".chodo2 .duihua1").removeClass("start").addClass("end"), $(".chodo2 .tou2").addClass("active"), setTimeout(function () {
        $(".chodo2 .duihua3").removeClass("end").addClass("start"), $(".chodo2 .duihua2").removeClass("start").addClass("end"), $(".chodo2 .tou1").addClass("active"), setTimeout(function () {
          $(".chodo2 .duihua_yz").removeClass("end").addClass("start"), $(".chodo2 .duihua3").removeClass("start").addClass("end"), $(".chodo2 .tou1").css("background-position", "0 -150px"), e(chodo2_yz[2], "chodo2 .duihua_yz p", chodo2_yz[2].length - 1, 1200, function () {
            e(chodo2_yz[3], "chodo2 .duihua_yz p", 1, 1200, function () {
              $(".chodo2 .tjduihua").removeClass("end").addClass("start"), $(".chodo2 .duihua_yz").removeClass("start").addClass("end"), setTimeout(function () {
                $(".shengzhi").show(), $(".shengzhi").addClass("active")
              }, 1760)
            })
          })
        }, 1760)
      }, 1760)
    }, 1760)
  }

  var p = navigator.userAgent;
  p.indexOf("Android") > -1 || p.indexOf("Adr") > -1, !!p.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  document.addEventListener("touchmove", function (e) {
    e.preventDefault()
  });
  for (var _ = (new Image, ["http://img2.cache.netease.com/f2e/news/craftsman_h5/images/sprite1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/icon4.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/maoyan.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/yongzheng.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/icon_q.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shangchao2.gif", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/ren33.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/s_tj.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/taijian.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datietou.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/duihua2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tou3.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/icon3.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zhuanshen1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tou1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/titou1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shirentou.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/titou.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/chodo2.jpg?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shan1.jpg?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/erhuyinfu.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q33.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zhaoxiang1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q3.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/index_logo.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zouthl.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/duihuaqipao_l.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tj_tou.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datangtou.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q_datie.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tou5.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tanghulu.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zhaoxiang.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tou2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/icon_rw.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/jianzhu4.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/taiyang.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shangchao1.gif", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zoutj.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/taijian1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/yun.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tankuang.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/taijian2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zouzl.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datiehuo.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/baomihua.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/hejiu.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/ciqi.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q_yu1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datietou1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q11.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/xiaorenloading.gif", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zoubdlb.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datang_bg.jpg?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/lianxiangqipao.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/icon2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/meng_01.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tou4.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/men_left.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q_btn.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/rwduihua.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shiren.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tiemo.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/erhu.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/font.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/liehu.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/q22.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/datiejiang.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/close.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/wuya.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/jiqi.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/duihua1.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/gebo.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/duihuaqipao_r.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/shangchao.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zhuanshen2.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/men_right.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/tjbmh.png?23", "http://img2.cache.netease.com/f2e/news/craftsman_h5/images/zoubmh.png?23"]), v = _.length, C = function () {
    1 == --v && ($(".loading-wrapper").hide(), $(".cover").addClass("load"), $(".cover .shangchao").addClass("open"), setTimeout(function () {
      $(".cover .shangchao").removeClass("open").addClass("active")
    }, 800))
  }, w = 0; w < _.length; w++) {
    var b = "__preload_image_" + w, z = window[b] = document.createElement("img");
    z.onload = z.oncomplete = z.onerror = function () {
      C(), z.onload = z.oncomplete = z.onerror = null, window[b] = null
    }, z.src = _[w]
  }
  var j = document.getElementById("music");
  j.play(), j.paused || ($(".music").addClass("active"), $(".music .yin").addClass("active")), $(".music").bind("touchstart", function () {
    j.paused ? (j.play(), $(".music .yin").addClass("active"), $(".music").addClass("active")) : (j.pause(), $(".music").removeClass("active"), $(".music .yin").removeClass("active"))
  }), $(".shangchao").bind("touchstart", function () {
    $(".chodo").show(), $(".cover .btn .shangchao1").css("opacity", 0), $(".cover .btn").removeClass("active"), $(".cover .btn .shangchao2").css("opacity", 1), $(".cover .btn .shangchao2").attr("src", $(".cover .btn .shangchao2").attr("data-src")), $(".cover").addClass("active"), $(".cover .shangchao").removeClass("active").addClass("close"), setTimeout(function () {
      $(".cover").hide(), $(".chodo").addClass("active"), t(), $(".street").show()
    }, 1e3), setTimeout(function () {
      $(".chodo").hide(), $(".street").addClass("active"), $(".street .tjshen").addClass("active"), o(), h(), setTimeout(function () {
        i(), c(), $(".street").removeClass("active"), $(".street .tjshen").removeClass("active")
      }, 2e3)
    }, 20500)
  });
  var y, T, x, q, P, E = $(".street .shan"), B = $(".street .yun"), L = $(".street .jianzhu"), F = 0, I = 0;
  $(".right_btn").bind("touchend", function () {
    return $(this).removeClass("active"), i(), $(".street").hasClass("bmh") ? ($(".street .tjshen").removeClass("tjhaveBmhRight"), $(".street .tanghulu").removeClass("active")) : ($(".street .tjshen").removeClass("active"), $(".street .tanghulu").removeClass("active")), $(".street").hasClass("thl") && $(".street .tanghulu").addClass("rightFace"), a(), clearTimeout(q), !1
  }), $(".left_btn").bind("touchend", function () {
    return $(this).removeClass("active"), c(), $(".street").hasClass("bmh") ? ($(".street .tjshen").removeClass("tjhaveBmhLeft"), $(".street .tanghulu").removeClass("active")) : ($(".street .tjshen").removeClass("activeLeft"), $(".street .tanghulu").removeClass("activeLeft"), $(".street .tanghulu").removeClass("rightFace")), a(), !1
  });
  var k = 0;
  $(".street .zhulan").bind("touchstart", function () {
    m("zhulan")
  }), $(".street .tiemo").bind("touchstart", function () {
    m("tiemo")
  }), $(".street .budian").bind("touchstart", function () {
    m("budian")
  }), $(".street .erhu").bind("touchstart", function () {
    var e = document.getElementById("erhu");
    e.paused && e.play()
  }), $(".street .titou").bind("touchstart", function () {
    m("titou")
  }), $(".street .hejiu").bind("touchstart", function () {
    m("hejiu")
  });
  var S = 0, O = 1, A = document.getElementById("bmh_ceng");
  A.addEventListener("touchstart", function () {
    0 === S ? m("baomihua") : ($(".fast_ceng").addClass("bmh_now"), g("bmh", bmhPaper, function () {
      $(".zhishi3").hide(), $(".fast_ceng").hide(), $(".fast_ceng").removeClass("bmh_now"), $(".street").addClass("bmh"), $(".baomihua .zhishi1").hide(), $(".street .taijian .haveBmh").addClass("active"), $(".street .taijian .tjshen").addClass("tjhaveBmh"), $(".zhishi2").show(), S = 0
    }, 3))
  }, !1);
  var R = document.getElementById("ciqi");
  R.addEventListener("touchstart", function () {
    1 === O ? ($(".fast_ceng").addClass("cq_now"), g("cq", ciqiPaper, function () {
      $(".fast_ceng").removeClass("cq_now"), $(".fast_ceng").hide(), $(".street .tanghulu .haveCiqi").addClass("active"), $(".ciqi .zhishi1").hide(), O = 0, $(".street").hasClass("dt") && ($(".fast_ceng").addClass("thl2_now"), o(), h(), setTimeout(function () {
        $(".street .taijian .tjshen").addClass("leftFace"), g("yu", thlPaper2, function () {
          i(), c(), $(".zhishi2").addClass("active"), $(".fast_ceng").hide(), $(".street .taijian .tjshen").removeClass("leftFace"), $(".fast_ceng").removeClass("thl2_now"), $(".street .taijian .haveYu").addClass("active"), $(".street").removeClass("thl"), $(".street .tanghulu").addClass("activeLeft"), $(".street .tanghulu").animate({left: -300}, 1500, function () {
            $(".street .tanghulu").css({position: "absolute", left: 1084}).removeClass("rightFace")
          })
        })
      }, 2080))
    }, 3)) : m("ciqi")
  }, !1), $(".street .tanghulu").bind("touchstart", function () {
    $(".fast_ceng").addClass("thl1_now"), $(".street").addClass("thl"), $(".street .tanghulu").unbind("touchstart"), g("thl", thlPaper, function () {
      $(".fast_ceng").removeClass("thl1_now"), $(".street .tanghulu").addClass("rightFace"), $(".street .tanghulu").css({
        position: "fixed",
        left: "50px"
      }), $(".street .tanghulu .yuanyu").hide(), $(".street .tanghulu .yuguang").hide(), $(".street .tanghulu .zhishi1").hide(), $(".fast_ceng").hide()
    })
  });
  var D = 1, N = document.getElementById("datie");
  N.addEventListener("touchstart", function () {
    return 1 === D ? ($(".fast_ceng").addClass("dt_now"), g("dt", datiePaper, function () {
      $(".fast_ceng").removeClass("dt_now"), $(".fast_ceng").hide(), $(".street .datie").unbind("touchstart"), $(".street .tanghulu .haveDatie").addClass("active"), $(".datie .zhishi1").hide(), D = 0, $(".street").hasClass("cq") && ($(".fast_ceng").addClass("thl2_now"), o(), h(), setTimeout(function () {
        $(".street .taijian .tjshen").removeClass("leftFace"), g("yu", thlPaper2, function () {
          i(), c(), $(".zhishi2").addClass("active"), $(".fast_ceng").hide(), $(".street .taijian .tjshen").removeClass("leftFace"), $(".fast_ceng").removeClass("thl2_now"), $(".street .taijian .haveYu").addClass("active"), $(".street").removeClass("thl"), $(".street .tanghulu").addClass("activeLeft"), $(".street .tanghulu").animate({left: -300}, 1500), setTimeout(function () {
            $(".street .tanghulu").css({position: "absolute", left: "-300px"}).removeClass("rightFace")
          }, 2e3)
        })
      }, 2080))
    }, 3)) : m("datie"), !1
  });
  var U = 0, Y = document.getElementById("yongzheng");
  Y.addEventListener("touchstart", function () {
    0 === U ? ($(".fast_ceng").addClass("yz1_now"), g("yz", yzPaper, function () {
      $(".street").addClass("yz"), $(".fast_ceng").hide(), $(".fast_ceng").removeClass("yz1_now"), $(".baomihua .daizi").css("background-position", "-182px 0"), $(".baomihua .zhishi1").show(), $(".zhishi3").addClass("active"), $(".wuya").addClass("active"), S = 1, U = 1
    })) : 1 === U && $(".street").hasClass("bmh") ? ($(".fast_ceng").addClass("yz2_now"), g("yz", yzPaper2, function () {
      $(".fast_ceng").removeClass("yz2_now"), $(".fast_ceng").hide(), $(".street .yongzheng .shenti").addClass("zouRight"), $(".street .yongzheng .gebo").hide(), $(".street .taijian").addClass("zouRight"), $(".street .taijian .tjshen").addClass("active"), setTimeout(function () {
        $(".street").hide(), $(".chodo2").show(), $(".chodo2").addClass("active"), setTimeout(function () {
          $(".chodo2 .duihua_yz").addClass("start").removeClass("end"), f()
        }, 2e3)
      }, 800)
    })) : ($(".yongzheng .duihua").addClass("start").removeClass("end"), setTimeout(function () {
      $(".yongzheng .duihua").addClass("end").removeClass("start")
    }, 1760))
  }, !1);
  var J = !1, K = document.getElementById("craftsman_h5_wrap");
  K.addEventListener("touchstart", function () {
    var e = $(".fast_ceng").attr("class");
    return $(".fast_ceng").is(":hidden") || (e.indexOf("thl1") > -1 ? T < thlPaper[k - 1][r(thlPaper[k - 1]).people].length ? u("thl", thlPaper, k - 1) : d("thl", thlPaper, k - 1) : e.indexOf("thl2") > -1 ? T < thlPaper2[k - 1][r(thlPaper2[k - 1]).people].length ? u("thl", thlPaper2, k - 1) : d("thl", thlPaper2, k - 1) : e.indexOf("yz1") > -1 ? T < yzPaper[k - 1][r(yzPaper[k - 1]).people].length ? u("yz", yzPaper, k - 1) : d("yz", yzPaper, k - 1) : e.indexOf("yz2") > -1 && (T < yzPaper2[k - 1][r(yzPaper2[k - 1]).people].length ? u("yz", yzPaper2, k - 1) : d("yz", yzPaper2, k - 1))), !1
  }, !1), $(".shengzhi .chongwan").bind("touchstart", function () {
    location.reload()
  }), $(".shengzhi .canjia_btn").bind("touchstart", function () {
    return $(".canjia").show(), window.location.href = "http://c.m.163.com/news/a/C1B7KE5205118VJ5.html?spss=newsapp&spsw=1", !1
  }), $(".shengzhi .close_canjia").bind("touchstart", function () {
    $(".canjia").hide()
  }), $(".share_page").bind("touchstart", function () {
    $(".wbtn").show(), $(".share_page").hide()
  }), $(".shengzhi .chuanzhi").bind("touchstart", function () {
    isNewsApp() || ($("#shareBoxLayout").hide(), $(".share_page").show(), $(".wbtn").hide(), $(".share_page").addClass("active"))
  }), $(".wbtn .share").bind("touchstart", function () {
    isNewsApp() || ($("#shareBoxLayout").hide(), $(".share_page").show(), $(".wbtn").hide(), $(".share_page").addClass("active"))
  })
}();
