<template>
  <div class="home">
      <div class="page api_temp">
    <ul class="menu row horizontal wrap center icon-sets" data-row-split="1">
      <li>Home</li>
      <li>Order</li>
      <li>Message</li>
      <li>Setting</li>
    </ul>
    <div class="container">
      <input type="search" id="search" placeholder="Search..." />
      <input type="date" name="bday" />
    </div>
    <router-view />
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "home",
  components: {

  }
};
</script>
