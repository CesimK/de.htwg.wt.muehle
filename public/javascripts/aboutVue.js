$(document).ready(function () {
    var rules = new Vue({
        el: '#about'
    });

    var start = new Vue({
        el: '#startgame'
    });

});

Vue.component('rules', {
    template: `
    <div id="rules">
        <h2>Rules</h2>
        <div class="textarea text-justify">
            <p class="col-1"></p>
            <p class="ml-4 mr-4">
                The board consists of a grid with twenty-four intersections or points. Each player has nine pieces,
                or "men", usually coloured black and white. Players try to form 'mills'—three of their own men lined
                horizontally or vertically—allowing a player to remove an opponent's man from the game. <br>

                A player wins by reducing
                the opponent to two pieces (where they could no longer form mills and thus be unable to win), or by leaving
                them without a legal move.
            </p>

            <p class="col-1"></p>
            <p class="ml-4 mr-4">
                The game proceeds in three phases:
            </p>
            <ul class="ml-4">
                <li>Placing men on vacant points
                <li>Moving men to adjacent points
                <li>(optional phase) Moving men to any vacant point when the player has been reduced to three men
            </ul>
        </div>
    </div>

    <span class="row mt-1"></span>
    <div id="history">
        <h2>History</h2>
        <div class="textarea text-justify">
            <p class="col-1"></p>
            <p class="ml-4 mr-4">
                Nine Men’s Morris is an ancient game, popular in Ancient Rome and the medieval period. No one really knows
                where and when the game originated. The oldest building that has a Nine Men’s Morris board carved into its
                stones is an Egyptian temple at Kurna, Egypt, which dates to roughly 1400 BCE.<
                However, it is not known when the game board itself was carved into the Kurna temple’sroofing slabs;
                was it at the time of the construction or much later in history. There are many Nine Men’s Morris carved into various buildings’ stones through out
                the Roman Empire and in the seats of many medieval cathedrals.
                This game is known by many names, such as Mill or Windmill, most probably, because the shape of the board looks like a windmill, and Merrels, from
                the Latin word merellus, which means “gaming piece”. The name Nine Men’s Morris seems to have been originated by Shakespeare in his play, A Midsummer
                Night’s Dream (Act II, Scene I), in which Titania refers to such a board by saying, “The nine men’s morris is filled up with mud”.
                The rules of the game are well known, mostly because the game has been played continuously in Europe since the Roman period.
            </p>
        </div>
    </div>`
})

Vue.component('start-game', {
    template:`
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
        <div class="box align-content-center">
            <div class="inner">
                <span>
                    <a class="animation" href="/game">
                        Start Game
                    </a>
                </span>
            </div>
            <div class="inner">
                <span>
                    <a class="animation" href="/game">
                        Start Game</a>
                </span>
            </div>
        </div>
    </div>`
});