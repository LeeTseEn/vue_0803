<template>
  <div class="home">
    <div class="side">
      <ul class="menu row wrap center icon-sets" data-row-split="1">
        <li><a href="/#/">Home</a></li>
        <li><a href="/#/DataEvent">DataEvent</a></li>
        <li><a href="/#/CaChya">CaChya</a></li>
        <li><a href="/#/LocalStorange">LocalStorange</a></li>
        <li><a href="/#/LocalStorangeCardResult">LocalStorangeCardResult</a></li>
        <li><a href="/#/LogIn">LogIn</a></li>
        <li><a href="/#/FgoLocal">FgoLocal</a></li>
        <li><a href="/#/Regexp">Regexp</a></li>
        <li><a href="/#/Regular">Regular</a></li>
        <li><a href="/#/VuexTemp">VuexTemp</a></li>
        <li><a href="/#/VuexTempDetail">VuexTempDetail</a></li>
        <li><a href="/#/Components">Components</a></li>
      </ul>
      <div class="primary">
        <router-view />
      </div>
      <p class="clearfix"></p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
