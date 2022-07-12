<template>
    <div class="fornewcard">
        <Navbar />
        <AddNewCard />
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import AddNewCard from '@/components/AddNewCard.vue'
export default {
    components:{
        Navbar,
        AddNewCard
    }
}
</script>
<style scoped>
.fornewcard{
    background-color: rgb(242, 244, 245);
    
}
</style>
