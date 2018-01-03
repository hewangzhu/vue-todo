import Vue from 'vue';
// 使用vue构建webapp
import App from './App.vue';
// 将App挂载(mount)到页面(root)上(挂载点)

new Vue({
    el: '#root',//挂载点为 id=root
    template: '<App />',
    components:{
        App
    }
});


