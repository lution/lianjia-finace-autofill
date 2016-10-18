var stor = chrome.storage.local
var config = {
    customValue: null,
    allin: null
};

$(document).ready(function () {

    $("#inputInvestValue").prop("disabled", config.allin);
    $("#inputInvestValue").prop("value", config.customValue == 0 ? '' : config.customValue);
    $("#checkboxAllin").prop("checked", config.allin ? true : false);

    $("#checkboxAllin").click(function () {
        if ($(this).prop('checked')) {
            console.log('all in checkbox is checked, disabling custom value input');
            $("#inputInvestValue").prop("disabled", true)
        } else {
            $("#inputInvestValue").prop("disabled", false)
        }
    });

    $("btnUpdateConfig").click(function () {
        config.allin = $("#checkboxAllin").prop("checked");
        config.customValue = $("#inputInvestValue").prop("value") == '' ? 0 : $("#inputInvestValue").prop('value');

        stor.set(config);
    });
});
