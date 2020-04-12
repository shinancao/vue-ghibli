<template>
  <section>
    <logo/>
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
import Logo from './common/Logo'
export default {
  components: {
    Swiper,
    SwiperSlide,
    Logo
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
<style scoped>
.wrapper {
  box-shadow: 0 7px 20px rgba(100, 28, 2, 0.135);
  border-radius: 10px;
  margin: 40px 60px;
}
.info-wrapper {
  display: flex;
  padding: 30px;
}
.info-left img {
  width: 280px;
  height: auto;
  margin-right: 30px;
}
.info-right .title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: #503f9d;
}
.introduction {
  margin-top: 20px;
  margin-bottom: 20px;
}
.item-title {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 2rem;
  color: #352D38;
  display: inline-block;
  width: 100px;
  text-align: right;
  margin-right: 15px;
}
.item-content {
  font-size: 1.1rem;
  line-height: 2rem;
  color: #352D38;
}
.description {
  font-size: 1.2rem;
  line-height: 2rem;
  color: #352D38;
}
.button-color {
  --swiper-theme-color:#503f9d;
}
</style>
