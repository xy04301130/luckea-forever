function move_obj(o, e, i, t, n, r, c, s) {
    if (void 0 != o) {
        e = void 0 == e || "" == e ? $(window).width() : e,
        i = void 0 == i || "" == i ? $(window).height() : i,
        t = void 0 == t || "" == t ? 3 : t,
        n = void 0 == n || "" == n ? 3 : n,
        r = void 0 == r || "" == r ? 0 : r,
        c = void 0 == c || "" == c ? 0 : c,
        s = void 0 == s || "" == s ? 80 : s;
        var d = setInterval(function() {
            l()
        }, s);
        $(o).mouseover(function() {
            $(this).children(".close_port").show(),
            clearInterval(d)
        }),
        $(o).mouseout(function() {
            $(this).children(".close_port").hide(),
            d = setInterval(function() {
                l()
            }, s)
        });
        $(o).append('<div class="close_port">×</div>'),
        $(".close_port").css({
            position: "absolute",
            display: "none",
            width: "20px",
            height: "20px",
            top: 0,
            right: 0,
            color: "red",
            border: "1px solid red",
            background: "#ccc",
            textAlign: "center",
            lineHeight: "20px",
            cursor: "pointer"
        }),
        $(o).on("click", ".close_port", function() {
            $(o).find(".close_port").trigger("mouseover"),
            clearInterval(d),
            $(this).parent().remove()
        })
    } else
        alert("方法调用错误,请传入正确参数!");
    function l() {
        t = r >= e - $(o).width() || r < 0 ? -t : t,
        n = c >= i - $(o).height() || c < 0 ? -n : n,
        r += t,
        c += n,
        $(o).css({
            left: r,
            top: c
        })
    }
}
