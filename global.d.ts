// Custom interface files to allow TS compilation in spite of imports with ".js"
// REF : https://stackoverflow.com/questions/47122504/import-raw-files-from-typescript-with-webpack-using-the-import-statement

declare module './*WorkletProcessor.js' {
    const content: any
    export default content
}
