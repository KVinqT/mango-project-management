import { Raleway, Archivo } from "next/font/google";

const raleway_init = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const archivo_init = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const raleway = raleway_init.variable;
export const archivo = archivo_init.variable;
