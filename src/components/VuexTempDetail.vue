<template>
  <div class="container">
    <br />
      <el-button @click="$router.go(-1)">GO Back</el-button>
    <br />
    <div class="row vertical" data-space="space-vertical"></div>
      <b>{{ endding }}</b><br>
      <div v-if="flag == 'a'">
        <img src="img/img_01.jpg" style="width: 100%">
      </div>
      <div v-if="flag == 'b'">
        <img src="img/img_02.jpg" style="width: 100%">
      </div>
      <div v-if="flag == 'c'">
        <img src="img/img_03.jpg" style="width: 100%">
      </div>
      <div v-if="flag == 'd'">
        <img src="img/img_04.jpg" style="width: 100%">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: "VuexTemp",
  data() {
    return {
      total: 0,
      flag: '',
      endding: ''
    }
  },
  computed: {
    ...mapGetters([
      'mapGetTotal',
      'mapGetFlag',
      'mapGetEpilogue'
    ])
  },
  methods: {
    ...mapActions([
      'setMsg'
    ]),
    ...mapMutations([
      'changeMsg'
    ])
  },
  created() {
    this.total = this.mapGetTotal
    this.flag = this.mapGetFlag
    this.endding = this.mapGetEpilogue
  }
};
</script>