<template>
    <hr>
    <div class="footer d-flex justify-content-evenly">
        
        <div>
            <p>Мобильные приложения</p>
            <p>Помощь</p>
            <p>Платные услуги</p>
            <p>Бизнес на OLX</p>
            <p>Реклама на сайте</p>
            <p>Условия использования</p>
            <p>Партнёры</p>
        </div>
        <div>
            <p>Как продавать и покупать?</p>
            <p>Правила безопасности</p>
            <p>Карта сайта</p>
            <p>Карта регионов</p>
            <p>Карьера в OLX</p>
            <p>Обратная связь</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.footer{
    margin-top: 5%;
}
p{
    cursor: pointer;
}
@media only screen and (max-width: 767px) {
    p{
        font-size: 12px;
    }
}
@media only screen and (max-width: 440px) {
    p{
        font-size: 10px;
    }
}
</style>