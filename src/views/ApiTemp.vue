<template>
    <div class="page api_temp">
        wwwwwwww
    </div>
</template>

<script>
export default {
    name: "apiTemp" ,
    date() {
        return{
            tableData: []
        }
    },

    created() {
        this.getData()
    },

    methods:{
        async getData() {
            const source = 'http://localhost:3000/tableData'
            let res = await this.$api.get(source)
            this.tableData = [...res]
            console.log(res)
        },
    }
}
</script>