<template>
  <section class="order">
    <HeaderTop title="订单列表" />
    <section class="order_no_login" v-if="!userInfo._id">
      <img src="../../assets/images/order/person.png" />
      <h3>登录后查看外卖订单</h3>
      <router-link :to="'/login'">立即登陆</router-link>
    </section>
    <section class="order_no_login" v-else>
      <h3>暂无订单</h3>
    </section>
  </section>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    HeaderTop
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.order {
  width: 100%;
}
section.order .order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
section.order .order_no_login > img {
  display: block;
  width: 100%;
  height: 30%;
}
section.order .order_no_login > h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
section.order .order_no_login > button {
  display: inline-block;
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>
