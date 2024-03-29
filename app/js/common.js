function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}
helloConsole();

let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();



//animations scroll





let jsAnimBlocks = [...document.querySelectorAll('.js-anim')];
var Visible3 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                target.classList.add('anim-start');
            }, 120)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible3(el);
        }, k * 70)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible3(el);
    }, k * 60)
});


let jsAnimPlanet = [...document.querySelectorAll('.planet .js-ani')];
var Visible4 = function (target) {
    if (!jsAnimPlanet.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                target.classList.add('anim-start');
            }, 300)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        };
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimPlanet.forEach((el, k) => {
        setTimeout(() => {
            Visible4(el);
        }, k * 100)

    });
    parallaxImg();
    parallaxAfter();
    parallaxList();

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimPlanet.forEach((el, k) => {
    setTimeout(() => {
        Visible4(el);
    }, k * 100)
});

let imgPar = [...document.querySelectorAll('.mission-bg > div:not(.js-anim)')];
let imgList = [...document.querySelectorAll('.product .bg .list')];
function parallaxImg() {
    imgPar.forEach((img) => {
        let spaceBellow = window.innerHeight - img.getBoundingClientRect().bottom + img.offsetHeight;

        let topDistance = img.getBoundingClientRect().top;

        let imgHeight = img.offsetHeight;

        let percent = spaceBellow / 9;

        if (0 < spaceBellow && topDistance > 0) {
            // console.log('picture visible')

            img.style.transform = `translate(0, ${-percent}%)`
        }

    })
}
function parallaxList() {
    imgList.forEach((img, z) => {
        let spaceBellow = window.innerHeight - img.getBoundingClientRect().top + img.offsetHeight;

        let topDistance = img.getBoundingClientRect().top;

        let imgHeight = img.offsetHeight;

        let percent = (((spaceBellow - imgHeight) / 3) - 60);

        if (0 < spaceBellow && topDistance > 0) {
            // console.log('picture visible')
            // console.log(window.innerHeight + ' ==== ' + img.getBoundingClientRect().top + ' !!!! ' + spaceBellow + ' ____ ' + imgHeight);
            if (z%2===0) {

            } else {
                percent = percent * (-0.9);
            }

            img.style.transform = `translate(0, ${percent}%)`
        }

    })
}
let colorAfterPar = document.querySelector('.slogan .text .bg');

function parallaxAfter() {
    if (!colorAfterPar) {

    } else {
        let img = colorAfterPar;
        let spaceBellow = window.innerHeight - img.getBoundingClientRect().bottom + img.offsetHeight;

        let topDistance = img.getBoundingClientRect().top;

        let imgHeight = img.offsetHeight;

        let percent = (-120 + (spaceBellow / 9) * 4);

        if (0 < spaceBellow && topDistance > 0) {
            // console.log('picture visible')
            // console.log('visible  ' + colorAfterPar)
            img.style.transform = `matrix(1, 0, 0, 1, 45, ${percent})`;
        }
    }



}
window.addEventListener('load', () => {
    parallaxImg();
    parallaxAfter();
    parallaxList();
});
//animations scroll

let burger = document.querySelector('.burger');

function openMenu() {
    if (!burger) {

    } else {
        burger.addEventListener('click', () => {
            document.body.classList.add('no-scroll');
            document.querySelector('.header-menu').classList.toggle('visible');
            document.querySelector('.header-backdrop').classList.add('visible');
        });
        document.querySelector('.header-backdrop').addEventListener('click', () => {
            document.body.classList.remove('no-scroll');
            document.querySelector('.header-menu').classList.remove('visible');
            document.querySelector('.header-backdrop').classList.remove('visible');
        });
        document.querySelector('.close').addEventListener('click', () => {
            document.body.classList.remove('no-scroll');
            document.querySelector('.header-menu').classList.remove('visible');
            document.querySelector('.header-backdrop').classList.remove('visible');
        });
    }
}
openMenu();

let dontForget = document.querySelector('.dont-forget-btn');

function dontForgetOpen() {
    if (!dontForget) {

    } else {
        dontForget.addEventListener('click', () => {
            dontForget.closest('.home-dont-forget').classList.toggle('visible');
        })
        document.querySelector('.dont-forget-block .close-block').addEventListener('click', () => {
            document.querySelector('.home-dont-forget').classList.remove('visible');
        })
    }
}
dontForgetOpen();



let bigRowSliders = [...document.querySelectorAll('.js-slider.production')];

