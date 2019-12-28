<template>
  <div class="container">
    <h1>正則表達式</h1>
    <p>利用線上正則工具撰寫以下表單驗證需求:</p>
    <p>
      <a href="https://regex101.com/">線上正則表達式工具</a>
    </p>

    <b>帳號(必填):</b>
    <ul>
      <li>帳號限制 8 ~ 16 個字元，首字必須是英文字</li>
    </ul>

    <b>密碼(必填):</b>
    <ul>
      <li>密碼不可與帳號重複</li>
      <li>密碼必須是 6 ~ 16 個字元，且必須包含英文與數字</li>
      <li>密碼與密碼確認的欄位必須一致</li>
    </ul>

    <b>個人網站網址:</b>
    <ul>
      <li>前綴必須有「http://」或「https://」</li>
    </ul>

    <b>Email:</b>
    <ul>
      <li>只能是小寫和英數字的組合</li>
      <li>格式可接受「artoria.pendragon@saber.com」</li>
    </ul>

    <b>手機號碼:</b>
    <ul>
      <li>驗證格式為 0000-000-000</li>
    </ul>
    <b>其他:</b>
    <ul>
      <li>驗證錯誤需顯示錯誤訊息</li>
      <li>必填項目如果未填入，或者有任何資料驗證錯誤，送出按鈕須顯示為disabled狀態且不可作動</li>
    </ul>
    <p>----------作答區----------</p>

    <el-form :model="registerForm" label-width="120px" style="width: 400px">
      <el-form-item label="帳號">
        <el-input v-model="registerForm.username" type="text" placeholder="請設定帳號" />
      </el-form-item>
      <el-form-item label="密碼">
        <el-input v-model="registerForm.password" type="password" placeholder="請設定密碼" />
      </el-form-item>
      <el-form-item label="確認密碼">
        <el-input v-model="registerForm.againPassword" type="password" placeholder="請確認密碼一致" />
      </el-form-item>
      <el-form-item label="個人網站">
        <el-input v-model="registerForm.website" type="text" placeholder="請輸入個人網站網址" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="registerForm.email" type="text" placeholder="設定您的電子郵件地址" />
      </el-form-item>
      <el-form-item label="手機號碼">
        <el-input v-model="registerForm.phone" type="text" placeholder="設定您的手機號碼" />
      </el-form-item>
      <p v-if="checkURL==false">{{ errMessage }}</p>
      <div class="row horizontal center">
        <el-button type="primary" @click="Submit">確認送出</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { reg_username } from "../utils/validate";
import { reg_password } from "../utils/validate";
import { reg_website } from "../utils/validate";
import { reg_email } from "../utils/validate";
import { reg_phone } from "../utils/validate";
export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        againPassword: "",
        website: "",
        email: "",
        phone: ""
      },
      registerRules: {
        username: [{ required: true, message: "務必輸入名稱", trigger: "blur" }],
        password: [{ required: true, message: "務必輸入密碼", trigger: "blur" }],
        website: [{ required: true, message: "務必輸入網址", trigger: "blur" }],
        email: [{ required: true, message: "務必輸入信箱", trigger: "blur" }],
        phone: [{ required: true, message: "務必輸入電話", trigger: "blur" }]
      },
      errMessage: "",
      checkURL: true
    };
  },

  methods: {

                
    Submit() {
      this.checkUsername = reg_username(this.registerForm.username);
      this.checkPassword = reg_password(this.registerForm.password);
      this.checkAgainPassword = reg_password(this.registerForm.password);
      this.checkWebsite = reg_website(this.registerForm.website);
      this.checkEmail = reg_email(this.registerForm.email);
      this.checkPhone = reg_phone(this.registerForm.phone);
      if (this.checkUsername && this.checkPassword && this.checkAgainPassword == this.checkPassword && this.checkWebsite && this.checkEmail && this.checkPhone) {
        this.$message({
          message: "登入成功",
          type: "success"
        });
      } else {
        this.$message({
          message: "登入失敗",
          type: "warning"
        });
      }
    }
  }
};
</script>

