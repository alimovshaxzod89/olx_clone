<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container d-flex">
                <div class="logo w-25" style="height: 100%">
                    <img src="@/assets/img/logo.png" alt="" style="height: 100%">
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style="font-size: 15px;">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end mt-3" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <div class="lang"> O'Z  <span style="color: #ccc; margin: 0 15px;">|</span> <span style="color: #ccc;">RU</span> </div>
                        <div class="message d-flex" >
                            <box-icon 
                                name='message-rounded'
                                color="white" 
                                size="md"
                                animation='burst-hover'
                            ></box-icon>
                            <p>Сообщения </p>
                        </div>
                        <router-link :to="'/shopcard'">
                            <div class="basket ">
                                <span class="badge bg-danger" v-if="$store.state.shopcard.length > 0">
                                    {{$store.state.shopcard.length}}
                                </span>
                                <box-icon 
                                    name='heart'
                                    color="white" 
                                    size="md"
                                    animation='tada-hover'
                                ></box-icon>
                            </div>
                        </router-link>
                        <div class="d-flex">
                            <box-icon 
                                name='user' 
                                color="white"
                                size="md"
                                animation='tada-hover'
                            ></box-icon>
                            <p>Мой профиль</p>
                            <box-icon 
                                name='chevron-down' 
                                color="white"
                                animation="fade-down-hover"
                            ></box-icon>
                        </div>
                        <div class="sent_announcement">
                            <router-link :to="'/fornewcard'">
                                <button>Подать объявление</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
import 'boxicons'

export default {
    
}
</script>
<style scoped>
nav{
    width: 100% !important;
    background-color: #103138 !important;
    padding: 0 !important;
}
.navbar-nav div{
    margin: 0 20px;
}
nav p, nav div{
    color: white;
}
.logo img{
    width: 70px;
    height: 70px;
}
.lang{
    font-size: 14px;
}
p:hover{
    color: #ccc;
}
.sent_announcement button{
    position: relative;
    bottom: 7px;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    color: #103138;
}
.sent_announcement button:hover{
    color: white;
    background-color: #103138;
    border: 3px solid white;
    padding: 7px 17px;
}
.basket{
    position: relative;
}
.badge{
    position: absolute;
    top: -10px;
    left: 15px;
    border-radius: 50% !important;
}
@media only screen and (max-width: 1206px) {
    .navbar-nav div{
        margin: 0 10px;
    }
}
</style>