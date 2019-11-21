<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter" />
    <!--当前路由只有元素meta显示为true才显示底部tab -->

    <!-- <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center"></el-amap> -->
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
import { mapActions } from "vuex";
export default {
  data() {
    let self = this;
    return {
      positions: {
        lng: "",
        lat: "",
        address: "",
        loaded: false
      },
      center: [121.59996, 31.197646],
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              // o.getCurrentPosition((status, result) => {
              //   console.log(result);  //  能获取定位的所有信息
              //   if (result && result.position) {
              //     self.str = result.formattedAddress;
              //     self.positions.address = self.str.substring(
              //       self.str.indexOf("市") + 1
              //     );
              //     self.positions.lng = result.position.lng;
              //     self.positions.lat = result.position.lat;
              //     self.positions.loaded = true;
              //     self.$nextTick();
              //     // 把获取的数据提交到 store 的数据中，以便其他单文件组件使用
              //     self.$store.commit("POSITION", self.positions);
              //     // console.log(self.positions);
              //     sessionStorage.setItem("id", JSON.stringify(self.positions));
              //   }
              // });
            }
          }
        }
      ]
    };
  },
  mounted() {
    this.getAddress();
    this.getUserInfo();
  },
  methods: {
    ...mapActions(["getAddress","getUserInfo"])
  },
  components: {
    FooterGuide
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
