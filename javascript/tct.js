$(function () {
    getInfo();
});

function getInfo() {
    $.ajax({
        url: '/javascript/type.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
            var Low = data.ctype.low;
            $('#Low').text(Low);
            var High = data.ctype.high;
            $('#High').text(High);
            var Lyric = data.ctype.lyric;
            $('#Lyric').text(Lyric);
            var Forced = data.ctype.forced;
            $('#Forced').text(Forced);
        }
    });
}
