Update documentation to support recent Next versions #655
Open
gip opened this issue last month · 0 comments
Comments
@gip
gip commented last month
Documentation could be updated as for recent version of Next, the next.config.js file should be changed to:

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      })
    )
    return config
  }
}

export default nextConfig
Happy to do a PR if that helps.