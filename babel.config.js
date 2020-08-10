module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        alias: {
          "#containers": "./src/containers",
          "#branding": "./src/branding",
          "#screens": "./src/screens",
          "#constants": "./src/constants",
          "#store": "./src/store",
          "#api": "./src/helpers/api",
          "#helpers": "./src/helpers",
          "#utils": "./src/utils",
          "#enum": "./src/enum",
          "#selectors": "./src/selectors",
          "#styles": "./src/styles-global",
          "#hooks": "./src/hooks",
          "#navigation": "./src/navigation"
        }
      }
    ]
  ]
};
