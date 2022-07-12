<template>
    <div class="search">
        <div v-if="$store.state.isNotification == true" class="w-50  alert alert-success alert-dismissible">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Yangi e'lon muvaffaqiyatli qo'shildi</strong> 
        </div>
        <div class="search_content d-flex justify-content-center">
            <!-- 1 -->
            <div class="itemOne d-flex justify-content-start align-items-center">
                <div>
                    <i style="font-size: 25px; padding: 0 20px;" class='bx bx-search-alt-2' ></i>
                </div>
                <div>
                    <input type="text" value="920 546 объявлений рядом">
                </div>
            </div>
            <!-- 2 -->
            <div class="itemTwo d-flex justify-content-start align-items-center">
                <div>
                    <i style="font-size: 25px; padding: 0 20px;" class='bx bx-location-plus'></i>
                </div>
                <div>
                    <input type="text" value="Весь Узбекистан" >
                </div>
            </div>
            <!-- 3 -->
            <div class="itemThree d-flex justify-content-center align-items-center">
                <button>Search <i style="font-size: 25px; padding: 0 20px;" class='bx bx-search-alt-2' ></i></button>
                
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
.search{
    background-color: rgb(242, 244, 245);
    width: 100%;
    padding: 50px 0;
    /* position: relative; */
}
.itemOne{
    background-color: white;
    width: 35%;
    height: 70px;
}
.itemOne input{
    width: 300px;
    border: none;
    outline: none;
}
.itemTwo{
    background-color: white;
    width: 25%;
    height: 70px;
    margin: 0 1px;
}
.itemTwo input{
    width: 200px;
    border: none;
    outline: none;
}
.itemThree{
    background-color: white;
    width: 10%;
    height: 70px;
    display: flex;

}
.itemThree button{
    background-color: white;
    border: none;
    height: 100%;
    width: 100%;
}
.itemThree:hover, button:hover{
    background-color: #103138;
    color: white;
} 
.alert{
    position: fixed;
    right: 10px;
    top: 10px;
    height: 50px;
    z-index: 1000;
    display: flex;
    align-items: center;
}
</style>