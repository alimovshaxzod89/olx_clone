<template>
    <div class="mainCards row">
        <h1 class="title text-center">Премиум объявления</h1>
        <div 
            class="card col-3"
            v-for="card in $store.state.cards"
            :key="card.id"
        >
            <div class="itemImg">
                <img :src="card.img" alt="">
            </div>
            <p class="title"> {{card.productName}} </p><br>
            <p class="region"> {{card.region}} </p> <span class="date region d-block"> {{card.time}} </span>

            <div class="d-flex justify-content-between align-items-end mb-3">
                <h4 class="price"> {{card.price}} </h4> 
                <div v-if="card.isChecked === false">
                    <i @click="$store.commit('ADD_TO_BASKET', card)" class='bx bx-heart' style="margin-right: 10px"></i>
                </div>
                <div v-if="card.isChecked === true">
                    <i @click="$store.commit('REMOVE_IN_BASKET', card)" class='bx bxs-heart'  style="margin-right: 10px"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
h1{
    color: #002F34;
    font-size: 32px;
    margin: 10% 0;
}
.mainCards{
    padding: 0 180px;
    background-color: rgb(242, 244, 245);

    /* margin-top: 300px; */
}

.itemImg{
    width: 250px;
    height: 250px;
    margin: auto;
}
.itemImg img{
    margin-top: 10px;
    width: 100%;
    height: 90%;
    border-radius: 7px;
}
.title, .region, .price{
    margin-left: 10px;
}
.region{
    font-size: 12px;
    color: #406367;
}
.price{
    color: #002f34;
    font-size: 16px;
    padding: 20px 0 0 0;
}
</style>