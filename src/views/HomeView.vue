<script setup>
import { onMounted, ref } from 'vue'
import { getMovies } from '@/services/api'

const movies = ref([])

onMounted(async () => {
  const moviesGet = await getMovies()
  console.log(moviesGet)
  movies.value = moviesGet
})
</script>

<template>
  <main>
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">O seu melhor catálogo de filmes.</h1>
          <p class="lead text-body-secondary">
            Utilizando o the movie database, o Nemovies é um catálogo de filmes que permite que você
            encontre os melhores filmes para assistir.
          </p>
        </div>
      </div>
    </section>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Estes são os filmes mais populares do site:</h1>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col" v-for="movie in movies" v-bind:key="movie.id">
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
