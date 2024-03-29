// generate-sitemap.js

const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// Read the contents of your App.js file
const appJsCode = fs.readFileSync('./src/App.js', 'utf-8');
const stats = fs.statSync('./src/App.js');
const lastModified = stats.mtime.toISOString();
// Parse the code using babel-parser
const ast = parser.parse(appJsCode, {
    sourceType: 'module',
    plugins: ['jsx'],
});

const routes = [];
const Indexroutes = [];

// Traverse the AST to find Route components and extract their paths
traverse(ast, {
    JSXOpeningElement(path) {
        if (path.node.name.name === 'Route') {
            const pathAttribute = path.node.attributes.find(
                attribute => attribute.name.name === 'path'
            );
            if (pathAttribute) {
                routes.push({ url: pathAttribute.value.value , changefreq: 'daily', priority: 1.0, lastmod: lastModified });
            }
        }

    },
});
const  BASE_URL = 'https://starpenzu-seo.netlify.app';


traverse(ast, {
    JSXOpeningElement(path) {
        if (path.node.name.name === 'Route') {
            const pathAttribute = path.node.attributes.find(
                attribute => attribute.name.name === 'path'
            );
            if (pathAttribute) {
                Indexroutes.push(BASE_URL+pathAttribute.value.value);
            }
        }

    },
});

const urls = eval(Indexroutes);

// Generate JavaScript code for exporting the URLs
const jsCode = `module.exports = ${JSON.stringify(urls, null, 2)};`;

// Write the JavaScript code to a file named 'urls.js'
fs.writeFileSync('scripts/urls.js', jsCode);

console.log('URLs extracted and written to urls.js successfully!');


const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream, createWriteStream } = require('fs');
const { Readable } = require('stream');

const sitemap = new SitemapStream({ hostname: 'https://starpenzu-seo.netlify.app/' });

// Add routes to the sitemap
routes.forEach(route => {
    sitemap.write(route);
});

sitemap.end();

// Pipe the sitemap stream to a writable file stream
const writeStream = createWriteStream('./public/sitemap.xml'); // Adjust the file path as needed
sitemap.pipe(writeStream);

// Log success message
writeStream.on('finish', () => {
    console.log('Sitemap generated successfully!');

});


