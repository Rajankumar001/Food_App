const path = require('path');

module.exports = {
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src') // Example alias
    }
  },

  // other configuration options...
};
