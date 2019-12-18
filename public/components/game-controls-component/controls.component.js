$(document).ready(function () {
    var muehleControls = new Vue({
        el: '#muehle-app-controls'
    });
});

Vue.component('game-controls', {
    template: `
    <div>
        <br>
        <div class="row">
            <div class="col mr-5 ml-5">
                <div class="text-center">
                    <a id="start_game" href="" class="btn btn-outline-light">Start new game</a>
                </div>
            </div>
        </div>
        <div class="row mt-2"></div>
        <div class="row  mr-5 ml-5">
            <div class="col-md-6">
                <div class="text-center">
                    <a id="undo" href="" class="btn btn-outline-light" >Undo</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="text-center">
                    <a id="redo" href="" class="btn btn-outline-light">Redo</a>
                </div>
            </div>
        </div>
    </div>`
});