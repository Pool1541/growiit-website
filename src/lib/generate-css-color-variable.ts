import { adjustColorBrightness } from "./adjust-color-brightness";

export function GenerateCssColorVariable(variableName: string, color: string): React.CSSProperties {
  const darkColor = adjustColorBrightness(color, -50);
  const style = { [variableName]: darkColor };

  return style
}