import { createContext, useState } from "react";
import { CMYKContextProps } from "../types";

export const CMYKContext = createContext({} as CMYKContextProps);

export function CMYKProvider({ children }: any) {
    const [cyan, setC] = useState(0);
    const [magenta, setM] = useState(0);
    const [yellow, setY] = useState(0);
    const [black, setK] = useState(0);
    const r = 255 * (1 - cyan/100) * (1 - black/100);
    const g = 255 * (1 - magenta/100) * (1 - black/100);
    const b = 255 * (1 - yellow/100) * (1 - black/100);
    const color = `rgb(${r}, ${g}, ${b})`;

    return (
        <CMYKContext.Provider value={{ cyan, magenta, yellow, black, setC, setM, setY, setK, color }}>
          {children}
        </CMYKContext.Provider>
      );
}
