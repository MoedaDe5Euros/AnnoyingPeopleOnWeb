import shrek from shrek
import bee from bee
import avangers from avangers
import JLSC from JusticeLeagueSynderCut.js

if (typeof enviarScript !== 'function') {
    let enviarScript = async function(scriptText) {
        // Split input text by newlines and tabs, trim each line, and filter out empty lines
        const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);

        // Select the main chat element and the editable textarea
        const main = document.querySelector("#main");
        const textarea = main.querySelector('div[contenteditable="true"]');

        // Throw an error if no conversation is open
        if (!textarea) throw new Error("Não há uma conversa aberta");

        // Iterate over each line to send it as a message
        for (const line of lines) {
            console.log(line);

            // Focus on the textarea and insert the text
            textarea.focus();
            document.execCommand('insertText', false, line);
            textarea.dispatchEvent(new Event('change', { bubbles: true }));

            // Simulate clicking the send button after a short delay
            setTimeout(() => {
                (main.querySelector('[data-testid="send"]') || main.querySelector('[data-icon="send"]')).click();
            }, 100);

            // Wait for 250ms before sending the next line, if any
            if (lines.indexOf(line) !== lines.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 250));
            }
        }

        // Return the number of lines processed
        return lines.length;
    }
    //Choose one 
   enviarScript(shrek).then(e=>(console.log(`shrek, ${e} mensagens apagadas`)))
   enviarScript(bee).then(e=>(console.log(`bee, ${e} mensagens apagadas`)))
   enviarScript(avangers).then(e=>(console.log(`avangers, ${e} mensagens apagadas`)))
   enviarScript(JLSC).then(e=>(console.log(`JLSC, ${e} mensagens apagadas`)))

} else {
    console.log('Function enviarScript already exists.');
}