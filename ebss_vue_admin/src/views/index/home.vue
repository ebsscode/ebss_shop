<template>
    <div class="container">
        <div class="hi-content">
          <a-row>
            <a-col :span="18" class="flex-row align-center">
              <a-image
                  :width="55"
                  style="border-radius: 100%"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div style="margin-left: 10px" class="">
                <div style="font-size:22px;font-weight: 700">下午好 admin ! 欢迎来到后台管理系统</div>
                <div>下午好 admin ! 欢迎来到后台管理系统</div>
              </div>
            </a-col>
            <a-col :span="6">

            </a-col>
          </a-row>
        </div>
        <a-flex gap="middle" style="margin-top: 10px;">
          <div class="flat-item">
            <div class="justify-between">
              <span style="font-size: 14px;">总销售额</span>
              <span class="QQ811565456 hewei-bangzhu"/>
            </div>
            <div class="middle">￥65325.26</div>
            <a-divider style="margin: 8px 0"/>
            <div class="justify-between">
              <span style="font-size: 14px;">日销售额 ￥63.26</span>
            </div>
          </div>
          <div class="flat-item">
            <div class="justify-between">
              <span style="font-size: 14px;">访问量</span>
              <span class="QQ811565456 hewei-bangzhu"/>
            </div>
            <div class="middle" id="visitor">
            </div>
            <a-divider style="margin: 8px 0"/>
            <div class="justify-between">
              <span style="font-size: 14px;">日访问量 63</span>
            </div>
          </div>
          <div class="flat-item">
            <div class="justify-between">
              <span style="font-size: 14px;">用户数</span>
              <span class="QQ811565456 hewei-bangzhu"/>
            </div>
            <div class="middle" id="user-pip">
            </div>
            <a-divider style="margin: 8px 0"/>
            <div class="justify-between">
              <span style="font-size: 14px;">日新增用户 23</span>
            </div>
          </div>
          <div class="flat-item">
            <div class="justify-between">
              <span style="font-size: 14px;">总订单数</span>
              <span class="QQ811565456 hewei-bangzhu"/>
            </div>
            <div class="middle" id="orderPip"></div>
            <a-divider style="margin: 8px 0"/>
            <div class="justify-between">
              <span style="font-size: 14px;">日订单 5</span>
            </div>
          </div>
        </a-flex>

        <a-tabs v-model:activeKey="activeKey" class="data-middle" style="margin-top: 10px;">
          <a-tab-pane key="1" tab="访问量">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesBar">
                  <div id="columnPlotContainer1" />
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesRank">
                  <h4 class="rankingTitle">
                    门店销售额排名
                  </h4>
                  <ul class="rankingList">
                    <li v-for="(item, index) in rankingListData" :key="index">
                    <span
                        :class="`rankingItemNumber ${index < 3 ? 'active' : ''}`"
                    >
                      {{ index + 1 }}
                    </span>
                      <span class="rankingItemTitle" :title="item.title">
                      {{ item.title }}
                    </span>
                      <span class="rankingItemValue">
                      {{ item.total }}
                    </span>
                    </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="2" tab="销售额" force-render>销售额</a-tab-pane>
          <a-tab-pane key="3" tab="订单量" force-render>订单量</a-tab-pane>
          <template #rightExtra>
            <div class="">
              <div class="salesExtra">
                <a key="day" class="currentDate" @click="">今日</a>
                <a key="week" @click="">本周</a>
                <a key="month" @click="">本月</a>
                <a key="year" @click="">本年</a>
              </div>
              <a-range-picker
                  :value="rangePickerValue"
                  :style="{ width: '256px' }"
              />
            </div>
          </template>
        </a-tabs>




      <a-flex gap="middle" class="bottom-item">
        <div class="content">
          <a-card
              :loading="false"
              class="salesCard"
              :bordered="false"
              title="销售额类别占比"
              :style="{  height: '100%',background: '#ebf0f8'  }" >
            <template #extra>
              <div class="salesCardExtra">
                <div class="salesTypeRadio">
                  <a-radio-group :value="salesType" @change="">
                    <a-radio-button value="all">
                      全部渠道
                    </a-radio-button>
                    <a-radio-button value="online">
                      线上
                    </a-radio-button>
                    <a-radio-button value="stores">
                      门店
                    </a-radio-button>
                  </a-radio-group>
                </div>
              </div>
            </template>
            <div>
              <a-typography-text>销售额</a-typography-text>
              <div id="pieContainer1" />
            </div>
          </a-card>
        </div>
        <div class="content">
          <a-card
              :loading="false"
              class="salesCard"
              :bordered="false"
              title="快捷看板"
              :style="{  height: '100%',background: '#ebf0f8'  }" >
            <template #extra>
             <span class="QQ811565456 hewei-xiangyou1"></span>
            </template>
            <div>
              <a-row  class="justify-between">
                <a-col :span="11" class="tool-item justify-between align-center">
                  <div>
                    <div style="font-size: 22px">全开源项目，欢迎 star ...</div>
                    <div style="font-size: 14px;margin-top: 10px;">一款绝佳的中后台管理开发框架</div>
                  </div>
                  <span class="QQ811565456 hewei-31shoucangxuanzhong" style="font-size: 35px;"></span>
                </a-col>
                <a-col :span="11" class="tool-item justify-between align-center">
                  <div>
                    <div style="font-size: 22px">功能丰富 ...</div>
                    <div style="font-size: 14px;margin-top: 10px;">免费开发</div>
                  </div>
                  <span class="QQ811565456 hewei-zhanbao-kefuzhanbao" style="font-size: 35px;"></span>
                </a-col>
              </a-row>
              <a-row class="justify-between">
                <a-col :span="11" class="tool-item justify-between align-center">
                  <div>
                    <div style="font-size: 22px">安全可行，性能卓越</div>
                    <div style="font-size: 14px;margin-top: 10px;">多种安全技术</div>
                  </div>
                  <span class="QQ811565456 hewei-daimashili" style="font-size: 35px;"></span>
                </a-col>
                <a-col :span="11" class="tool-item justify-between align-center">
                  <div>
                    <div style="font-size: 22px">版本</div>
                    <div style="font-size: 14px;margin-top: 10px;">V 1.0.1</div>
                  </div>
                  <span class="QQ811565456 hewei-banben" style="font-size: 35px;"></span>
                </a-col>
              </a-row>
              <div class="justify-between">
                <div id="sysPie1" style="height: 300px;width: 300px;"></div>
                <div id="sysPie2" style="height: 300px;width: 300px;"></div>
              </div>
            </div>
          </a-card>
        </div>
      </a-flex>



    </div>
