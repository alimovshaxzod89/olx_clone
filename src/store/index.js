import { createStore } from 'vuex'

export default createStore({
  state: {
    cards: [
      {
        id: 1,
        img: require('@/assets/img/itemImg.jpeg'),
        productName: 'Iphone 12 pro',
        region: 'Ташкент, Учтепинский район',
        time: 'вчера 12:40',
        price: '9 600 000 сум',
        isChecked: false
      },
      {
        id: 2,
        img: require('@/assets/img/itemImg2.jpeg'),
        productName: 'Lenovo Legion Y530',
        region: 'Ташкент, Чиланзарский район',
        time: 'вчера 21:24',
        price: '12 567 000 сум',
        isChecked: false
      },
      {
        id: 3,
        img: require('@/assets/img/itemImg3.jpeg'),
        productName: 'Ремонт заправка  кондиционеров',
        region: 'Ташкент, Учтепинский район',
        time: 'Сегодня 9:18',
        price: '9 600 000 сум',
        isChecked: false
      },
      {
        id: 4,
        img: require('@/assets/img/itemImg4.jpeg'),
        productName: 'Daewoo Nexia',
        region: 'Ташкент, Учтепинский район',
        time: 'вчера 15:10',
        price: '3 800 y.e.',
        isChecked: false
      },
      {
        id: 5,
        img: require('@/assets/img/itemImg5.jpeg'),
        productName: 'Продается Два мотоцикла yamaha R1',
        region: 'Ташкент, Мирабадский район',
        time: 'вчера 11:10',
        price: '10 000 y.e.',
        isChecked: false
      },
      {
        id: 6,
        img: require('@/assets/img/itemImg6.jpeg'),
        productName: 'Intex Бассейны 450×220×84 см',
        region: 'Ташкент район',
        time: '3 июль',
        price: '200 y.e.',
        isChecked: false
      },
      {
        id: 7,
        img: require('@/assets/img/itemImg7.jpeg'),
        productName: 'Silverstone sochi z',
        region: 'Карши район',
        time: 'Сегодня 17:57',
        price: '650 000 сум',
        isChecked: false
      },
      {
        id: 8,
        img: require('@/assets/img/itemImg9.jpeg'),
        productName: 'Ugalok shoxona ishlab chiqazuvchidan',
        region: 'Ташкент, Чиланзарский район',
        time: 'Сегодня 6:10',
        price: '5 600 000 сум',
        isChecked: false
      },
      {
        id: 9,
        img: require('@/assets/img/itemImg8.jpeg'),
        productName: 'Кровати Новые Krovat ikki kishilik',
        region: 'Ташкент, Чиланзарский район',
        time: 'Сегодня 12:30',
        price: '799 000 сум',
        isChecked: false
      },
      {
        id: 10,
        img: require('@/assets/img/itemImg10.jpeg'),
        productName: 'Compressor / gate 266XL',
        region: 'Ташкент, Чиланзарский район',
        time: 'Сегодня 00:30',
        price: '1 800 000 сум',
        isChecked: false
      },
      {
        id: 11,
        img: require('@/assets/img/itemImg11.jpeg'),
        productName: 'Jalyuzi. Жалюзи.',
        region: 'Ташкент, Чиланзарский район',
        time: 'Сегодня 4:27',
        price: '2 000 000 сум',
        isChecked: false
      },
      {
        id: 12,
        img: require('@/assets/img/itemImg12.jpeg'),
        productName: 'Daewoo Nexia 2',
        region: 'Ташкент, Учтепинский район',
        time: 'вчера 15:10',
        price: '5 800 y.e.',
        isChecked: false
      },
    ],
    shopcard: [],
    isNotification: false,
    isNotificationTwo: false
  },
  getters: {
  },
  mutations: {
    ADD_TO_BASKET(state, value){
      state.cards.find(card => {

        if(card.id === value.id){
          card.isChecked = true
          state.shopcard.push(card)
        }
      })
    },
    REMOVE_IN_BASKET(state, value){
      state.cards.find(card => {
        if(card.id === value.id){
          card.isChecked = false
          let i = state.shopcard.map(shopcardOne => shopcardOne.id).indexOf(value.id) // find index of your object
          state.shopcard.splice(i, 1)
          console.log(i);
        }
      })
    },
    ADD_NEW_CARD(state, value){
      let currientTime = new Date()
      let currientDay = currientTime.getDate()
      let month = currientTime.getMonth()
      let currientMonth = month < 10 ? `0${month}` : `${month}`
      let currientYear = currientTime.getFullYear()
      let currientOclock = currientTime.getHours()
      let minut = currientTime.getMinutes()
      let currientMinut = minut < 10 ? `0${minut}` : `${minut}`

      
      const newId = state.cards.length + 1
      value.id = newId
      
      value.time = `${currientDay}.${currientMonth}.${currientYear} - ${currientOclock}:${currientMinut}`
      state.cards.push(value)
      state.isNotification = true
    }
    
  },
  actions: {
  },
  modules: {
  }
})
