import markdownContent from "./content.md";
import { parseMarkdownData, type MarkdownData } from "../utils/markdownDataLoader";

const parsedData: MarkdownData = parseMarkdownData(markdownContent);

export default parsedData;
