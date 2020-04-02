<!-- @format -->

<template>
  <div>
    <input
      @input="handleInput"
      @blur="handleInput"
      v-model="inputVal"
      placeholder="请输入一些值"
    />
    <img class="load-icon" v-show="loading" src="../assets/loading.png" />
    <div class="show-box">
      模拟远程数据：
      <p v-for="item in foods">{{ item }}</p>
    </div>
  </div>
</template>

<script>
let timer;
export default {
  data() {
    return {
      loading: false,
      inputVal: "",
      foods: [{ value: "烧饼" }, { value: "cocal" }]
    };
  },
  methods: {
    handleInput(e) {
      let that = this;
      let val = e.target.value;
      if (timer) {
        clearTimeout(timer);
      }
      // 是否立即执行
      let callNow = !timer;
      this.loading = true;
      if (callNow) {
        that.foods.map((item, index) => {
          item.value = val + "_" + index;
        });
        this.loading = false;
      }
      timer = setTimeout(() => {
        that.foods.map((item, index) => {
          item.value = val + "_" + index;
        });
        this.loading = false;
        timer = null;
      }, 2000);
    }
  }
};
</script>

<style>
@keyframes myRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.load-icon {
  width: 20px;
  animation: myRotate 5s linear infinite;
}
.show-box {
  width: 100%;
  background-color: #000;
  color: #fff;
}
</style>
