const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, '../public/documents/ASZF_2026_02_09.pdf');

if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found at ${pdfPath}`);
    process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function (data) {
    const rawText = data.text;


    let text = rawText;

    text = text.replace(/([^\n])\s+(\d+\.\s+[A-ZÁÉÍÓÖŐÚÜŰ])/g, '$1\n$2');

    text = text.replace(/(\s)([•])/g, '\n$2');


    const lines = text.split(/\r\n|\n|\r/)
        .map(line => line.trim())
        .filter(line => line.length > 0 && !/^\d+$/.test(line));

    let intro = [];
    let sections = [];
    let currentSection = null;
    let documentDate = new Date().toISOString().split('T')[0];


    const headerRegex = /^\d+\.\s+/;
    const bulletRegex = /^[\-–•*]\s*/;
    const dateRegex = /^202\d\.\d{2}\.\d{2}\.?$/;


    function processContent(lines) {
        if (lines.length === 0) return [];

        const paragraphs = [];
        let currentPara = "";

        lines.forEach((line, index) => {

            if (dateRegex.test(line)) {

                documentDate = line.replace(/\.$/, '').replace(/\./g, '-');
                return;
            }


            if (bulletRegex.test(line)) {
                if (currentPara) {
                    paragraphs.push(currentPara);
                    currentPara = "";
                }
                paragraphs.push(line);
                return;
            }


            if (!currentPara) {
                currentPara = line;
            } else {
                if (currentPara.endsWith('-') || currentPara.endsWith('–')) {
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

    lines.forEach(line => {
        if (headerRegex.test(line)) {
            if (currentSection) {
                sections.push(currentSection);
            }
            currentSection = {
                title: line,
                content: []
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
    sections.forEach(s => {
        s.content = processContent(s.content);
    });



    const outputContent = `

export interface TermSection {
    title: string;
    content: string[];
}

export const termsData = {
    lastUpdated: "${documentDate}",
    intro: ${JSON.stringify(processedIntro, null, 4)},
    sections: ${JSON.stringify(sections, null, 4)}
};
`;


    const outputPath = path.join(__dirname, '../src/app/aszf/terms-data.ts');
    fs.writeFileSync(outputPath, outputContent);

    console.log(`Successfully generated terms data at ${outputPath}`);

}).catch(function (error) {
    console.error("Error parsing PDF: ", error);
});
