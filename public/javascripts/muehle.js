let csrf = $('input[name="csrfToken"]').attr("name");
let json;
let color = true;
let fill;

setTimeout(function () {
    $('.loaded_after_5sec').show();
}, 4000);

setTimeout(function () {
    $('.loading').hide();
}, 4000);


$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': csrf,
        'Content-Type': 'application/json',
        //'Accept': 'application/json'
    }
});

function updateGrid() {
    window.location.href = '/game'
}

function place(i) {
    const field = $(`#field${i + 1}`);
    if (field !== undefined) {
        field.click(function () {
            $.ajax({
                method: "GET",
                url: '/game/' + i,
                dataType: "json",
            });
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
    });

    $(`#undo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/undo',
            dataType: "json",
        });
    });

    $(`#redo`).click(function () {
        $.ajax({
            method: "GET",
            url: '/redo',
            dataType: "json",
        });
    })
}

//TODO: SE Project needs Rework! ToJson is not available through controller!
function loadJson() {
    $.ajax({
        method: "GET",
        url: "/json",
        dataType: "json",

        success: function () {
            for (let i = 1; i <= 24; i++) {
                $(`field${i}`).clickEvent = place(i-1);
            }
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

function connectWebSocket() {
    const websocket = new WebSocket("ws://localhost:9000/websocket");
    websocket.setTimeout;

    websocket.onopen = function(event) {
        console.log("Connected to Websocket");
    };

    websocket.onclose = function () {
        console.log('Connection with Websocket Closed!');
    };

    websocket.onerror = function (error) {
        console.log('Error in Websocket occurred: ' + error);
    };

    websocket.onmessage = function (e) {
        if (typeof e.data === "string") {
            json = JSON.parse(e.data);
            updateGrid();
            for (let i = 1; i <= 24; i++) {
                $(`field${i}`).clickEvent = place(i-1);
            }
            init_Buttons()
        }

    };
}

function placeColoredStone() {
    changeColor();

    $('#l6DnU6HXv').on("click", function() {
        $('#l6DnU6HXv').css({ fill: fill });
        changeColor();
    });

    $('#b2ErXBqKt7').on("click", function() {
        $('#b2ErXBqKt7').css({ fill: fill });
        changeColor();
    });

    $('#a4uE0zCMG1').on("click", function() {
        $('#a4uE0zCMG1').css({ fill: fill });
        changeColor();
    });

    $('#c4w1PI0rF0').on("click", function() {
        $('#c4w1PI0rF0').css({ fill: fill });
        changeColor();
    });

    $('#a5DRjITAUa').on("click", function() {
        $('#a5DRjITAUa').css({ fill: fill });
        changeColor();
    });

    $('#ac612WGkb').on("click", function() {
        $('#ac612WGkb').css({ fill: fill });
        changeColor();
    });

    $('#fk1nTDyFq').on("click", function() {
        $('#fk1nTDyFq').css({ fill: fill });
        changeColor();
    });

    $('#aBsc56hJb').on("click", function() {
        $('#aBsc56hJb').css({ fill: fill });
        changeColor();
    });

    $('#a3o9XKplJH').on("click", function() {
        $('#a3o9XKplJH').css({ fill: fill });
        changeColor();
    });

    $('#bjmGZa1Ib').on("click", function() {
        $('#bjmGZa1Ib').css({ fill: fill });
        changeColor();
    });

    $('#dnRyXiNWR').on("click", function() {
        $('#dnRyXiNWR').css({ fill: fill });
        changeColor();
    });

    $('#pkZsA1YHB').on("click", function() {
        $('#pkZsA1YHB').css({ fill: fill });
        changeColor();
    });

    $('#d1ukEKrwVB').on("click", function() {
        $('#d1ukEKrwVB').css({ fill: fill });
    });

    $('#hqKdDdo1c').on("click", function() {
        $('#hqKdDdo1c').css({ fill: fill });
        changeColor();
    });

    $('#a2Oq3DfxDB').on("click", function() {
        $('#a2Oq3DfxDB').css({ fill: fill });
        changeColor();
    });

    $('#a3F3KwHv3').on("click", function() {
        $('#a3F3KwHv3').css({ fill: fill });
        changeColor();
    });

    $('#bg0iCMDOH').on("click", function() {
        $('#bg0iCMDOH').css({ fill: fill });
        changeColor();
    });

    $('#cdmdmtNZw').on("click", function() {
        $('#cdmdmtNZw').css({ fill: fill });
        changeColor();
    });

    $('#cjafwvEdr').on("click", function() {
        $('#cjafwvEdr').css({ fill: fill });
        changeColor();
    });

    $('#a1yjNcWntD').on("click", function() {
        $('#a1yjNcWntD').css({ fill: fill });
        changeColor();
    });

    $('#a1eXdGbnm4').on("click", function() {
        $('#a1eXdGbnm4').css({ fill: fill });
        changeColor();
    });

    $('#aQVFMIor').on("click", function() {
        $('#aQVFMIor').css({ fill: fill });
        changeColor();
    });

    $('#b91vujT6U').on("click", function() {
        $('#b91vujT6U').css({ fill: fill });
        changeColor();
    });

    $('#at1eUckaJ').on("click", function() {
        $('#at1eUckaJ').css({ fill: fill });
        changeColor();
    });
}

function changeColor()
{
    if (color === true) {
        fill = "#ffaa11";
        color = false;
    } else {
        fill = "#000000";
        color = true;
    }

    return color && fill;
}

$(document).ready(function () {
    loadJson();
    connectWebSocket();
    placeColoredStone();
    $(".loading").show();
    $(".loaded_after_5sec").hide();
}) ;