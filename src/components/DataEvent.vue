<template>
  <div class="container">
    <el-select v-model="tempSelect.selected" clearable @change="handleSelect">
      <el-option
        v-for="(item, index) in tempSelect.items"
        :key="index"
        :value="item.value"
        :label="item.label"
      />
    </el-select>
    <el-input
      v-if=" tempSelect.selected === '3' "
      v-model="tempInput"
      type="text"
      placeholder="enter something"
      clearable
      @change="handleInputChange"
    />
    <el-checkbox :indeterminate="isInd" v-model="checkAll" @change="handleCheckAll">Select All</el-checkbox>
    <div class="input_inner">
      <el-checkbox-group v-model="checked" @change="handleChecked">
        <el-checkbox
          v-for="(item, index) in checkItems"
          :label="item.value"
          :name="item.label"
          :key="index"
        >{{item.label}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <br />
    <h2>戰鬥後增加的絆點數</h2>
    <p>你剛完成了40AP的每日種火關卡，請依照下列需求打印出正確結果</p>

    <b>Context:</b>
    <ul>
      <li>今天是週日，種火對象都是混階</li>
      <li>你手殘忘了把迦勒底午餐禮裝掛上去</li>
      <li>所以40AP 種火的絆點是660</li>
    </ul>

    <b>Force:</b>
    <ul>
      <li>使每位參與的從者都能獲得相同點數</li>
      <li>滿絆等級的從者不再增加點數</li>
      <li>印出戰鬥後三位從者的羈絆點數</li>
      <li>羈絆4，點數達5萬的從者，印出新的絆等級且格式是"從者名+絆等級+(羈絆等級提升)+絆點數" (下示</li>
    </ul>
    <br />
    <div v-for="(item, index) in battleData" :key="index">
      {{item.name+' '}}
      {{'絆LV' + item.bound.level + ' '}}
      {{ handleLevelUpMsg[index] }}
      {{'點數' + item.bound.point}}
    </div>
    <br />
    <el-button type="primary" @click="battleFinish">完成一場戰鬥獲得羈絆點數</el-button>
    <br />
    <br />
    <el-checkbox @change="codes=!codes">使用加勒底午餐裡裝</el-checkbox>
  </div>
</template>

<script>
export default {
  name: "DataEvent",
  data() {
    return {
      tableData: [],
      tempInput: "",
      tempSelect: {
        selected: "",
        items: [
          { id: 0, value: "1", label: "option 1" },
          { id: 1, value: "2", label: "option 2" },
          { id: 2, value: "3", label: "option 3" }
        ]
      },
      checkAll: false,
      isInd: false, //isInd = isIndeterminate，是否為「不定數」的意思，沒有全部選擇僅有部分選擇時調用
      checked: [],
      checkItems: [
        { value: "1", label: "check 1" },
        { value: "2", label: "check 2" },
        { value: "3", label: "check 3" }
      ],
      battleData: [
        {
          id: 0,
          name: "巖窟王",
          class: "Avanger",
          bound: {
            level: 4,
            point: 49700,
            levelUp: false
          }
        },
        {
          id: 1,
          name: "斯卡薩哈=斯卡蒂",
          class: "Caster",
          bound: {
            level: 4,
            point: 49700,
            levelUp: false
          }
        },
        {
          id: 2,
          name: "諸葛孔明",
          class: "Caster",
          bound: {
            level: 10,
            point: 1570000,
            levelUp: false
          }
        }
      ],
      tanebiExp: 660,
      codes: false
    };
  },

  created() {},

  methods: {
    handleInputChange() {
      console.log(this.tempInput);
    },
    handleSelect() {
      console.log(this.tempSelect.selected);
    },
    handlechecked() {
      console.log(this.checked);
    },
    handleCheckAll() {
      this.checkAll
        ? this.checkItems.forEach(arr => {
            this.checked.push(arr.value);
          })
        : (this.checked = []);
      this.isInd = false;
      console.log(this.checked);
    },
    handleChecked(val) {
      this.checkAll = val.length === this.checkItems.length;
      this.isInd = val.length > 0 && val.length < this.checkItems.length;
      console.log(this.checked);
    },
    battleFinish() {
      let newPoint = 0;
      let newLevel = 0;
      this.battleData.forEach(obj => {
        if (obj.bound.level == 10) {
          newPoint = obj.bound.point + 0;
          newLevel = obj.bound.level + 0;
          obj.bound.levelUp = false;
        }
        if (
          obj.bound.point + this.useMysticCodes <= 50000 &&
          obj.bound.level < 10
        ) {
          newPoint = obj.bound.point + this.useMysticCodes;
          newLevel = obj.bound.level + 0;
          obj.bound.levelUp = false;
        }
        if (
          obj.bound.point + this.useMysticCodes >= 50000 &&
          obj.bound.level < 10
        ) {
          newPoint = obj.bound.point + this.useMysticCodes - 50000;
          newLevel = obj.bound.level + 1;
          obj.bound.levelUp = true;
        }
        obj.bound.point = newPoint;
        obj.bound.level = newLevel;
      });
    }
  },
  computed: {
    handleLevelUpMsg() {
      let newMsg = [];
      for (let i in this.battleData) {
        this.battleData[i].bound.level >= 10 &&
        this.battleData[i].bound.levelUp == false
          ? (newMsg[i] = "(羈絆等級已達最大)")
          : (newMsg[i] = "");
        if (this.battleData[i].bound.levelUp == true) {
          newMsg[i] = "(羈絆等級提升)";
        }
      }
      return newMsg;
    },
    useMysticCodes() {
      if (this.codes == true) {
        console.log(this.tanebiExp + this.tanebiExp / 10);
        return this.tanebiExp + this.tanebiExp / 10;
      } else {
        console.log(this.tanebiExp);
        return this.tanebiExp;
      }
    }
  }
};
</script>