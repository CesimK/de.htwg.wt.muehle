$(document).ready(function () {
    var totallyUseful = new Vue({
        el: '#very-useful-button'
    })
});

Vue.component('necessary-button', {
    template: `
    <div class="text-center d-inline-flex">
        <a class="btn-slice" href="/yeet">
            <div class="top"><span>Unnecessary Button</span></div>
            <div class="bottom"><span>Unnecessary Button</span></div>
        </a>
    </div>`
});