function startBigSlider() {
    if (!bigRowSliders.length) {

    } else {
        bigRowSliders.forEach((sld) => {
            let sldCont = sld.querySelector('.production-container');
            let sldNext = sld.querySelector('.button-slide--next');
            let sldPrev = sld.querySelector('.button-slide--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView:'auto',
                slidesPerGroup: 1,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
            });
        })
    }
}
startBigSlider();

let planetBtns = [...document.querySelectorAll('.planet-button')];
let planetIcons = document.querySelector('.planet-icons');
let singleIcons = [...document.querySelectorAll('.single-icon')];
let startRotating = 0;
function checkAngle(ang) {
    // console.log(ang);
    if (ang > 0) {
        // console.log('1')
        singleIcons.forEach((btn2, z) => {
            btn2.classList.remove('active');
            if (z < 3) {
                btn2.classList.add('active');
            }
        });

    } else if (ang === 0) {
        // console.log('2')

        singleIcons.forEach((btn2, z) => {
            btn2.classList.remove('active');
            if (z > 2 && z < 6) {
                btn2.classList.add('active');
            }
        });
    } else {
        // console.log('3')
        singleIcons.forEach((btn2, z) => {
            btn2.classList.remove('active');
            if (z > 5) {
                btn2.classList.add('active');
            }
        });
    }

}
function rotateFnc(dir, k) {
    let angle = 90;
    planetBtns.forEach((btns) => {
        btns.classList.remove('disabled');
    });
    if (dir === 1) {
        startRotating += angle;

        if (startRotating >= 90) {
            startRotating = 90;
            planetBtns.forEach((btns) => {
                btns.classList.remove('disabled');
            });
            planetBtns[k].classList.add('disabled');

        }
        planetIcons.style.transform = `rotate(calc(${dir} * ${startRotating}deg))`;


    } else {
        startRotating = startRotating - angle;
        if (startRotating <= -90) {
            startRotating = -90;

            planetBtns[k].classList.add('disabled');
        }
        planetIcons.style.transform = `rotate(calc(${dir} * ${-startRotating}deg))`;

    }
    singleIcons.forEach((ci) => {
        ci.classList.remove('open');
    })

    // console.log(startRotating);
    checkAngle(startRotating);
}
function rotatePlanet() {
    if (!planetBtns.length) {

    } else {
        planetBtns.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('planet-button--0')) {
                    rotateFnc(-1, k);
                } else {
                    rotateFnc(1, k);
                }
            })
        });
        singleIcons.forEach((ic) => {
            ic.querySelector('.square').addEventListener('click', () => {
                // console.log('click-sq')
                singleIcons.forEach((ci) => {
                    ci.classList.remove('open');
                })
                ic.classList.toggle('open');
            });
            ic.querySelector('.close-icon').addEventListener('click', () => {
                ic.classList.remove('open');
                // console.log('close');
            })
        })
    }
}

rotatePlanet();

let vacancyHead = [...document.querySelectorAll('.vacancy-head')];

function openVacancyText() {
    if (!vacancyHead.length) {

    } else {
        vacancyHead.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.vacancy').classList.toggle('open');
                let moreInfo = btn.querySelector('.more-info');
                if (btn.closest('.vacancy').classList.contains('open')) {

                    moreInfo.innerHTML = moreInfo.dataset.hidden;
                } else {
                    moreInfo.innerHTML = moreInfo.dataset.open;

                }
            })
        })
    }
}

openVacancyText();


let quantButton = [...document.querySelectorAll('.quantity__button')];


function upValueQuant() {
    if (!quantButton.length) {

    } else {
        quantButton.forEach((btn) => {
            btn.querySelector('button').addEventListener('click', () => {
                if (btn.classList.contains('quantity__button--minus')) {
                    let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;
                    if (Number(val) === 0) {

                    } else {
                        let newVal =    Number(val) - 1;
                        btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;
                    }


                } else {
                    let val =  btn.closest('.quantity-field').querySelector('.quantity input').value;

                    let newVal =    Number(val) + 1;
                    btn.closest('.quantity-field').querySelector('.quantity input').value = newVal;

                }
            })
        })
    }
}
upValueQuant();


$('.sort-select').niceSelect();

let sortUlLi = [...document.querySelectorAll('.sort-select ul li')];

$('.checkout-container').on('change','select', function(e) {
    e.preventDefault();
    var type=$(this).attr('id');
    var val=$(this).val();
    $('.sort-select').niceSelect('update');
});

// $('.filter-control').on('change','select', function(e) {
//     e.preventDefault();
//     var type=$(this).attr('id');
//     var val=$(this).val();
//     $('.sort-select').niceSelect('update');
// });

