<template>
  <div class="page VueTemp">
    <h1>各地食材</h1>
    <br />
    <div class="row vertical">
      <p>食物種類</p>
      <br />
      <el-radio-group v-model="flagItem.selectA" @change="onRadioChange">
        <el-radio-button v-for="(item, index) in flagItem.partA" :key="index" :label="item.label" 
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br />
      <p>國家</p>
      <br />
      <el-radio-group v-model="flagItem.selectB" @change="onRadioChange">
        <el-radio-button v-for="(item, index) in flagItem.partB" :key="index" :label="item.label" 
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <br />
      <p>用餐時間</p>
      <br />
      <el-radio-group v-model="flagItem.selectC" @change="onRadioChange">
        <el-radio-button v-for="(item, index) in flagItem.partC" :key="index" :label="item.label" 
        >{{ item.name }}</el-radio-button>
      </el-radio-group>
      <el-button type="primary" @click="$router.push({name:'VuexTempDetail'})">go</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"
export default {
    name: "VuexTemp",
    data() {
        return {
            flagItem: {
                selectA: '',
                selectB: '',
                selectC: '',
                partA: [
                  { label: 0, name: '火雞肉' },
                  { label: 1, name: '牛排' },
                  { label: 2, name: '雞腿肉' }
                ],

                partB: [
                  { label: 1, name: '日本' },
                  { label: 0, name: '印度' },
                  { label: 9, name: '美國' },
                  { label: 8, name: '德國' },
                  { label: 4, name: '英國' }
                ],

                partC: [
                  { label: 1, name: '早餐' },
                  { label: 3, name: '中餐' },
                  { label: 6, name: '下午茶' },
                  { label: 5, name: '晚餐' },
                  { label: 2, name: '宵夜' }
                ],
            }
        }
    },

    computed: {
    ...mapGetters(["mapGetTotal", "mapGetFlag", "mapGetEpilogue"]),
    getTotalScore() {
      let result = this.flagItem.selectA + this.flagItem.selectB + this.flagItem.selectC
      return result
    }
  },
  methods: {
    ...mapActions(["setFlag"]),
    ...mapMutations(["changeTotal", "changeFlag", "changeEpilogue"]),
    onRadioChange() {
      this.changeTotal(this.getTotalScore)
      this.setFlag()
      this.changeEpilogue()
    }
  }
};
</script>