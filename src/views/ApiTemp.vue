<template>
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
    <div class="content">
        <ul>
            <li>wwwwww</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "apiTemp",
  date() {
    return {
      tableData: []
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      const source = "http://localhost:3000/tableData";
      let res = await this.$api.get(source);
      this.tableData = [...res];
      console.log(res);
    }
  }
};
</script>