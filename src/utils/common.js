import vue from 'vue'

const componnetsContext = require.context('@/components', true, /.vue$/)

componnetsContext.keys().forEach(component => {
    const componentConfig = componnetsContext(component).default;
    vue.component(componentConfig.name, componentConfig)
});



// 加载所有svg 资源 
const requestContext = require.context('@/assets/icons/svg',true,/.svg$/)

requestContext.keys().map(requestContext)


// v-hover 自定义指令

vue.directive('hover', {
    inserted:function(el,binding){
        // 绑定 事件 

        // 
    }

})


