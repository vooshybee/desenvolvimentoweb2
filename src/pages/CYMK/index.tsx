import CMYKColor from "../../components/CYMKColor";
import { CMYKProvider } from "../../contexts/CMYKContext";

export default function CMYK() {
  return (
    <CMYKProvider>
        <CMYKColor />
    </CMYKProvider>
  );
}
