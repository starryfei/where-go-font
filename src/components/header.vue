<template>
  <div>
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
var chartData = [];
export default {
  name: 'header',
    // el: '#app',

  data(){
    return{
      name:"starryfei",
    }
  },
  mounted() {
    // this.drawChinaMap();
    // this.randomData();
    this.drawChinaMap()
 
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
      console.log(chartData)
  
 // 基于准备好的dom，初始化echarts实例
    // let china = this.$echarts.init(document.getElementById('china'))
    let chart = this.$echarts.init(document.getElementById('china'))

    let map_option = {
        // backgroundColor: '#FFFFFF',
        title: {
            text: '旅行路线',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        toolbox:{
          show: true,
          feature: {
            saveAsImage: {
              show: true,
            }
          }
        },
        geo: {
          type: 'map',
          map: 'china',  //重点
          roam: true,
          label: {
              normal: {
                  show: true,
                  color:'#111'
              },
              emphasis: {
                  textStyle: {
                      color: '#111',
                      show: true,
                  }
              }
          },
          itemStyle: {
            normal: {
                borderColor: '#323c48',
                areaColor: '#ddb926',
            },
            emphasis: {
                areaColor: '#2a333d',
                // borderWidth: 0
            }
          },

        },
        series:[{
            name: '地址',
            type: 'scatter',
            // mapType: 'china',
            coordinateSystem: 'geo',

            // roam: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data:chartData,  //数据
            //  markLine : {
            //         smooth:true,
            //         symbol: ['none', 'none'],
            //         effect : {
            //             show: true,
            //             scaleSize: 1,
            //             period: 30,
            //             color: '#fff',
            //             shadowColor: 'rgba(220,220,220,0.4)',
            //             shadowBlur : 5
            //         },
            //         itemStyle : {
            //             normal: {
            //                 borderWidth: 0.05,
            //                 lineStyle: {
            //                     type: 'solid',
            //                     color: 'aqua'
            //                 }
            //             }
            //         },
            //         data : chartData
            //     },
            symbolSize: function(val) {
              return 10;
            },
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
                console.log(response.data.code)

                let lat = response.data.lat;
                let lng = response.data.lng;
                if(response.data.code == 200) {
                  chartData.push({
                    name: value,
                    value:[lng,lat]
                  }),
                  this.drawChinaMap()

                  
                };
                this.$message({
                  type: 'success',
                  message: '你的地点是: ' +  lat+lng,
                  
                })
              }).cath(error =>{
                  console.log('load failure: '+error)
              });
              
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
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