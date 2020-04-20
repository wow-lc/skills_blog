<!-- @format -->

<template>
  <div>
    <div class="title">控制台console查看不同</div>
    <div style="display: flex;">
      <div ref="box" @mousemove="handleThrottleMouse" class="box">
        throttle处理: {{ desc }}
      </div>
      <div ref="box" @mousemove="handleMouse" class="box">
        未作处理: {{ desc }}
      </div>
    </div>
  </div>
</template>

<script>
function throttle(fn, wait) {
  let start = 0;
  return function () {
    let now = Date.now();
    let context = this;
    let args = arguments;
    if (now - start > wait) {
      start = now;
      fn.apply(context, args);
    }
  };
}
export default {
  data() {
    return {
      desc: "0,0",
    };
  },
  computed: {
    handleThrottleMouse() {
      return throttle(this.handleMouse, 100);
    },
  },
  methods: {
    handleMouse: function ({ offsetX, offsetY }) {
      console.log(offsetX, offsetY);
      this.desc = `${offsetX} , ${offsetY}`;
    },
  },
  mouted() {},
};
</script>

<style scoped>
@keyframes myRotate {
  0% {
    color: #0f4f81;
  }
  50% {
    color: #3c9052;
  }
  100% {
    color: rgb(0, 204, 204);
  }
}
.title {
  transform-origin: center center;
  animation: myRotate 3s linear infinite;
}
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #0f4f81;
  color: white;
}
.box:last-child {
  margin-left: 10px;
  background-color: #3c9052;
}
</style>
