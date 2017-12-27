$(function () {
    submitBtn = $('#submit');
    submitBtn.click(function () {
        var inputSelector = $(':input');
        var account = inputSelector[0].value;
        var password = inputSelector[1].value;
        var remember = $(':input:checked').length;
        $.ajax({
            url: '/posy',
            data: JSON.stringify({
                account: account,
                password: password,
                remember: remember
            }),
            type: 'POST',
            cache: false,
            dataType: 'json',
            contentType: 'application/json',
            processData: false,
            success: function (data) {
                alert('success=>' + data);
            },
            error: function () {
                alert('error');
            }
        });
    })
});
