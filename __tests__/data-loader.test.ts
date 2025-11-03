import path from "path";
import { loadMarkdownDataFromFile } from "../utils/markdownDataLoader";
import {
  expectedAchievements,
  expectedCareers,
  expectedData,
  expectedKnowledge,
} from "./__fixtures__/expectedData";

describe("markdownDataLoader", () => {
  const dataPath = path.join(process.cwd(), "data/content.md");
  const parsed = loadMarkdownDataFromFile(dataPath);

  it("parses the core Data structure", () => {
    expect(parsed.summary).toEqual(expectedData.summary);
    expect(parsed.languages).toEqual(expectedData.languages);
    expect(parsed.expertises).toEqual(expectedData.expertises);
    expect(parsed.stack).toEqual(expectedData.stack);
    expect(parsed.frameworks).toEqual(expectedData.frameworks);
  });

  it("parses careers", () => {
    expect(parsed.careers).toEqual(expectedCareers);
  });

  it("parses knowledge sections", () => {
    expect(parsed.knowledge).toEqual(expectedKnowledge);
  });

  it("parses achievements sections", () => {
    expect(parsed.achievements).toEqual(expectedAchievements);
  });
});
