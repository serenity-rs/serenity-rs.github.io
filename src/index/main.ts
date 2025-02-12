import { ColourScheme, getSettings, setSettings } from "@/base/theme";

function initialise(): void {
    const settings = getSettings();

    const toggler = document.getElementById("toggle-button")!;

    toggler.addEventListener("click", (ev) => {
        ev.preventDefault();

        switch (settings.scheme) {
            case ColourScheme.Auto:
            case ColourScheme.Light:
                settings.scheme = ColourScheme.Dark;
                break;
            case ColourScheme.Dark:
                settings.scheme = ColourScheme.Light;
                break;
        }

        setSettings(settings);
    });
}

window.addEventListener("load", initialise, false);
