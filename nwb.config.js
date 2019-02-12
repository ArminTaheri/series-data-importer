module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'SeriesDataImporter',
      externals: {
        react: 'React'
      }
    }
  }
}
