"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLineNode = exports.newLineCharacters = exports.jsx = exports.classProperties = exports.decoratorsLegacy = exports.typescript = exports.flow = void 0;
var types_1 = require("@babel/types");
exports.flow = 'flow';
exports.typescript = 'typescript';
exports.decoratorsLegacy = 'decorators-legacy';
exports.classProperties = 'classProperties';
exports.jsx = 'jsx';
exports.newLineCharacters = '\n\n';
var PRETTIER_PLUGIN_SORT_IMPORTS_NEW_LINE = 'PRETTIER_PLUGIN_SORT_IMPORTS_NEW_LINE';
exports.newLineNode = types_1.expressionStatement(types_1.stringLiteral(PRETTIER_PLUGIN_SORT_IMPORTS_NEW_LINE));
