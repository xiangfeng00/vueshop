<template>
  <div class="shop_container">
    <ul class="shop_list" v-if="shops.length>0">
      <li class="shop_li border-1px" v-for="(item,index) in shops" :key="index" @click="$router.push('/shop')">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/shop/1.jpg" />
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">{{item.name}}</h4>
              <ul class="shop_detail_ul" >
                <li class="supports" v-for="item in item.supports" :key="item.id">{{item.icon_name}}</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                  <Star :score="item.rating" :size="24" />
                <div class="rating_section">{{item.rating}}</div>
                <div class="order_section">月售{{item.recent_order_num}}单</div>
              </section>
              <section class="shop_rating_order_right">
                <span class="delivery_style delivery_right">外卖专送</span>
              </section>
            </section>
            <section class="shop_distance">
              <p class="shop_delivery_msg">
                <span>¥{{item.float_minimum_order_amount}}起送</span>
                <span class="segmentation">/</span>
                <span>配送费约¥{{item.float_delivery_fee}}</span>
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <ul v-else>
      <li v-for="item in 6" :key="item">
        <img src="./images//shop/shop_back.svg" alt="back">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Star from "../Star/Star"
export default {
  data() {
    return {
      // baseImageUrl:'http://cangdu.org:8001/img/'
    };
  },
  computed: {
    ...mapState(["shops"])
  },
  components:{
      Star
  }
 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.msite .msite_shop_list .shop_container {
  margin-bottom: 50px;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li {
  position: relative;
  width: 100%;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
  transform: scaleY(0.5);
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li > a {
  *zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li > a::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left {
  float: left;
  box-sizing: border-box;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left
  .shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right {
  float: right;
  width: 77%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header {
  *zoom: 1;
  width: 100%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title {
  float: left;
  width: 140px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title::before {
  content: "优选好店";
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 5px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul {
  float: right;
  margin-top: 3px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul
  .supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order {
  *zoom: 1;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}

section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right {
  float: right;
  font-size: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_left {
  color: #fff;
  margin-right: -10px;
  background-color: #02a774;
  border: 1px solid #02a774;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance {
  *zoom: 1;
  width: 100%;
  font-size: 12px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .shop_delivery_msg {
  float: left;
  transform-origin: 0;
  transform: scale(0.9);
  color: #666;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .segmentation {
  color: #ccc;
}
</style>
