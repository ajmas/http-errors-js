import fs from 'fs';
import path from 'path';

const baseDir = __dirname;
const templateFile = './data/error.ts.template';
const errorsFile = './data/errors.tsv';
const outputBaseDir = '../src/errors';
const indexFile = '../src/index.ts';

// read in the template
const template = fs.readFileSync(path.join(baseDir, templateFile), 'utf-8');

// read in the errors
const data = fs.readFileSync(path.join(baseDir, errorsFile), 'utf-8');
const lines = data.split('\n');
const errorTypes = [];

for (let i = 1; i < lines.length; i++) {
   const fields = lines[i].split('\t');
   errorTypes.push({
      httpStatus: fields[0],
      name: fields[1],
      description: fields.length > 2 ? fields[2] : undefined
   });
}

// Now generate the files
errorTypes.forEach((errorType) => {
   let text = template.replace(/@@error-name@@/g, errorType.name);
   text = text.replace(/@@error-httpstatus@@/g, errorType.httpStatus);

   let description = errorType.description || 'No description available';
   text = text.replace(/@@error-description@@/g, description);

   console.log(`Generating ${errorType.name}`);

   fs.writeFileSync(path.join(baseDir, outputBaseDir, `${errorType.name}.ts`), text, 'utf-8');
})

// Finally generate the index file
let text = 'export { default as IHttpError } from \'./interfaces/IHttpError\';\n\n';

errorTypes.forEach((errorType) => {
   text += `export { default as ${errorType.name} } from './errors/${errorType.name}';\n`;
});

fs.writeFileSync(path.join(baseDir, indexFile), text, 'utf-8');


