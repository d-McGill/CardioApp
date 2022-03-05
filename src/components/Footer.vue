<template>
<footer>
 <router-link to="/help">Need Help?</router-link>
</footer>
</template>
<script>

</script>
<style scoped>
footer {
    height: 7%;
    width: 100%;
    bottom: 0;
    position: fixed;
    text-align: right;
    z-index: 1;
}

footer a{
    text-decoration: none;
    font-weight: 900;
    background-color: #409eff;
    color: #fff;
    padding:15px 50px;
    margin: 0 2% ;
    border-radius: 8px;
    border: 1px solid #409eff; 
}

footer a:hover{
    background-color: #fff;
    color: #409eff;

}
</style>
