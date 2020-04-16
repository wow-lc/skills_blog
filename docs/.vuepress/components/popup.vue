<template>
  <div>
      <button @click="openPopup">
          <slot></slot>
      </button>
  </div>
</template>

<script>
// 单例模式
let createSingleton = function(func) {
    let instance;
    return function() {
        return instance || (instance = func.apply(this,arguments));
    }
};
let createPopup = createSingleton(() => {
    let div = document.createElement('div');
    div.className = 'popup-shade-box';
    div.innerHTML = '单例消息框';
    let closeNode = document.createElement('i');
    closeNode.className = 'popup-close';
    closeNode.innerHTML = 'X';
    div.appendChild(closeNode);
    document.body.appendChild(div);
    closeNode.addEventListener('click', () => {
        div.style.display = 'none';
    })
    return div;
});

export default {
    methods: {
        openPopup() {
           createPopup().style.display='block';
        }
    }
}
</script>

<style>
@keyframes move-in {
    0% {top: 150px}
    50% {top: 120px}
}
@keyframes move-out {
    0% {top: 150px}
    50% {top: 120px}
}
.popup-shade-box {
    z-index: 999;
    position: fixed;
    left:0;
    right:0;
    top: 120px;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    margin: 0 auto;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: rgba(0,0,0, 0.8);
    animation: move-in .5s ease;
}
.popup-close{
    position: absolute;
    right: 5px;
    border: 5px solid transparent;
    line-height: 30px;
    cursor: pointer;
}
</style>