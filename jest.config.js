module.exports = {
    roots: ['./spec'],
    modulePaths: ["<rootDir>/lib/"],
    transform: {
        "^.+\\.(t|j)sx?$": "ts-jest"
    },
    reporters: [
        "default",
          ["jest-html-reporter", {
            "outputPath": `reports/testSummary_${new Date().toISOString().replace(/:/g, "")}.html`,
            "pageTitle": "Test Report"
          }]
    ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: ['<rootDir>/node_modules/']
  }