<template>
  <div>
    <!-- <div id='map' :style="{width: '600px', height: '500px'}"/>
    <div id="china" :style="{width: '600px', height: '500px'}"> -->
    <!-- <button id="btn-test" :onclick="this.getLocation()">check status</button> -->

    <!-- </div> -->
  </div>
</template>
<script>
// import 'echarts/map/js/china.js';
export default {
  name: 'layout',
  data(){
    return{

    }
  },
//   mounted() {
//     this.drawMap();
//     this.drawChinaMap();
//     // this.getLocation();
//     this.randomData();
//     // this.success();
//     // this.error();
//   },
//   methods: {
//     drawMap() {
//       let chart = this.$echarts.init(document.getElementById('map'))
//       chart.setOption({
//             title: { text: '在Vue中使用echarts' },
//             tooltip: {},
//             xAxis: {
//                 data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//             },
//             yAxis: {},
//             series: [{
//                 name: '销量',
//                 type: 'bar',
//                 data: [5, 20, 36, 10, 10, 20]
//             }]
//         });

//     },
//    error(err) {
//     console.warn('ERROR(' + err.code + '): ' + err.message);
//     switch(error.code){
//       case 1:
//       alert("位置服务被拒绝");
//       break;

//       case 2:
//       alert("暂时获取不到位置信息");
//       break;

//       case 3:
//       alert("获取信息超时");
//       break;

//       case 4:
//       alert("未知错误");
//       break;
//     }
// },
//     getLocation(){
//        var options={
//            enableHighAccuracy:true, 
//            maximumAge:0
//        }
//        if(navigator.geolocation){
//            //浏览器支持geolocation
//            // alert("浏览器支持geolocation");
//            navigator.geolocation.getCurrentPosition(this.success,this.error,options);

//         }else{
//             //浏览器不支持geolocation
//             alert("浏览器不支持geolocation");
//         }
//   },
//   success(pos) {
//     console.log("-------------------")
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');
// },
//     randomData() {
//         return Math.round(Math.random()*500);
//     },
//     drawChinaMap() {
//       let mydata = [
//         {name: '北京',value: '100' },{name: '天津',value: this.randomData() },
//         {name: '上海',value: this.randomData() },{name: '重庆',value: this.randomData() },
//         {name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },
//         {name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },
//         {name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },
//         {name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },
//         {name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },
//         {name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },
//         {name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },
//         {name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },
//         {name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },
//         {name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },
//         {name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },
//         {name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },
//         {name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },
//         {name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },
//         {name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }
//     ]
//  // 基于准备好的dom，初始化echarts实例
//     // let china = this.$echarts.init(document.getElementById('china'))
//     let chart = this.$echarts.init(document.getElementById('china'))

//     let map_option = {
//         backgroundColor: '#FFFFFF',
//         title: {
//             text: '全国地图大数据',
//             subtext: '',
//             x:'center'
//         },
//         tooltip : {
//             trigger: 'item'
//         },
//         //左侧小导航图标
//         visualMap: {
//             show : true,
//             x: 'left',
//             y: 'center',
//             splitList: [
//                 {start: 500, end:600},{start: 400, end: 500},
//                 {start: 300, end: 400},{start: 200, end: 300},
//                 {start: 100, end: 200},{start: 0, end: 100},
//             ],
//             color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
//         },
//         series:[{
//             name: '数据',
//             type: 'map',
//             mapType: 'china',
//             roam: true,
//             label: {
//                 normal: {
//                     show: true  //省份名称
//                 },
//                 emphasis: {
//                     show: false
//                 }
//             },
//             data:mydata  //数据
//         }]

//     };
//     chart.setOption(map_option)
//   },
//   }
   
  
}


</script>
<style scope>

</style>