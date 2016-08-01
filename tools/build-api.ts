// builds all the proto files into json models, 
// builds all the types
// builds the client 

import * as glob from 'glob';
import * as Promise from 'bluebird';
import * as ProtoBuf from 'protobufjs';
import * as fs from 'fs';
import * as util from 'util';

const pglob = Promise.promisify(glob);

const BASE_DIR = '../Api/protos/';
const OUT_DIR = '../Api/js/';

export default async function buildApi() { 
    pglob(`${BASE_DIR}**/*.proto`).then(renderProtos);
};

function renderProtos(results: string[]) {
    results.forEach(renderProtoFile);
}

function renderProtoFile(filePath: string) {
    const basePath = filePath.replace(BASE_DIR, '');
    const parser = new ProtoBuf.DotProto.Parser(fs.readFileSync(filePath, 'utf8'));
    const ast = parser.parse();
    console.log(ast);
}