function sortSelectClick() {
    if (!sortUlLi.length) {

    } else {
        sortUlLi.forEach((btn) => {
            btn.addEventListener('click', () => {
                let optValue = btn.dataset.value;
                let event2 = new Event('change');
                let event3 = new Event('click');
                let event4 = new Event('change');
                let suggestOpt = document.querySelector(`option[value='${optValue}']`);
                // btn.closest('.sort-selector').querySelector('select option[selected]').removeAttribute('selected');

                suggestOpt.selected = 'selected';
                suggestOpt.setAttribute('selected', 'selected');
                suggestOpt.click();
                // console.log(btn.closest('.sort-selector').querySelector('select'));
                // console.log(suggestOpt);
                // $('select.sort-select').niceSelect();
            })
        })
    }
}
sortSelectClick();


$('.rating-stars').raty(
    {
        readOnly:   true,
        starHalf: './img/star-clear.svg',
        starOn: './img/star.svg',
        starOff: '.img/star-clear.svg',
        hints: ['a', null, '', null, '', null]
    }
);

let prodTabs = [...document.querySelectorAll('.product-tabs > div')];
let prodTabsCont = [...document.querySelectorAll('.prod-tab')];

function changeOpenTab() {
    if (!prodTabs.length) {

    } else {
        prodTabs.forEach((tab, k) => {
            tab.addEventListener('click', () => {
                if (tab.classList.contains('active')) {

                } else {
                    prodTabs.forEach((btn) => {
                        btn.classList.remove('active');
                    });
                    prodTabsCont.forEach((t, l) => {
                        t.classList.remove('active');
                        if (l === k) {
                            t.classList.add('active');
                        }
                    })
                    tab.classList.add('active');
                }
            })
        })
    }
}

changeOpenTab();

let modalWindows = [...document.querySelectorAll('.modal-window')];

function modalControl() {
    if (!modalWindows.length) {

    } else {
        modalWindows.forEach((mdl, k) => {
            mdl.addEventListener('click', () => {
                document.body.classList.remove('no-scroll');
                mdl.classList.remove('open');
            });
            mdl.querySelector('.modal-container').addEventListener('click', (e) => {
                e.stopPropagation();
            });
            mdl.querySelector('.close-modal').addEventListener('click', () => {
                mdl.classList.remove('open');
                document.body.classList.remove('no-scroll');
            })
        })
    }
}

modalControl();


$(".btn-go-down").click(function(e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".vacancies").offset().top - 100
    }, 500);
});

let popupCarrier = [...document.querySelectorAll('.pop-carrier')];

function openPopups() {
    if (!popupCarrier.length) {

    } else {
        popupCarrier.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.querySelector('.modal-window__request').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openPopups();
let popupReq = [...document.querySelectorAll('.pop-req')];

function openPopupsReq() {
    if (!popupReq.length) {

    } else {
        popupReq.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__call').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openPopupsReq();

let popupOne = [...document.querySelectorAll('.one-click')];

function openPopupsOne() {
    if (!popupReq.length) {

    } else {
        popupOne.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__one').classList.add('open');
                document.body.classList.add('no-scroll');
            })
        })
    }
}

openPopupsOne();

let blobHove = [...document.querySelectorAll('.blob')];
let princImg = [...document.querySelectorAll('.principles__image')];

function hoverBlob() {
    if (!blobHove.length) {

    } else {

        blobHove.forEach((bl, k) => {
            bl.addEventListener('mouseover', () => {
                if (bl.classList.contains('active')) {

                } else {
                    blobHove.forEach((blb) => {
                        blb.classList.remove('active')
                    });
                    bl.classList.add('active');
                    princImg.forEach((img) => {
                        img.classList.remove('active');
                    });
                    princImg[k].classList.add('active');
                }
            });

        });
        princImg.forEach((bl, k) => {
            bl.addEventListener('mouseover', () => {
                if (bl.classList.contains('active')) {

                } else {
                    princImg.forEach((blb) => {
                        blb.classList.remove('active')
                    });
                    bl.classList.add('active');
                    blobHove.forEach((img) => {
                        img.classList.remove('active');
                    });
                    blobHove[k].classList.add('active');
                }
            });

        });

    }
}

hoverBlob();


let filterButtons = [...document.querySelectorAll('.filter-type .type')];
let prodItemsPage = document.querySelector('.production-items');
function changeFilterView() {
    if (!filterButtons.length) {

    } else {
        filterButtons.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    filterButtons.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    if (btn.classList.contains('short')) {
                        prodItemsPage.classList.add('short');
                    } else {
                        prodItemsPage.classList.remove('short');
                    }

                }
                [...document.querySelectorAll('.production-card')].forEach((el) => {
                    el.classList.add('anim-start')
                })
            })
        })
    }
}
changeFilterView();


