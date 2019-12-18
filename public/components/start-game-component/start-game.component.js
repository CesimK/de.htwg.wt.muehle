$(document).ready(function () {
    var start = new Vue({
        el: '#startgame'
    });
});

Vue.component('start-game', {
    template: `
     <div class="box-loading align-content-center">
    <div class="loading wrapper">
        <div class="line line1">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line2">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line3">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line4">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line5">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line6">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line7">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line8">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line9">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line10">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
        <div class="line line11">
            <span class="circle circle-top"></span>
            <div class="dotted">
                <span class="dot dot-top"></span>
                <span class="dot dot-middle-top"></span>
                <span class="dot dot-middle-bottom"></span>
                <span class="dot dot-bottom"></span>
            </div>
            <span class="circle circle-bottom"></span>
        </div>
    </div>
    </div>

    <div class="loaded_after_5sec">
            <div id="wrapper">
                <a href="/game" class="my-super-cool-btn">
                    <span>PLAY</span>
                </a>
            </div>
    </div>`
});
