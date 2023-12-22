import { Typewriter } from "react-simple-typewriter";

type WriterProps = {
  words: string[];
};

const Writer: React.FC<WriterProps> = ({ words }) => {
  return <Typewriter words={words} loop={1} />;
};

export default Writer;
