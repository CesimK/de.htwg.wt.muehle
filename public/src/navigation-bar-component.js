import {html, LitElement, property} from "https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module";

@customElements('navigation-bar')
class NavBar extends LitElement {

    render(){
        return html`
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
        </nav>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        `;
    }
}

customElements.define('navigation-bar', NavBar);