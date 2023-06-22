const RenderMarkdown = ({ text }: { text: string }) => {
    const parseMarkdown = (text: string) => {
        // Split the text into lines
        const lines = text?.split('\n');

        // Iterate through each line and apply the Markdown rules
        const parsedLines = lines?.map((line) => {
            // Bold (**)
            if (line.includes('**')) {
                const parts = line.split('**');
                const boldParts = parts.map((part, i) =>
                    i % 2 === 1 ? `<strong>${part}</strong>` : part
                );
                return boldParts.join('');
            }

            // Italics (_)
            if (line.includes('__')) {
                const parts = line.split('__');
                const italicParts = parts.map((part, i) =>
                    i % 2 === 1 ? `<em>${part}</em>` : part
                );
                return italicParts.join('');
            }

            // Underline (<ul></ul>)
            if (line.includes('<ul>') && line.includes('</ul>')) {
                const startIndex = line.indexOf('<ul>') + 4;
                const endIndex = line.indexOf('</ul>');
                const underlineText = line.substring(startIndex, endIndex);

                return `<ul><li>${underlineText}</li></ul>`;
            }

            // Headers (##, ###, ####, #####, ######)
            if (line.startsWith('#')) {
                const headerLevel = line.indexOf(' ');
                const headerText = line.substring(headerLevel + 1);
                const headerTag = `h${headerLevel}`;

                return `<${headerTag}>${headerText}</${headerTag}>`;
            }

            // Return the line as-is if no Markdown rule matches
            return line;
        });

        return parsedLines?.join('\n\n');
    };


    const parsedText = parseMarkdown(text);
    return (
        <div dangerouslySetInnerHTML={{ __html: parsedText }}>
        </div>
    );
};

export default RenderMarkdown;