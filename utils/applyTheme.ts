import { THEME_STANDARD } from './color-constants';

export function applyTheme(theme: typeof THEME_STANDARD) {
  if (typeof window !== "undefined") {
    const root = document.documentElement;
    root.style.setProperty('--color1', theme.COLOR1);
    root.style.setProperty('--color2', theme.COLOR2);
    root.style.setProperty('--color3', theme.COLOR3);
    root.style.setProperty('--color4', theme.COLOR4);
    root.style.setProperty('--title-color', theme.TITLE_COLOR);
    root.style.setProperty('--label-color1', theme.LABEL_COLOR1);
    root.style.setProperty('--label-color2', theme.LABEL_COLOR2);
  }
}
