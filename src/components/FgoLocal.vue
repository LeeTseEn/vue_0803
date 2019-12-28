<template>
  <div class="container">
    <!-- <h1>Local Storange</h1>
    <p>Auto Save 自動儲存</p>

    <b>Context:</b>
    <ul>
      <li>避免填寫到一半的表單因為斷線、重新整理、或誤關閉網頁造成必須從頭開始填寫狀況</li>
      <li>為了方便再次進入填寫步驟時可以自動帶入User上一次的填寫內容，需要載入已儲存的欄位內容</li>
    </ul>

    <b>Force:</b>
    <ul>
      <li>請使用Local Storange將輸入一半的表單內容保留，重新整理時務必顯示已填寫的部分內容</li>
      <li>當按下「載入上一次填寫的內容」時，完整的自動填寫上一次「成功送出」後的所有欄位</li>
    </ul>-->

    <p>----------作答區----------</p>

    <el-form ref="form" :model="form" label-width="150px" style="width: 600px">
      <el-form-item label="御主姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="偏好職階">
        <el-select v-model="form.prefer" placeholder="請選擇偏好職階">
          <el-option
            v-for="(item, index) in preferItems"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申請時間">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="選擇日期" v-model="form.date" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col :span="11">
          <el-time-picker placeholder="選擇時間" v-model="form.time" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="想成為御主的理由">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="可以和好多女性從者這個那個" name="type"></el-checkbox>
          <el-checkbox label="拯救世界" name="type"></el-checkbox>
          <el-checkbox label="可以拿好多好多的聖晶石" name="type"></el-checkbox>
          <el-checkbox label="我是興趣使然的御主" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loadLastData">載入上一次填寫內容</el-button>
        <el-button type="primary" @click="onSubmit">送出申請</el-button>
        <el-button @click="handleReset(form)">重置表單</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "FgoLocal",
  data() {
    return {
      form: {
        name: "",
        prefer: "",
        date: "",
        time: "",
        type: []
      },
      preferItems: [
        { id: 0, name: "Ruler" },
        { id: 1, name: "Saber" },
        { id: 2, name: "Archer" },
        { id: 3, name: "Lancer" },
        { id: 4, name: "Rider" },
        { id: 5, name: "Caster" },
        { id: 6, name: "Assassin" },
        { id: 6, name: "Berserker" },
        { id: 8, name: "Avenger" },
        { id: 9, name: "Alterego" },
        { id: 10, name: "Foreigner" }
      ]
    };
  },
  

  created() {

  },

  methods: {


    // 表單送出
    onSubmit() {
      const targetForm = this.form
      localStorage.setItem('form', JSON.stringify(targetForm))
    },
    // 載入前一次成功送出的內容
    loadLastData() {
      let getForm = JSON.parse(localStorage.getItem('form'))
      this.form = getForm
    },


    
    // 重置表單

    handleReset(obj) {
      this.resetForm(obj);
      obj.date = "";
      obj.time = "";
    },
    resetForm(target) {
      let reset = obj => {
        Object.keys(obj).map(key => {
          if (obj[key] === Object(obj[key])) {
            reset(obj[key]);
            if (obj[key] instanceof Array) {
              obj[key] = [];
            }
            return;
          } else {
            obj[key] = "";
          }
        });
      };
      reset(target);
    }
  },

  computed: {}
};


</script>

