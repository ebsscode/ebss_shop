<template>
    <div class="flex-row ">
        <a-button type="primary" @click="visible=true">{{
                !visible && value && value.address ? '已选择:' + value.address : '选择地点'
            }}
        </a-button>
    </div>
    <a-modal v-model:open="visible" :title="`选择的地址：${form.address}`" :footer="null"
             width="700">
        <a-form
            layout="inline"
        >
            <a-form-item>
                <a-input placeholder="城市" v-model:value="form.city"/>
            </a-form-item>
            <a-form-item>
                <a-input placeholder="地址" v-model:value="form.keyword"/>
            </a-form-item>
            <div class="justify-end">
                <a-button type="default" @click="query">查询</a-button>
                <a-button type="primary" html-type="submit" @click="ok">保存</a-button>
            </div>
        </a-form>
        <div id="baiduMap"></div>
    </a-modal>
</template>

<script>
import {message} from "ant-design-vue";

export default {
    name: "MapSelect",
    components: {},
    data() {
        return {
            location: null,
            baidu_map: null,
            visible: false,
            form: {
                province: '',
                city: '',
                district: '',
                address: '',
                longitude: null,
                latitude: null,
                keyword: null,
            },
        }
    },
    props: {
        value: {
            type: Object,
            required: false
        }
    },
    created() {
        this.form = {...this.form, ...this.value}
    },
    watch: {
        visible(newV, oldV) {
            if (newV) {
                setTimeout(() => {
                    this.init()
                }, 300)
            }
        },
        'form.city'(newV, oldV) {
            if (newV) {
                this.query()
            }
        },
        'form.keyword'(newV, oldV) {
            if (newV) {
                this.query()
            }
        },
    },
    methods: {
        ok() {
            this.$emit('update:value', {...this.value, ...this.form})
            this.visible = false
        },
        query() {
            if (!this.visible) return;
            if (!this.form.city || !this.form.keyword) {
                message.error('请输入城市和关键字。如：上海市+浦东机场');
                return;
            }
            this.baidu_map.clearOverlays();

            let local = null
            if (this.form.city) {
                local = new BMapGL.LocalSearch(this.form.city, {
                    renderOptions: {map: this.baidu_map}
                });
            } else {
                local = new BMapGL.LocalSearch(this.baidu_map, {
                    renderOptions: {map: this.baidu_map}
                });
            }
            local.search(this.form.keyword);
        },
        async init() {
            let latlng = {
                latitude: null,
                longitude: null,
            }
            if (this.value && this.value.longitude) {
                latlng = {
                    latitude: this.value.latitude,
                    longitude: this.value.longitude,
                }
            } else {
                let location = await this.get('/index/location/ip_info')
                if (location.code === 1) {
                    this.location = location
                    latlng = {
                        latitude: location.latitude * 1,
                        longitude: location.longitude * 1,
                    }
                    this.form = {
                        ...this.form,
                        city: location.city,
                        address: location.address,
                    }
                }
            }

            let map = new BMapGL.Map('baiduMap');
            if (latlng.longitude) {
                map.centerAndZoom(new BMapGL.Point(latlng.longitude, latlng.latitude), 11);
            } else {
                map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11);
            }
            map.enableScrollWheelZoom(true);

            map.addEventListener('click', (e) => {
                // console.log('点击的经纬度：', e.latlng);
                map.clearOverlays();
                let marker = new BMapGL.Marker(new BMapGL.Point(e.latlng.lng, e.latlng.lat));
                map.addOverlay(marker);
                let geoc = new BMapGL.Geocoder();
                geoc.getLocation(e.latlng, (rs) => {
                    console.log(222, rs)
                    this.form = {
                        ...this.form,
                        province: rs.addressComponents.province,
                        city: rs.addressComponents.city,
                        district: rs.addressComponents.district,
                        address: rs.address,
                        longitude: rs.point.lng,
                        latitude: rs.point.lat,
                    }
                })

            });
            this.baidu_map = map
        },
    },

}
</script>

<style scoped lang="less">
#baiduMap {
    width: 100%;
    height: 70vh;
    margin-top: 20px;
}
</style>
