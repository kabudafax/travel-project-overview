/** @type {import('next').NextConfig} */
// import webpack from "webpack";

// const nextConfig = {
//   webpack: (config) => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         CESIUM_BASE_URL: JSON.stringify("cesium"),
//       })
//     );
//     return config;
//   },
// };

// export default nextConfig;
// const webpack = require("webpack");

// module.exports = {
//   // reactStrictMode: true,
//   webpack: (config) => {
//     config.plugins.push(
//       new webpack.DefinePlugin({
//         CESIUM_BASE_URL: JSON.stringify("cesium"),
//       })
//     );
//     return config;
//   },
// };
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("cesium"),
      })
    );
    return config;
  },
};

export default nextConfig;
