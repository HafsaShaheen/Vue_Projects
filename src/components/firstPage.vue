<template>
    <div>
        <h1>My First Page of Vuee App</h1>
        <button id="btn" v-on:click="selectedButton($event)" value="0">Home</button>
        <button id="btn" v-on:click="selectedButton($event)" value="1">Projects</button>
        <button id="btn" v-on:click="selectedButton($event)" value="2">Services</button>
        <button id="btn" v-on:click="selectedButton($event)" value="3">Contact</button>

        <!-- <button id="btn">Home</button>
        <button id="btn">Home</button> -->

         <hr/>
         <p >You Chosed:&nbsp;<span id="span">{{selected}}</span></p>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:''
        }
    },
    methods:{
        selectedButton:function(e){
            if(e.target.value==0)
                return this.selected='Home';
            else if(e.target.value==1)    
                return this.selected='Project';   
            else if(e.target.value==2)
                return this.selected='Services'
              
            return this.selected='Contact'     
        }
    }
    
}

</script>

<style scoped>
#btn{
    size:90px;
    background-color: #5597b4;
    padding:5px 10px 5px 10px;
    font-size: 20px;
    border: none;
    color: white;
    font-variant-caps: all-petite-caps;
}
#btn:focus{
    background-color: #e35885;
}
#span{
    background-color:gray;
    padding: 10px;
    font-weight: bold;
    color: white;
    font-variant-caps: all-petite-caps;
}
p{
    font-weight: bold;
    color:gray;
}
</style>