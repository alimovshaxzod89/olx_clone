<template>
<div class="mainCards">
    <div class="col-xxl-8 col-xl-10 col-md-10  col-sm-8 col-7 mx-auto row">
        <h1 class="title text-center">Премиум объявления</h1>
        <div 
            class="card col-md-3 col-sm-6 col-12"
            v-for="card in $store.state.cards"
            :key="card.id"
        >
            <div class="itemImg">
                <img :src="card.img" alt="">
            </div>
            <p class="title"> {{card.productName}} </p>
            <p class="region"> {{card.region}} </p> <span class="date region d-block"> {{card.time}} </span>

            <div class="d-flex justify-content-between mt-auto">
                <h4 class="price"> {{card.price}} </h4> 
                <div v-if="card.isChecked === false" class="mt-auto">
                    <i @click="$store.commit('ADD_TO_BASKET', card)" class='bx bx-heart ' style="margin-right: 10px"></i>
                </div>
                <div v-if="card.isChecked === true" class="mt-auto">
                    <i @click="$store.commit('REMOVE_IN_BASKET', card)" class='bx bxs-heart mt-auto'  style="margin-right: 10px"></i>
                </div>
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
.mainCards{
    background-color: rgb(242, 244, 245);
}
h1{
    color: #002F34;
    font-size: 32px;
    margin: 10% 0;
}
.itemImg{
    width: 90%;
    height: 150px;
    margin: auto;
    background-size: cover;
    position: relative;
}
.itemImg img{
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
   
@media only screen and (max-width: 1050px) {
    h1{
        font-size: 25px;
    }
    .title{
        font-size: 14px;
    }
    .region{
        font-size: 10px;
    }
    .price{
        font-size: 12px;
    }
}


@media only screen and (max-width: 600px) {
    .title{
        font-size: 10px;
        font-weight: 700;
    }
}
@media only screen and (max-width: 575px) {
    .title{
        font-size: 14px;
    }
    .region{
        font-size: 10px;
    }
    .price{
        font-size: 12px;
    }
}


</style>