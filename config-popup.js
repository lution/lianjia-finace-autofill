var stor = chrome.storage.local

function saveConfig() {
    allin = $("#checkboxAllin").prop("checked");
    customValue = $("#inputInvestValue").prop("value") == '' ? 0 : $("#inputInvestValue").prop('value');
    password = $("#inputPassword").prop("value")

    stor.set({
        allin: allin,
        custom_value: customValue,
        jy_pass: password
    }, function() {
        location.reload();
    });

};

function loadConfig() {
    stor.get({
        allin: false,
        custom_value: 0,
        jy_pass: null
    }, function(res) {
        $("#inputPassword").prop("value", res.jy_pass);
        $("#inputInvestValue").prop("disabled", res.allin);
        $("#inputInvestValue").prop("value", res.allin || res.custom_value == 0 ? '' : res.custom_value);
        $("#checkboxAllin").prop("checked", res.allin ? true : false);
    });
}

$(document).ready(function () {

    loadConfig();

    $("#checkboxAllin").click(function () {
        if ($(this).prop('checked')) {
            console.log('all in checkbox is checked, disabling custom value input');
            $("#inputInvestValue").prop("disabled", true)
        } else {
            $("#inputInvestValue").prop("disabled", false)
        }
    });

    document.getElementById("btnUpdateConfig").addEventListener('click', saveConfig);

});

