<template>
  <div>
    <div id='map' :style="{width: '600px', height: '500px'}"/>

  </div>
</template>
<script>
// import echarts from 'echarts'
export default {
  name: 'layout',
  data(){
    return{

    }
  },
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      let chart = this.$echarts.init(document.getElementById('map'))
      chart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });

    }
  },
  
}
</script>
<style scope>

</style>