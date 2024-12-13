<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
   <div class="container-fluid">
   


     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item">
           <RouterLink class="nav-link active" aria-current="page" to="/" style="color: white;">Home</RouterLink>
         </li>
         <li class="nav-item">
           <RouterLink class="nav-link" to="/categorias" style="margin-left: 30%;">Categorias</RouterLink>
         </li>
       </ul>
     </div>
   </div>
 </nav>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap');
.container-fluid{
 background-color: #09005e;
 padding: 1% 0 1% 5%;
 margin: 0;
 font-family: 'Sofia Sans';
}
.nav-link{
 color: white;




}


</style>



