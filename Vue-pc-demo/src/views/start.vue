<template>
<div>
    <hello-world></hello-world>
</div>
  
</template>

<script>
import helloWorld from '@/components/HelloWorld'
import img_404 from "@/assets/images/404_images/404.png";
export default {
    components:{
        helloWorld
    },
    created(){
        this.$axios.get('/user/login').then((res)=>{
            console.log(res);
        })
        this.test()
    },
    methods:{
        test(){
           this.$axios.get('/api/data').then((res)=>{
            console.log(res);
        })
        }

    }

}
</script>

<style>

</style>