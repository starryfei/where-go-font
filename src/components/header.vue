<template>
  <div>
  <div id="app">
  {{ path }}
  </div>
  <el-container :style="{'hight': '100%'}" direction="vertical">
    <el-header >
      <el-button type="primary" :style="{'margin-right':'20px'}" icon="el-icon-search">搜索</el-button>
      <i class="el-icon-setting"></i>
      <span :style="{'margin-right': '50px','text-align': 'right'}">
        {{name}}
      </span>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <div hight="0px">
          <el-button id='location' icon="el-icon-location" @click="getLocation">自动定位</el-button>
          <el-button id='location_self' icon="el-icon-location-outline" @click="location_by_self">手动定位</el-button>

        </div>
          <div id="china" :style="{width: '100%', height: '500px'}">
        </div>
      </el-main>
    </el-container>
  </el-container>
 
  </div>
</template>
<script>
import 'echarts/map/js/china.js';
import layoutVue from '../views/layout.vue';
export default {
  name: 'header',
    // el: '#app',

  data(){
    return{
      path: '',
      name:"starryfei",
    }
  },
  mounted() {
    this.drawChinaMap();
    this.randomData();
 
  },
  methods: {
   error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    switch(error.code){
      case 1:
      alert("位置服务被拒绝");
      break;

      case 2:
      alert("暂时获取不到位置信息");
      break;

      case 3:
      alert("获取信息超时");
      break;

      case 4:
      alert("未知错误");
      break;
    }
},
    getLocation(){
       var options={
           enableHighAccuracy:true, 
           maximumAge:0
       }
       if(navigator.geolocation){
           //浏览器支持geolocation
           // alert("浏览器支持geolocation");
           navigator.geolocation.getCurrentPosition(this.success,this.error,options);

        }else{
            //浏览器不支持geolocation
            alert("浏览器不支持geolocation");
        }
  },
  success(pos) {
    console.log("-------------------")
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
},
    randomData() {
        return Math.round(Math.random()*500);
    },
    drawChinaMap() {
      let mydata = [
        {name: '北京',value: '100' },{name: '天津',value: this.randomData() },
        {name: '上海',value: this.randomData() },{name: '重庆',value: this.randomData() },
        {name: '河北',value: this.randomData() },{name: '河南',value: this.randomData() },
        {name: '云南',value: this.randomData() },{name: '辽宁',value: this.randomData() },
        {name: '黑龙江',value: this.randomData() },{name: '湖南',value: this.randomData() },
        {name: '安徽',value: this.randomData() },{name: '山东',value: this.randomData() },
        {name: '新疆',value: this.randomData() },{name: '江苏',value: this.randomData() },
        {name: '浙江',value: this.randomData() },{name: '江西',value: this.randomData() },
        {name: '湖北',value: this.randomData() },{name: '广西',value: this.randomData() },
        {name: '甘肃',value: this.randomData() },{name: '山西',value: this.randomData() },
        {name: '内蒙古',value: this.randomData() },{name: '陕西',value: this.randomData() },
        {name: '吉林',value: this.randomData() },{name: '福建',value: this.randomData() },
        {name: '贵州',value: this.randomData() },{name: '广东',value: this.randomData() },
        {name: '青海',value: this.randomData() },{name: '西藏',value: this.randomData() },
        {name: '四川',value: this.randomData() },{name: '宁夏',value: this.randomData() },
        {name: '海南',value: this.randomData() },{name: '台湾',value: this.randomData() },
        {name: '香港',value: this.randomData() },{name: '澳门',value: this.randomData() }
    ]
 // 基于准备好的dom，初始化echarts实例
    // let china = this.$echarts.init(document.getElementById('china'))
    let chart = this.$echarts.init(document.getElementById('china'))

    let map_option = {
        backgroundColor: '#FFFFFF',
        title: {
            text: '全国地图大数据',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        //左侧小导航图标
        visualMap: {
            show : true,
            x: 'left',
            y: 'center',
            splitList: [
                {start: 500, end:600},{start: 400, end: 500},
                {start: 300, end: 400},{start: 200, end: 300},
                {start: 100, end: 200},{start: 0, end: 100},
            ],
            color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']
        },
        series:[{
            name: '数据',
            type: 'map',
            mapType: 'china',
            // roam: true,
            label: {
                normal: {
                    show: true  //省份名称
                },
                emphasis: {
                    show: false
                }
            },
            data:mydata  //数据
        }]

    };
    chart.setOption(map_option)
  },
   location_by_self() {
        const _this = this;
        this.$prompt('请输入地点', '地点录入', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          
          this.$axios.get('/api/address?address='+value)
              .then(response => {
                // this.path = response;
                // console.log(response);
                console.log(response.data.result)

                let lat = response.data.lat;
                let lng = response.data.lng;


                console.log(lat);

                 this.$message({
                  type: 'success',
                  // path = value,
                  message: '你的地点是: ' +  lat+lng,
                })
              }).cath(error =>{
                  console.log('load failure: '+error)
              })

         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      // this.$axios
      // .get('/api/address?address='+value)
      // .then(response => (this.path = response))
      }
      
  }
   
  
}


</script>
<style>
    .div {
      color: #333;
      background-color: #E9EEF3;

    }
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: right;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
    line-height: 0px;
    padding: 5px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>