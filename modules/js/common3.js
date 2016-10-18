/**
 * Created by Administrator on 2016/10/8.
 */


$(function() {
    console.log("common3");

    var _rq = new Date();
    $(".ccc").css("cursor","pointer");
    var _1week = new Date(_rq.getTime() - 1000 * 60 * 60 * 24 * 7);
    var _1month = new Date(_rq.getTime() - 1000 * 60 * 60 * 24 * 30);
    var _3month = new Date(_rq.getTime() - 1000 * 60 * 60 * 24 * 90);
    var _1year = new Date(_rq.getTime() - 1000 * 60 * 60 * 24 * 365);
    function cho() {
        $(".cd").on('click', function () {
            var _cd1 = $(".recharge:visible input:first");
            var _cd2 = $(".recharge:visible input:last");
            _cd1.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate());
            _cd2.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate())
        });
        $(".cw").on('click', function () {
            var _cd1 = $(".recharge:visible input:first");
            var _cd2 = $(".recharge:visible input:last");
            _cd1.val(_1week.getFullYear() + "-" + (_1week.getMonth() + 1) + "-" + _1week.getDate());
            _cd2.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate())
        });
        $(".cm").on('click', function () {
            var _cd1 = $(".recharge:visible input:first");
            var _cd2 = $(".recharge:visible input:last");
            _cd1.val(_1month.getFullYear() + "-" + (_1month.getMonth() + 1) + "-" + _1month.getDate());
            _cd2.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate())
        });
        $(".cm3").on('click', function () {
            var _cd1 = $(".recharge:visible input:first");
            var _cd2 = $(".recharge:visible input:last");
            _cd1.val(_3month.getFullYear() + "-" + (_3month.getMonth() + 1) + "-" + _3month.getDate());
            _cd2.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate())
        });
        $(".cy").on('click', function () {
            var _cd1 = $(".recharge:visible input:first");
            var _cd2 = $(".recharge:visible input:last");
            _cd1.val(_1year.getFullYear() + "-" + (_1year.getMonth() + 1) + "-" + _1year.getDate());
            _cd2.val(_rq.getFullYear() + "-" + (_rq.getMonth() + 1) + "-" + _rq.getDate())
        });
    }

    cho()
})
