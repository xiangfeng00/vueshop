<template>
  <div class="star" :class="'star-'+size">
    <!-- star-24 -->
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>
<script>
const CLASS_ON = 'on' 
const CLASS_HALF = 'half' 
const CLASS_OFF = 'off'
export default {
  props: {
    score: Number,
    size: Number
  },
  computed: {
    starClasses() {
      const scs = [];
      const { score } = this;
      const scoreInteger = Math.floor(score); 
      // 添加类名 CLASS_ON
      for (let i = 0; i < scoreInteger; i++) {
        scs.push(CLASS_ON);
      }
      // 添加类名 CLASS_HALF
      if (score * 10 - scoreInteger * 10 >= 5) {
        scs.push(CLASS_HALF);
      }
      // 添加类名 CLASS_OFF
      while (scs.length < 5) {
        scs.push(CLASS_OFF);
      }
      return scs;
    }
  }
};
</script>
<style  scoped>
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star {
  float: left;
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
  .shop_rating_order_left
  .star
  .star-item {
  display: inline-block;
  background-repeat: no-repeat;
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
  .star.star-48
  .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
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
  .star.star-48
  .star-item:last-child {
  margin-right: 0;
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
  .star.star-48
  .star-item.on {
  background-image: url("images/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.on {
    background-image: url("images/star48_on@3x.png");
  }
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
  .star.star-48
  .star-item.half {
  background-image: url("images/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.half {
    background-image: url("images/star48_half@3x.png");
  }
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
  .star.star-48
  .star-item.off {
  background-image: url("images/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.off {
    background-image: url("images/star48_off@3x.png");
  }
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
  .star.star-36
  .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
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
  .star.star-36
  .star-item:last-child {
  margin-right: 0;
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
  .star.star-36
  .star-item.on {
  background-image: url("images/star36_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.on {
    background-image: url("images/star36_on@3x.png");
  }
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
  .star.star-36
  .star-item.half {
  background-image: url("images/star36_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.half {
    background-image: url("images/star36_half@3x.png");
  }
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
  .star.star-36
  .star-item.off {
  background-image: url("images/star36_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.off {
    background-image: url("images/star36_off@3x.png");
  }
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
  .star.star-24
  .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
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
  .star.star-24
  .star-item:last-child {
  margin-right: 0;
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
  .star.star-24
  .star-item.on {
  background-image: url("images/star24_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.on {
    background-image: url("images/star24_on@3x.png");
  }
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
  .star.star-24
  .star-item.half {
  background-image: url("images/star24_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.half {
    background-image: url("images/star24_half@3x.png");
  }
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
  .star.star-24
  .star-item.off {
  background-image: url("images/star24_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.off {
    background-image: url("images/star24_off@3x.png");
  }
}
</style>

