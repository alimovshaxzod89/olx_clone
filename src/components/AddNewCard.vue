<template>
    <div class="addnewcard">
        <h1>Создать объявление</h1>
        <!-- <form action="" @submit.prevent="$store.commit('ADD_NEW_CARD', this.newCard)">
            <label for="">Add product name</label>
            <input type="text" v-model="newCard.productName"> <br>

            <label for="">Add your region</label>
            <input type="text" v-model="newCard.region"> <br>

            <label for="">Add product price</label>
            <input type="text" v-model="newCard.price"> <br>

            <router-link @click="$store.commit('ADD_NEW_CARD', this.newCard)" :to="'/'">
                <button type="submit" class="btn btn-success">Submit</button>
            </router-link>
        </form> -->
        <form action="" @submit.prevent="$store.commit('ADD_NEW_CARD', this.newCard)">
            <div class="one">
                <h4 class="titleOne">Опишите в подробностях</h4>
                <div class="my-5">
                    <p>Укажите название*</p>
                    <input class="inputName w-50" type="text" placeholder="Например, iPhone 8" v-model="newCard.productName">
                </div>
                <div>
                    <p>Категория*</p>
                    <select class="w-25">
                        <option v-for="option in options" value="Option 1" :key="option">{{option}}</option>
                    </select> 
                </div>
            </div>
            <div class="one my-2">
                <p>Описание*</p>
                <textarea class="w-50" rows="10" placeholder="Подумайте, какие подробности вы хотели бы узнать из объявления. И добавьте их в описание"></textarea>
                <div class="w-50 d-flex justify-content-between">
                    <span>Напишите еще 80 символов</span>
                    <span>0/900</span>
                </div>
            </div>
            <div class="one">
                <h4 class="titleOne">Контактная информация</h4>
                <p>Местоположение*</p>
                <input class="inputName w-50" placeholder="Ташкент, Алмазарский район" type="text" v-model="newCard.region">
                <p class="mt-5">Цена продукта*</p>
                <input class="inputName w-50" type="text" v-model="newCard.price">
                <p class="mt-5">Номер телефона</p>
                <input class="inputName w-50" type="text">
            </div>
            <router-link @click="$store.commit('ADD_NEW_CARD', this.newCard)" :to="'/'">
                <button type="submit" class="w-25 my-4 btn btn-primary">Submit</button>
            </router-link>
        </form>
        <Footer />
    </div>
</template>
<script>
import Footer from '@/components/Footer.vue'
export default {
    data(){
        return{
            newCard:{
                productName: '',
                region: '',
                price: '',
                time: null,
                isChecked: false
            },
            options:['Детский мир', 'Недвижимость', 'Транспорт', 'Работа', 'Животные', 'Дом и сад', 'Электроника', 'Бизнес и услуги', 'Мода и стиль', 'Oтдых и спорт', 'Отдам даром', 'Обмен']
        }
    },
    methods:{
    },
    components:{
        Footer
    }
}
</script>
<style scoped>
.addnewcard{
    padding: 50px 180px;
}
h1{
    font-size: 32px;
    color: #002f34;
}
.one{
    background-color: white;
    border-radius: 7px;
    padding: 30px;
}
.titleOne{
    font-size: 20px;
    color: #002f34;
}

.one p{
    font-size: 14px;
    color: #002f34;
    line-height: 1px;
}
.inputName{
    border: none;
    background-color: rgb(242, 244, 245);
    padding: 15px;
    border-radius: 4px;
}
.one select{
    padding: 15px;
    background-color: rgb(242, 244, 245);
    color: rgba(0, 0, 0, 0.425);
    border: none;
    border-radius: 5px;
}
textarea{
    resize: none;
    background-color: rgb(242, 244, 245);
    border: none;
    border-radius: 5px;
    padding: 15px;
}
.one span{
    font-size: 14px;
    color: #7f9799;
}
</style>