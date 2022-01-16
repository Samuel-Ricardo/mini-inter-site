import { DefaultTheme } from "styled-components";
import { global_fonts } from "../../global/global_fonts";
import { lite_colors } from "./colors";

export const lite_theme:DefaultTheme = {
  COLORS: { ...lite_colors },
  FONT: {...global_fonts}
}
