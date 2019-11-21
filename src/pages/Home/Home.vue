
<template>
  <section class="msite">
    <!-- 公共头部设置插槽 slot -->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="search" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link class="header_login" slot="login" :to="userInfo._id?'/userinfo':'/Login'">
        <span class="header_login_text" v-if="!userInfo._id">登录/注册</span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorysArr.length>0">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(items,index2) in item" :key="index2">
              <div class="food_container">
                <img :src="baseImageUrl+items.image_url" />
              </div>
              <span>{{items.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src='./images/msite_back.svg' alt="back" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList/>
    </div>
  </section>
</template>
<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Swiper from "swiper";
import ShopList from "../../components/ShopList/ShopList";
import "swiper/css/swiper.min.css";
import "../../assets/css/home.css";
export default {
  data() {
    return {
      baseImageUrl: "http://fuss10.elemecdn.com/"
    };
  },
  mounted() {
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    categorysArr() {
      const max = 8;
      const arr = [];
      const { categorys } = this;
      let smallArr = [];
      categorys.forEach((item, index) => {
        if (smallArr.length === 0) {
          arr.push(smallArr);
        }
        smallArr.push(item);
        if (smallArr.length === max) {
          smallArr = [];
        }
      });
      return arr;
    }
  },
  watch: {
    categorys(value) {
      //界面更新就立即创建Swiper对象
      this.$nextTick(() => {//一旦完成界面更新，立即调用
      //创建一个swiper实例对象，实现轮播
        new Swiper(".swiper-container", {
          //分页
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true//循环
        });
      });
    }
  },

  components: {
    HeaderTop,
    ShopList
  }
};
</script>
<style  scoped>
</style>