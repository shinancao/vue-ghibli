<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="id" v-for="id in filmIds">
         <section class="wrapper">
          <div class="info-wrapper">
            <div class="info-left">
              <img class="cover"/>
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
            </div>
          </div>
          <div class="description">{{ film.description }}</div>
        </section>
      </div>
    </div>
    <div class="swiper-button-prev button-color" slot="button-prev"></div>
    <div class="swiper-button-next button-color" slot="button-next"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { mapGetters } from 'vuex'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
      filmId: '',
      film: {},
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    ...mapGetters('films', ['filmIds'])
  },
  created () {
    this.filmId = this.$route.query.id
  },
  mounted () {
    this.mySwiper.on('slideChange', () => {
      const index = this.mySwiper.activeIndex
      if (index >= 0 && index < this.filmIds.length) {
        this.filmId = this.filmIds[index]
      }
    })
  },
  watch: {
    filmId: function (val) {
      if (val) {
        this.film = this.$store.getters['films/getFilmById'](val)
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  box-shadow: 0 7px 20px rgba(100, 28, 2, 0.135);
  border-radius: 10px;
  margin: 50px 80px;
}
.info-wrapper {
  display: flex;
  padding: 30px;
}
.info-left img {
  width: 150px;
  height: 200px;
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
  padding: 20px;
  padding-top: 0px;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #9E854F;
}
.button-color {
  --swiper-theme-color:#503f9d;
}
</style>
