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
    document.getElementById('field1').onclick = place(0);
    document.getElementById('field2').onclick = place(1);
    document.getElementById('field3').onclick = place(2);
    document.getElementById('field4').onclick = place(3);
    document.getElementById('field5').onclick = place(4);
    document.getElementById('field6').onclick = place(5);
    document.getElementById('field7').onclick = place(6);
    document.getElementById('field8').onclick = place(7);
    document.getElementById('field9').onclick = place(8);
    document.getElementById('field10').onclick = place(9);
    document.getElementById('field11').onclick = place(10);
    document.getElementById('field12').onclick = place(11);
    document.getElementById('field13').onclick = place(12);
    document.getElementById('field14').onclick = place(13);
    document.getElementById('field15').onclick = place(14);
    document.getElementById('field16').onclick = place(15);
    document.getElementById('field17').onclick = place(16);
    document.getElementById('field18').onclick = place(17);
    document.getElementById('field19').onclick = place(18);
    document.getElementById('field20').onclick = place(19);
    document.getElementById('field21').onclick = place(20);
    document.getElementById('field22').onclick = place(21);
    document.getElementById('field23').onclick = place(22);
    document.getElementById('field24').onclick = place(23);
})  ;