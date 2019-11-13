function place(i) {
    $(`#field${i+1}`).click(async function () {
        const Http = new XMLHttpRequest();
        const url='/game/' + i;
        Http.open("GET", url);
        Http.send();
        window.location.href = url
    });
}

$(document).ready(function () {
    for (i = 1; i <= 24; i++) {
        document.getElementById(`field${i}`).onclick = place(i-1)
    }
})  ;