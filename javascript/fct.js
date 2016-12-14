$(function () {
    getInfo();
});

function getInfo() {
    $.ajax({
        url: '/javascript/ct.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
            var whatCT = data.history.what;
            $('#whatCT').text(whatCT);
            var whatCTM = data.history.whatmore;
            $('#whatCTM').text(whatCTM);
            var whatCTMO = data.history.whatmost;
            $('#whatCTMO').text(whatCTMO);
            var hist = data.history.hist;
            $('#hist').text(hist);
            var morehist = data.history.morehist;
            $('#morehist').text(morehist);
        }
    });
}