let btnCartOpen = [...document.querySelectorAll('.header-cart a')];

function openCartModal() {
    if (!btnCartOpen.length) {

    } else {
        btnCartOpen.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.modal-window__cart').classList.add('open');
                document.body.classList.add('no-scroll');
                document.documentElement.classList.add('no-scroll');
            })
        })
    }
}

openCartModal();


let startsRateModal = [...document.querySelectorAll('.rate-stars .rate')];

function hoverStarsRate() {
    if (!startsRateModal.length) {

    } else {
        startsRateModal.forEach((st, k) => {
            let number = k + 1;
            st.addEventListener('mouseover', () => {
                st.classList.add('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('hover');
                }
            })
            st.addEventListener('mouseout', () => {
                st.classList.remove('hover');
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.remove('hover');
                }
            })
            st.addEventListener('click', () => {
                startsRateModal.forEach((st2) => {
                    st2.classList.remove('clicked');
                })
                st.classList.add('clicked');
                st.closest('.rate-list').querySelector('p strong').innerHTML = number;
                for (let i = 0; i < k; i++) {
                    startsRateModal[i].classList.add('clicked');
                }
            })
        })
    }
}

hoverStarsRate();



let prodRatingOpen = [...document.querySelectorAll('.product__rating a')];

function scrollToRate() {
    if (!prodRatingOpen.length) {

    } else {
        prodRatingOpen.forEach((btn) => {
            $(btn).click(function(e) {
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".rev-tab").offset().top
                }, 400);
                $(".rev-tab").click();
            });
        })
    }
}

scrollToRate();

let openSingleFaq = [...document.querySelectorAll('.single-faq > span')];

function openFaqProd() {
    if (!openSingleFaq.length) {

    } else {
        openSingleFaq.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}
openFaqProd();





let iAnimBlocks = [...document.querySelectorAll('.i-anim')];
var Visible5 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                target.classList.add('animed');
            }, 300)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    iAnimBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible5(el);
        }, k * 70)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

iAnimBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible5(el);
    }, k * 60)
});


//counting animation


function animateValue(id, start, end, duration) {
    // assumes integer values for start and end

    var obj = id;
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;

    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }

    timer = setInterval(run, stepTime);
    run();
}

// animateValue("value", 100, 25, 5000);


let trustAn = [...document.querySelectorAll('.trust-single p')];

let timedTime = 1;


var Visible6 = function (target, dur) {
    if (!trustAn.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код

                let end = Number(target.dataset.time);
                animateValue(target, 0, end, dur);
                timedTime = 0;


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    if (timedTime === 0) {

    } else {
        trustAn.forEach((el, k) => {
            setTimeout(() => {
                let dur = 0;
                if (k === 0) {
                    dur = 2000
                } else if (k === 1) {
                    dur = 3600
                } else {
                    dur = 2600
                }
                Visible6(el, dur);
            }, 300)
        })
    }


});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
trustAn.forEach((el, k) => {
    if (timedTime === 0) {

    } else {
        trustAn.forEach((el, k) => {
            setTimeout(() => {
                let dur = 0;
                if (k === 0) {
                    dur = 2000
                } else if (k === 1) {
                    dur = 3600
                } else {
                    dur = 2600
                }
                Visible6(el, dur);
            }, 300)
        })
    }
});


let systemScrollBtn = [...document.querySelectorAll('.system-text .text span')];

function scrollToSystem() {
    if (!systemScrollBtn.length) {

    } else {
        systemScrollBtn.forEach((btn) => {
            $(btn).click(function() {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".system__global").offset().top
                }, 400);
            });
        })
    }
}

scrollToSystem();



let bigImgSliders = [...document.querySelectorAll('.js-slider.product-img')];

function startImgSlider() {
    if (!bigImgSliders.length) {

    } else {
        bigImgSliders.forEach((sld) => {
            let sldCont = sld.querySelector('.pro-im-slider');
            let sldNext = sld.querySelector('.button-slide--next');
            let sldPrev = sld.querySelector('.button-slide--prev');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView:'auto',
                slidesPerGroup: 1,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
            });
        })
    }
}
startImgSlider();

let btnsInformer = [...document.querySelectorAll('.product-informer__container .buttons .btn')];


function closeInformer() {
    if (!btnsInformer.length) {

    } else {
        btnsInformer.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.product-informer').classList.add('hidden');
            })
        })
    }
}

closeInformer() ;

