function getRootElement(): HTMLElement {
    const elem = document.querySelector<HTMLElement>(":root");
    if (elem !== null) {
        return elem;
    }

    return document.querySelector<HTMLElement>("html")!;
}

export enum ColourScheme {
    Auto = "auto",
    Light = "light",
    Dark = "dark",
}

export interface ThemeSettings {
    theme: string;
    scheme: ColourScheme;
}

export function getSettings(): ThemeSettings {
    const elem = getRootElement();

    const theme = (() => {
        const theme = elem.dataset["theme"];
        if (theme !== undefined) {
            return theme;
        }

        const localTheme = localStorage.getItem("theme");
        if (localTheme !== null) {
            return localTheme;
        }

        return "normal";
    })();

    const scheme = (() => {
        const scheme = (() => {
            const scheme = elem.dataset["scheme"];
            if (scheme !== undefined) {
                return scheme;
            }

            const localScheme = localStorage.getItem("scheme");
            if (localScheme !== null) {
                return localScheme;
            }

            return "auto";
        })();

        switch (scheme) {
            case "auto":
                return ColourScheme.Auto;
            case "light":
                return ColourScheme.Light;
            case "dark":
                return ColourScheme.Dark;
            default:
                return ColourScheme.Auto;
        }
    })();

    return {
        theme,
        scheme,
    };
}

export function setSettings(settings: ThemeSettings): void {
    const elem = getRootElement();

    elem.dataset["theme"] = settings.theme;
    elem.dataset["scheme"] = settings.scheme as string;

    localStorage.setItem("theme", settings.theme);
    localStorage.setItem("scheme", settings.scheme as string);
}
