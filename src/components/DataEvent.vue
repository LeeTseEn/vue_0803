<template>
  <div class="page">
      <el-select v-model="tempSelect.selected" clearable @change="handleSelect">
        <el-option v-for="(item, index) in tempSelect.items" :key="index" :value="item.value" :label="item.label" />
      </el-select>
      <el-input v-if=" tempSelect.selected === '3' " v-model="tempInput" type="text" placeholder="enter something" clearable @change="handleInputChange" />
      <el-checkbox :indeterminate="islnd" v-model="checkAll" @change="handleCheckAll">Select All</el-checkbox>
      <div class="input_inner">
      <el-checkbox-group v-model="checked" @change="handleChecked">
        <el-checkbox v-for="(item, index) in checkItems" :label="item.value" :name="item.label" :key="index" >{{item.label}}</el-checkbox>
      </el-checkbox-group>
      </div>
    </div>
</template>

<script>
export default {
  name: "DataEvent",
  data() {
    return {
      tableData: [],
      tempInput: '',
      tempSelect: {
        selected: '',
        items: [
          {id: 0, value: '1', label: 'option 1' },
          {id: 1, value: '2', label: 'option 2' },
          {id: 2, value: '3', label: 'option 3' }
        ]
      },
      checked: [],
      checkItems: [
        {value: '1', label: 'check 1' },
        {value: '2', label: 'check 2' },
        {value: '3', label: 'check 3' }
      ],
    }
  },

  created() {
    
  },

  methods: {
    handleInputChange() {
      console.log(this.tempInput)
    },
    handleSelect() {
      console.log(this.tempSelect.selected)
    },
    handlechecked() {
      console.log(this.checked)
    },
    handleCheckAll() {
        this.checkAll ?
        this.checkItems.forEach(arr =>{this.checked.push(arr.value)}):this.checked = []
        this.islnd = false
        console.log(this.checked)
    },
    handleChecked(val) {
        this.checkAll = val.length === this.checkItems.length
        this.islnd = val.length > 0 && val.length < this.checkItems.length
        console.log(this.checked)
    }
  }
};
</script>