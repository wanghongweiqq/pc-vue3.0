// element-plus 按需引入.scss
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          console.log(111111)
          console.log(name)
          name = name.slice(3)
          return `element-plus/packages/theme-chalk/src/${ name }.scss`
        },
      },
    ],
  ],
}

// element-plus 按需引入.css
// module.exports = {
//   plugins: [
//     [
//       'import',
//       {
//         libraryName: 'element-plus',
//         customStyleName: (name) => {
//           console.log(222222)
//           console.log(name)
//           return `element-plus/lib/theme-chalk/${ name }.css`
//         },
//       },
//     ],
//   ],
// }
