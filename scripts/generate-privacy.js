const fs = require("fs");
const path = require("path");
const pdf = require("pdf-parse");

// TODO: Update this filename if the uploaded PDF has a different name
const pdfPath = path.join(
  __dirname,
  "../public/documents/Adatkezelesi_Tajekoztato_2026.pdf",
);

if (!fs.existsSync(pdfPath)) {
  console.error(`Error: PDF file not found at ${pdfPath}`);
  console.error(
    "Please upload the Privacy Policy PDF to 'public/documents/Adatkezelesi_Tajekoztato_2026.pdf' or update this script with the correct filename.",
  );
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer)
  .then(function (data) {
    const rawText = data.text;

    let text = rawText;

    // Heuristic: Insert newlines before likely headers that are stuck to previous text
    // Matches " 1. Title" where Title starts with uppercase
    text = text.replace(/([^\n])\s+(\d+\.\s+[A-ZÁÉÍÓÖŐÚÜŰ])/g, "$1\n$2");

    // Heuristic: Insert newlines before bullet points
    text = text.replace(/(\s)([•])/g, "\n$2");

    const lines = text
      .split(/\r\n|\n|\r/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !/^\d+$/.test(line));

    let intro = [];
    let sections = [];
    let currentSection = null;
    let documentDate = new Date().toISOString().split("T")[0];

    // Detect sections
    const headerRegex = /^\d+\.\s+/;
    const bulletRegex = /^[\-–•*]\s*/;
    const dateRegex = /^202\d\.\d{2}\.\d{2}\.?$/;

    function processContent(lines) {
      if (lines.length === 0) return [];

      const paragraphs = [];
      let currentPara = "";

      lines.forEach((line, index) => {
        // Check for date at the end of document
        if (dateRegex.test(line)) {
          // Try to parse it
          documentDate = line.replace(/\.$/, "").replace(/\./g, "-");
          return;
        }

        // If it's a bullet point, it should be a separate "paragraph" or item
        if (bulletRegex.test(line)) {
          if (currentPara) {
            paragraphs.push(currentPara);
            currentPara = "";
          }
          paragraphs.push(line);
          return;
        }

        // Heuristic for merging:
        if (!currentPara) {
          currentPara = line;
        } else {
          if (currentPara.endsWith("-") || currentPara.endsWith("–")) {
            currentPara = currentPara.slice(0, -1) + line;
          } else {
            const endsWithStop = /[.?!:]$/.test(currentPara);
            if (endsWithStop) {
              paragraphs.push(currentPara);
              currentPara = line;
            } else {
              currentPara += " " + line;
            }
          }
        }
      });
      if (currentPara) paragraphs.push(currentPara);

      return paragraphs;
    }

    lines.forEach((line) => {
      if (headerRegex.test(line)) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line,
          content: [],
        };
      } else {
        if (currentSection) {
          currentSection.content.push(line);
        } else {
          intro.push(line);
        }
      }
    });
    if (currentSection) {
      sections.push(currentSection);
    }

    const processedIntro = processContent(intro);
    sections.forEach((s) => {
      s.content = processContent(s.content);
    });

    const outputContent = `
export interface PrivacySection {
    title: string;
    content: string[];
}

export const privacyData = {
    lastUpdated: "${documentDate}",
    intro: ${JSON.stringify(processedIntro, null, 4)},
    sections: ${JSON.stringify(sections, null, 4)}
};
`;

    const outputPath = path.join(
      __dirname,
      "../src/app/adatvedelem/privacy-data.ts",
    );
    fs.writeFileSync(outputPath, outputContent);

    console.log(`Successfully generated privacy data at ${outputPath}`);
  })
  .catch(function (error) {
    console.error("Error parsing PDF: ", error);
  });
