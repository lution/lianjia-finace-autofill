var config = {
    "allin": null,
    "customValue": null
};

function allin() {
    $(".qt").click();
}

function customizeValue(m) {
    $(".pr>input.txt").value=m;
}

function bingo() {
    $(".bingo").prop("checked", true);
}

function fillPass(p) {
    $("input[type=password][class*=jyMms]").prop("value", p)
}

function bid() {
    $("input.butInfo").click()
}

function submit() {
    $("input.sureBut").click()
}

function autoFill() {

}