<template>
    <div class="catalogs">
        <h1 class="text-center">Главные категории</h1>
        <div class="d-flex flex-wrap justify-content-center">

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ1.jpeg" alt="">
                <p>Детский мир</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ2.png" alt="">
                <p>Недвижимость</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ3.png" alt="">
                <p>Транспорт</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ4.png" alt="">
                <p>Работа</p>
            </div>
            
            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ5.png" alt="">
                <p>Животные</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ6.png" alt="">
                <p>Дом и сад</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ7.png" alt="">
                <p>Электроника</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ8.png" alt="">
                <p>Бизнес и услуги</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ9.png" alt="">
                <p>Мода и стиль</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ10.png" alt="">
                <p>Oтдых и спорт</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ11.png" alt="">
                <p>Отдам даром</p>
            </div>

            <div class="card d-flex flex-column align-items-center mx-2 my-3">
                <img src="@/assets/img/categ12.png" alt="">
                <p>Обмен</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.catalogs{
    padding: 50px 180px;
}
.card{
    width: 105px;
    height: 107px;
    border: none !important;
}
h1{
    color: #002F34;
    font-size: 32px;
}
p{
    color: #002F34;
    font-size: 14px;
}
img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
@media only screen and (max-width: 660px) {
    h1{
        color: #002F34;
        font-size: 20px;
    }
    .catalogs{
        padding: 30px 120px;
    }
}
</style>