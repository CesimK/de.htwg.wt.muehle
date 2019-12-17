$(document).ready(function () {
    var muehle = new Vue({
        el:'#muehle-game'
    })
})

Vue.component('nav-bar', {
    template:`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand mr-auto" href="/">HTWG WT Muehle</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/">HOME</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/game">GAME<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Repositories
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="https://github.com/CesimK/de.htwg.se.muehle" target="_blank">
                            SE Muehle</a>
                        <a class="dropdown-item" href="https://github.com/CesimK/de.htwg.wt.muehle" target="_blank">
                            WT Muehle</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`
});