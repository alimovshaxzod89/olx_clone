<template>
    <div class="aboutservise d-flex flex-column align-items-center">
        <img src="@/assets/img/logo2.png" alt="">
        <p class="w-75 text-center">Cервис объявлений № 1 в Узбекистане <br>
            Частные объявления Узбекистана на OLX (бывший torg.uz) - здесь вы найдете то, что искали.
            Нажав на кнопку "Подать объявление", вы сможете разместить онлайн-объявление на любую необходимую тематику - поиск работы, услуги, продажа автомобилей, недвижимости, электроники и многое другое.
            С помощью сервиса OLX в Узбекистане вы можете найти, продать или купить практически все, что угодно. Воспользовавшись функцией поиска, вы без труда найдете уже опубликованные объявления интересующей вас тематики.
            OLX в Узбекистане - ваш надежный и незаменимый помощник.
        </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.aboutservise{
    margin-top: 6%;
    background-color: rgb(40, 226, 218);
}
p{
    font-size: 14px;
    color: #002f34;
}
@media only screen and (max-width: 1000px) {
    img{
        width: 150px;
        height: 150px;
    }
    p{
        font-size: 12px;
    }
}
@media only screen and (max-width: 565px) {
    img{
        width: 100px;
        height: 100px;
    }
}
</style>