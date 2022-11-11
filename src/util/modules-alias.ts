// nodejs path - relative forms
import * as path from 'path';
import moduleAlias from 'module-alias';

// diretorio atual, volta duas e importa todos os arquivos
const files = path.resolve(__dirname, '../../')

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});