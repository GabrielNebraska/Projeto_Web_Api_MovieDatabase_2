<script setup>
import { onMounted, ref } from 'vue'
import { getCategories, getMoviesByCategory } from '@/services/api'

const categorias = ref([])
const filmes = ref([])
const selectedCategory = ref('')

onMounted(async () => {
  const categoriesGet = await getCategories()
  console.log(categoriesGet)
  categorias.value = categoriesGet
})

const getMovies = async (id) => {
  const moviesGet = await getMoviesByCategory(id)
  console.log(moviesGet)
  filmes.value = moviesGet
}
</script>

<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Filmes separados por Categoria</h1>
          <p class="lead text-body-secondary">
            Nós te retornaremos os 20 melhores filmes de cada categoria.
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div v-if="categorias.length > 0">
          <h2>Categorias:</h2>
          <h4>Selecione uma categoria para ver os filmes</h4>
          <select v-model="selectedCategory" @change="getMovies(selectedCategory)">
            <option disabled value="">Selecione uma categoria</option>
            <option v-for="category in categorias" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 my-5" v-if="filmes">
          <div class="col" v-for="movie in filmes" v-bind:key="movie.id">
            <div class="card shadow-sm">
              <img
                class="bd-placeholder-img card-img-top"
                width="500"
                height="500"
                role="img"
                :src="movie.poster_path"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              />

              <div class="card-body">
                <p class="card-title text-center fs-3">
                  {{ movie.title }}
                </p>
                <p class="card-text" v-if="movie.overview">
                  {{ movie.overview }}
                </p>
                <p class="card-text" v-else>Sem descrição disponível.</p>
                <div class="d-flex justify-content-between align-items-center">
                  <small class="text-body-secondary"
                    >Data de lançamento: {{ movie.release_date }}</small
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
