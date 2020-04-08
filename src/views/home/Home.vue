<template>
    <div>首页
       <h2>{{$store.state.componentName}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
/*    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(123456);
            }
        ,100);
        console.log("abc");
        resolve("aa");
    }).then(res=>{
        console.log(res);
        return res+"123";
    }).then(res=>{
        console.log(res);
        return Promise.reject("错误");
    }).catch(res=>{
        console.log(res);
    })*/
    Promise.all([
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("aaa");
                resolve("1end");
            },1000)

        }),
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("bbb");
                resolve("2end");
            },1000)
        })
    ]).then(res=>{
            console.log(res);
    })
</script>

<style scoped>

</style>