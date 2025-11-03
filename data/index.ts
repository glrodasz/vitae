import { Data } from "../types/data";
import parsedData from "./parsedData";

const { languages, summary, expertises, stack, frameworks, careers, knowledge, achievements } = parsedData;

const data: Data = {
  languages,
  summary,
  expertises,
  stack,
  frameworks,
};

export { careers, knowledge, achievements };
export default data;
