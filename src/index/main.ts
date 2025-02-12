function getRootElement(): HTMLElement {
    const elem = document.querySelector<HTMLElement>(":root");
    if (elem === null) {
        return document.querySelector<HTMLElement>("html")!;
    }

    return elem;
}

enum Theme {
    Light = "light",
    Dark = "dark",
}

function getTheme(): Theme {
    const elem = getRootElement();

    const defaultTheme = Theme.Light;

    switch (elem.dataset.theme) {
        case "light":
            return Theme.Light;
        case "dark":
            return Theme.Dark;
        default:
            const theme = localStorage.getItem("theme");
            if (theme === null) {
                return defaultTheme;
            }

            switch (theme) {
                case "light":
                    return Theme.Light;
                case "dark":
                    return Theme.Dark;
                default:
                    return defaultTheme;
            }
    }
}

function setTheme(theme: Theme): void {
    const elem = getRootElement();

    elem.dataset.scheme = theme;

    localStorage.setItem("theme", theme);
}

function toggleTheme(): void {
    const theme = getTheme();

    switch (theme) {
        case Theme.Light:
            setTheme(Theme.Dark);
            break;
        case Theme.Dark:
            setTheme(Theme.Light);
            break;
    }
}

function initialise(): void {
    const toggler = document.getElementById("toggle-button")!;

    toggler.addEventListener("click", ev => {
        ev.preventDefault();

        toggleTheme();
    });
}

window.addEventListener("load", initialise, false);