</template>
<script lang="jsx">
import { Chart } from '@antv/g2';
export default {
    name: "home",
    components:{
    },
    data: function () {
      return {
          activeKey:'1',
          rangePickerValue:null,
          salesType:null,
          rankingListData:[{
            title: `工专路1号店`,
            total: 323234,
          },{
            title: `工专路2号店`,
            total: 322234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },{
            title: `工专路3号店`,
            total: 333234,
          },],
          data : [
          { year: '1', value: 4 },
          { year: '2', value: 5 },
          { year: '3', value: 50 },
          { year: '4', value: 5 },
          { year: '5', value: 5 },
          { year: '6', value: 20 },
          { year: '7', value: 6 },
        ],
      };
    },
    async mounted() {
      this.Visitor()
      this.userPip()
      this.orderPip()
      this.columnPlotContainer1()
      this.pieContainer1()
      this.pieContainer2()
    },
    methods: {
      pieContainer2(){
        const chart1 = new Chart({
          container: 'sysPie1',
          autoFit: true,
        });
        chart1
            .gauge()
            .data({
              value: {
                target: 120,
                total: 400,
                name: 'score',
              },
            })
            .style(
                'textContent',
                (target, total) => `CPU：${(target / total) * 100}%`,
            )
            .legend(false);
        chart1.render();

        const chart2 = new Chart({
          container: 'sysPie2',
          autoFit: true,
        });
        chart2
            .gauge()
            .data({
              value: {
                target: 120,
                total: 400,
                name: 'score',
              },
            })
            .style(
                'textContent',
                (target, total) => `内存：${(target / total) * 100}%`,
            )
            .legend(false);
        chart2.render();
      },
      pieContainer1(){
        const data = [
          { item: '事例一', count: 40, percent: 0.4 },
          { item: '事例二', count: 21, percent: 0.21 },
          { item: '事例三', count: 17, percent: 0.17 },
          { item: '事例四', count: 13, percent: 0.13 },
          { item: '事例五', count: 9, percent: 0.09 },
        ];

        const chart = new Chart({
          container: 'pieContainer1',
          autoFit: true,
        });

        chart.coordinate({ type: 'theta', outerRadius: 0.8, innerRadius: 0.5 });

        chart
            .interval()
            .data(data)
            .transform({ type: 'stackY' })
            .encode('y', 'percent')
            .encode('color', 'item')
            .legend('color', { position: 'bottom', layout: { justifyContent: 'center' } })
            .label({
              position: 'outside',
              text: (data) => `${data.item}: ${data.percent * 100}%`,
            })
            .animate('enter', { type: 'waveIn', duration: 1500 })
            .tooltip((data) => ({
              name: data.item,
              value: `${data.percent * 100}%`,
            }));

        chart
            .text()
            .style('text', '主机')
            // Relative position
            .style('x', '50%')
            .style('y', '50%')
            .style('dy', -25)
            .style('fontSize', 34)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart
            .text()
            .style('text', '200')
            // Relative position
            .style('x', '50%')
            .style('y', '50%')
            .style('dx', -25)
            .style('dy', 25)
            .style('fontSize', 44)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart
            .text()
            .style('text', '台')
            // Relative position
            .style('x', '50%')
            .style('y', '50%')
            .style('dx', 35)
            .style('dy', 25)
            .style('fontSize', 34)
            .style('fill', '#8c8c8c')
            .style('textAlign', 'center');

        chart.render();
      },
      Visitor(){
        const chart = new Chart({
          container: 'visitor',
          autoFit: true,
        });
        chart.data(this.data);
        chart
            .area()
            .encode('x', 'year')
            .encode('y', 'value')
            .encode('shape', 'smooth')
            .style('fill', 'linear-gradient(-90deg, white 0%, #724b98 100%)');
        chart
            .line()
            .encode('shape', 'smooth')
            .encode('x', 'year')
            .encode('y', 'value')
            .animate('enter', { type: 'pathIn', duration: 1500 })
            .style('stroke', '#724b98')

        chart.render();
      },
      columnPlotContainer1(){
        const data = [
          { letter: 'A', frequency: 0.08167 },
          { letter: 'B', frequency: 0.01492 },
          { letter: 'C', frequency: 0.02782 },
          { letter: 'D', frequency: 0.04253 },
          { letter: 'E', frequency: 0.12702 },
          { letter: 'F', frequency: 0.02288 },
          { letter: 'G', frequency: 0.02288 },
          { letter: 'H', frequency: 0.02288 },
          { letter: 'I', frequency: 0.02288 },
          { letter: 'J', frequency: 0.02288 },
        ];
        const chart = new Chart({
          container: 'columnPlotContainer1',
          autoFit: true,
        });
        chart.interval().data(data).encode('x', 'letter').encode('y', 'frequency').encode('color', 'letter').animate('enter', { type: 'scaleInY', duration: 1500 });
        chart.render();
      },
      orderPip(){
        const data = [
          { letter: 'A', frequency: 0.08167 },
          { letter: 'B', frequency: 0.01492 },
          { letter: 'C', frequency: 0.02782 },
          { letter: 'D', frequency: 0.04253 },
          { letter: 'E', frequency: 0.12702 },
          { letter: 'F', frequency: 0.02288 },
        ];
        const chart = new Chart({
          container: 'orderPip',
          autoFit: true,
        });
        chart.interval().data(data).encode('x', 'letter').encode('y', 'frequency').encode('color', 'letter').animate('enter', { type: 'scaleInX', duration: 1500 });
        chart.render();
      },
      userPip(){
        const chart = new Chart({
          container: 'user-pip',
          autoFit: true,
        });
        const data = [
          { item: '活跃用户', count: 40, percent: 0.4 },
          { item: '离线用户', count: 21, percent: 0.21 },
        ];
        chart.coordinate({ type: 'theta', outerRadius: 0.8 });
        chart
            .interval()
            .data(data)
            .transform({ type: 'stackY' })
            .encode('y', 'percent')
            .encode('color', 'item')
            .legend(false)
            .label({
              position: 'outside',
              text: (data) => `${data.item}: ${data.percent * 100}%`,
            })
            .animate('enter', { type: 'waveIn', duration: 1500 })
        chart.render();
      }
    }
}
</script >
<style scoped lang="less">
.container{
  padding: 12px;
  .hi-content{
    background: #ebf0f8;
    border-radius: 12px;
    padding: 15px 10px;
  }
  .bottom-item{
    margin-top: 10px;
    .content{
      width: 50%;
      border-radius: 12px;
      .tool-item{
        background: linear-gradient(90deg, #2097f7, #6fdaa5 100%);
        margin-bottom: 10px;
        padding: 15px;
        color: #ffffff
      }
    }
  }
  .flat-item{
    width: 25%;
    border-radius: 10px;
    background: #ebf0f8;
    padding: 10px;
    .middle{
      height: 100px;
      font-size: 30px;
      margin-top: 10px;
    }
  }
  .data-middle{
    background: #ebf0f8;
    border-radius: 12px;
    padding: 15px 10px;
    .salesExtra {
      display: inline-block;
      margin-right: 24px;
      a {
        margin-left: 24px;
        color: var(--text-color);
        &:hover {
          color: #1890ff;
        }
        &.currentDate {
          color: #1890ff;
        }
      }
    }
    .rankingList {
      margin: 25px 0 0;
      padding: 0;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        margin-top: 16px;
        zoom: 1;
        &::before,
        &::after {
          display: table;
          content: " ";
        }
        &::after {
          clear: both;
          height: 0;
          font-size: 0;
          visibility: hidden;
        }
        span {
          color: var(--text-color);
          font-size: 14px;
          line-height: 22px;
        }
        .rankingItemNumber {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-top: 1.5px;
          margin-right: 16px;
          font-weight: 600;
          font-size: 12px;
          line-height: 20px;
          text-align: center;
          background-color: #fafafa;
          border-radius: 20px;
          &.active {
            color: #fff;
            background-color: #314659;
          }
        }
        .rankingItemTitle {
          flex: 1;
          margin-right: 8px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }

}
</style>
