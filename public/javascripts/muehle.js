let csrf = $('input[name="csrfToken"]').attr("name");

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json',
        //'Accept': 'application/json'
    }
});

function place(i) {
    const field = $(`#field${i + 1}`);
    if (field !== undefined) {
        field.click(function () {
            $.ajax({
                method: "GET",
                url: '/game/' + i,
                dataType: "json",
            });
            window.location.href = '/game';
        })
    } else {
        throw Error('Selected Field is unavailable');
    }
}

function move(i,j) {
    const start = $(`#field${i + 1}`);
    const destination = $(`#field${j + 1}`);
    if ((start && destination) !== undefined && (start && destination) === true ) {
        $(start).click(function () {
            $(destination).click(function () {
                $.ajax({
                    method: "GET",
                    url: '/move/' + i + '/' + j,
                    dataType: "json",
                });
            });
            window.location.href = '/game';
        })
    }
}

function remove(i) {
    const field = $(`#field${i + 1}`);
    if (field.value !== '0') {
        field.click(function () {
            $.ajax({
                method: "GET",
                url: '/remove/' + i,
                dataType: "json",
            });
            window.location.href = '/game';
        })
    } else {
        throw Error('Field doesn\' contain removable stone');
    }
}

function init_Buttons() {
    $(`#start_game`).click(function () {
        $.ajax({
            method: "GET",
            url: '/new',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#undo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/undo',
            dataType: "json",
        });
        window.location.href = '/game';
    });

    $(`#redo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/redo',
            dataType: "json",
        });
        window.location.href = '/game';
    })
}

//doesn't function correctly!
//TODO: SE Project needs Rework! ToJson is not available through controller!
function loadJson() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        error: function () {
            init_Buttons()
        }
    })
}

//example without using Ajax
function init_Game() {
    $('#start_game').click(function () {
        const Http = new XMLHttpRequest();
        const url = '/new';
        Http.open("GET", url);
        Http.send();
        window.location.href = '/game';
    })
}

$(document).ready(function () {
    loadJson();
    for (i = 1; i <= 24; i++) {
        $(`field${i}`).clickEvent = place(i-1);
    }
    //init_Game()
    //init_Buttons();
}) ;