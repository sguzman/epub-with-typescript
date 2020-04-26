import * as epubAPI from 'epub';
import { cheerio } from 'cheerio';

export function main() {
    const epubPath: string = 'C:\\Users\\sguzman\\Documents\\Software\\Web\\epub-with-typescript\\Pragmatic Programmer, The_ From - Pragmatic Programmer, The From .epub'

    const epub = new epubAPI(epubPath);
    epub.on('end', function () {
        console.log(epub.metadata);
        epub.flow.forEach(function (chapter) {
            console.log(chapter);
        })
    });

    epub.parse();
}

main();
