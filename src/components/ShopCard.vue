<template>
    <div class="shopcardItem">
        <Navbar />
        <div class="title">
            <h1>Избранные объявления</h1>
        </div>
        <div v-for="shopcardItem in $store.state.shopcard" :key="shopcardItem.id">
            <div class="row">
                <div class="col-sm-10 m-auto">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img :src="shopcardItem.img" style="width: 216px;margin-right: 20px" alt="">
                                    <div class="d-flex flex-column justify-content-between">
                                        <div class="mt-3">
                                            <h4 class="title_item"> {{shopcardItem.productName}} </h4>
                                            <p class="text_item"> {{shopcardItem.region}} </p>
                                        </div>
                                        <div>
                                            <p class="time_item"> {{shopcardItem.region}} - {{shopcardItem.time}} </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex flex-column justify-content-between">
                                    <p class="price_item"> {{shopcardItem.price}} </p>
                                    <div>
                                        <div v-if="shopcardItem.isChecked === false" class="d-flex justify-content-end">
                                            <i @click="$store.commit('ADD_TO_BASKET', shopcardItem)" class='bx bx-heart' style="font-size: 25px;"></i>
                                        </div>
                                        <div v-if="shopcardItem.isChecked === true" class="d-flex justify-content-end">
                                            <i @click="$store.commit('REMOVE_IN_BASKET', shopcardItem)" class='bx bxs-heart' style="font-size: 25px;"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
    components:{
        Navbar
    }
}
</script>
<style scoped>
.shopcardItem{
    background-color: rgb(242, 244, 245);
}
.title{
    background-color: white;
    padding: 50px 180px;
    margin-bottom: 50px;
}
.title_item{
    font-size: 20px;
    color: #002f34;
}
.text_item{
    font-size: 13px;
    color: #b4b4b4;
}
.time_item{
    font-size: 12px;
    color: #406367;
}
.price_item{
    font-size: 16px;
    font-weight: 700;
    color: #002f34;
}
</style>