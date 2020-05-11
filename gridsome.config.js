// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      purge: [
        './src/**/*.html',
        './src/**/*.vue'
      ],
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'commercials/**/*.md',
        typeName: 'Commercials',
        remark: {
          // remark options
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'editorials/**/*.md',
        typeName: 'Editorials',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
