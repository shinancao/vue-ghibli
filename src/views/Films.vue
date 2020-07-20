<template>
  <section>
    <TheLogo/>
    <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="film.id" v-for="film in films">
         <section class="wrapper">
          <div class="info-wrapper">
            <div class="info-left">
              <img class="cover" :src="getCoverUrl(film.id)"/>
            </div>
            <div class="info-right">
              <div class="title">{{ film.title }}</div>
              <div class="introduction">
                <div class="introduction-item">
                  <span class="item-title">Release Date</span><span class="item-content">{{ film.release_date }}</span>
                </div>
                <div class="introduction-item">
                  <span class="item-title">Rate Score</span><span class="item-content">{{ film.rt_score }}</span>
                </div>
                <div class="introduction-item">
                  <span class="item-title">Director</span><span class="item-content">{{ film.director }}</span>
                </div>
                <div class="introduction-item">
                  <span class="item-title">Producer</span><span class="item-content">{{ film.producer }}</span>
                </div>
              </div>
              <div class="description">{{ film.description }}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="swiper-button-prev button-color" slot="button-prev"></div>
    <div class="swiper-button-next button-color" slot="button-next"></div>
  </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import TheLogo from './common/TheLogo'
export default {
  name: 'Films',
  components: {
    Swiper,
    SwiperSlide,
    TheLogo
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      filmId: '',
      swiperOption: {
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapState({
      films: state => state.films.all
    })
  },
  created () {
    this.filmId = this.$route.query.id || ''
  },
  mounted () {
    this.$store.dispatch('films/getAllFilms')
      .then(res => {
        if (this.filmId !== '') {
          const index = this.$store.getters['films/getIndexById'](this.filmId)
          this.mySwiper.slideTo(index, 0, false)
        }
      })
    this.$store.dispatch('films/getAllImages')
  },
  methods: {
    getCoverUrl (id) {
      return this.$store.getters['films/getCoverUrlById'](id)
    }
  }
}
</script>
<style scoped lang="scss">
 @import '../assets/css/films.scss';
</style>
