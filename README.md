# Jest-Custom-Reporter-ModulePaths
Repro repository

## For Repro
- Clone
- npm ci
- npm run test => jest-html-reporter report will be generated
- Move node_modules/jest-html-reporter folder to ./lib
- ModulePaths will not be used for resolving, test reporter not found
