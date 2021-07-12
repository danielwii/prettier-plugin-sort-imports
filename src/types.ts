import type { RequiredOptions } from 'prettier';
import type { ParserPlugin } from '@babel/parser';

export interface PrettierOptions extends RequiredOptions {
    importOrder: string[];
    importOrderSeparation: boolean;
    experimentalBabelParserPluginsList: ParserPlugin[];
}
