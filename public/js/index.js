$(function () {
    var submitBtn = $('#submit');
    submitBtn.click(function () {
        var inputSelector = $(':input');
        var account = inputSelector[0].value;
        var password = inputSelector[1].value;
        var remember = $(':input:checked').length;
        $.ajax({
            url: 'http://127.0.0.1:8081/posy/',
            data: {
                account: account,
                password: password,
                remember: remember
            },
            type: 'POST',
            cache: false,
            contentType: 'application/json',
            processData: false,
            success: function (data) {
                alert('success' + data);
            },
            error: function () {
                alert('error');
            }
        });
    })
});