<template>
    <div class="navbar">
        <!-- left -->
        <div class="logo" style="height: 100%">
            <img src="@/assets/img/logo.png" alt="" style="height: 100%">
        </div>
        
        <!-- right -->
        <div class="right_side d-flex">
            <!-- 1 -->
            <div class="lang"> O'Z  <span style="color: #ccc; margin: 0 15px;">|</span> <span style="color: #ccc;">RU</span> </div>
            <!-- 2 -->
            <div class="message d-flex" >
                <box-icon 
                    name='message-rounded'
                    color="white" 
                    size="md"
                    animation='burst-hover'
                ></box-icon>
                <p>Сообщения </p>
            </div>
            <!-- 3 -->
            <router-link :to="'/shopcard'">
            <div class="basket">
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
            
            <!-- 4 -->
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
</template>
<script>
import 'boxicons'

export default {
    
}
</script>
<style scoped>
.navbar{
    width: 100%;
    height: 72px;
    background-color: #103138;
    padding: 0 180px;
    color: white;
}
.right_side{
    margin-top: 15px;
}
.right_side div{
    margin: 0 25px;
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
</style>