* cesium的官方配置是 使用 `"postinstall": "symlink-dir node_modules/cesium/Build/Cesium public/cesium"`
* symlink-dir命令将node_modules里面的cesium链接到public文件夹下（其实为什么不能直接引用node_modules里面的文件呢）
  * public文件下的资源文件不会被webpack打包，可以直接被浏览器引用加载，可能是这个原因，放在public目录下避免了打包过程，节省了资源
  * 但对于next.js尤其是在vercel上部署时会遇到` Every request to Workers/Assets/Widgets, etc. gets a 404,`静态资源文件路径找不到的问题，或者报错   `no such file or directory, mkdir '/vercel/output/static/_next- `
* 解决办法： 利用 *copy-webpack-plugin* 插件来强行将对应的文件复制到public目录下，详细的webpack配置放在了next.config.js里面
* 比较特殊的是引入方式不能用.. 访问了// import "../../public/cesium/Widgets/widgets.css";
  * 需要这样import "cesium/Build/Cesium/Widgets/widgets.css";
* 与cesium的集成参考 https://community.cesium.com/t/success-next-js-14-typescript-cesium-on-vercel/31109
* 
```ts
  // I want to make the earth rotate
  // Please tell me how to use it in Resium. I successfully implemented this code in CesiumJS's sandcastle, but I can't do it in Resium. Please help.

  const viewer = new Cesium.Viewer("cesiumContainer");
  const scene = viewer.scene;
  const clock = viewer.clock;

  viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));

  const camera = new Cesium.Camera(scene);

  // 1. Fly to a position with a top-down view
  viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(126, 37, 15000000.0)
  });

  // 1. Using a cartesian offset
  //const center = Cesium.Cartesian3.fromDegrees(-98.0, 40.0);
  //viewer.camera.lookAt(center, new Cesium.Cartesian3(0.0, -4790000.0, 3930000.0));

  function icrf(scene, time) {
  if (scene.mode !== Cesium.SceneMode.SCENE3D) {
  return;
  }

  var icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(time);
  if (Cesium.defined(icrfToFixed)) {
      var camera = viewer.camera;
      var offset = Cesium.Cartesian3.clone(camera.position);
      var transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed);
      camera.lookAtTransform(transform, offset);
  }
  }

  viewer.scene.postUpdate.addEventListener(icrf);

```