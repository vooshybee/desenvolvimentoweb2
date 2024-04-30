import Input from "../Input";
import useCMYK from "../../hooks/useCMYK";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";

export default function CMYKColor() {
  const{
    cyan,
    magenta,
    yellow,
    black,
    setC,
    setM,
    setY,
    setK,
    color
  } = useCMYK();
  return (
    <Block color={color}>
      <Title>CMYK - Cyan, Magenta, Yellow, Black</Title>
      <Line>
        <Input label="C" value={cyan} setValue={setC} min={0} max={255} />
        <Input label="M" value={magenta} setValue={setM} min={0} max={255} />
        <Input label="Y" value={yellow} setValue={setY} min={0} max={255} />
        <Input label="K" value={black} setValue={setK} min={0} max={255} />
      </Line>
    </Block>
  );
}