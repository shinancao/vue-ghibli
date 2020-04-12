<template>
  <section>
    <logo/>
    <div class="species-wrapper">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="s.id" v-for="s in species">
            <div class="species-card">
              <div class="title">{{ s.name }}</div>
              <div class="introduction">
                <div class="introduction-item">
                  <span class="item-title">Classification</span><span class="item-content">{{ s.classification }}</span>
                </div>
                <div class="introduction-item">
                  <span class="item-title">Eye Colors</span><span class="item-content">{{ s.eye_colors }}</span>
                </div>
                <div class="introduction-item">
                  <span class="item-title">Hair Colors</span><span class="item-content">{{ s.hair_colors }}</span>
                </div>
                <div class="introduction-item list">
                  <span class="item-title">People</span>
                  <ul>
                    <li v-for="(name, index) in getPeople(s.people)" :key="index" class="item-content">{{name}}</li>
                  </ul>
                  <span class="item-title">Films</span>
                  <ul>
                    <li v-for="(name, index) in getFilms(s.films)" :key="index" class="item-content">{{name}}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev button-color" slot="button-prev"></div>
        <div class="swiper-button-next button-color" slot="button-next"></div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import Logo from './common/Logo'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Logo,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
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
      species: state => state.species.all,
      people: state => state.people.all,
      films: state => state.films.all
    })
  },
  mounted () {
    this.$store.dispatch('species/getSpecies')
      .then(res => {
        this.$store.dispatch('films/getAllFilms')
        this.$store.dispatch('people/getPeople')
      })
  },
  methods: {
    getPeople (urls) {
      return this.filterList(urls, this.people, 'name')
    },
    getFilms (urls) {
      return this.filterList(urls, this.films, 'title')
    },
    filterList (urls, list, itemName) {
      const ids = urls.map(v => {
        const url = new URL(v)
        return url.pathname.split('/')[2]
      })
      return list.filter(v => ids.includes(v.id)).map(v => v[itemName])
    }
  }
}
</script>
<style scoped>
.species-wrapper {
  /* width: 800px; */
  margin: 0px auto;
  margin-bottom: 30px;
}
.species-card {
  margin: 40px auto;
  box-shadow: 0 7px 20px rgba(100, 28, 2, 0.135);
  border-radius: 20px;
  padding: 30px;
  width: 650px;
  position: relative;
}
.species-card .title {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: #503f9d;
  text-align: center;
}
.introduction {
  margin-top: 20px;
  color: #352D38;
}
.item-title {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 2rem;
  display: inline-block;
  width: 100px;
  margin-right: 15px;
}
.item-content {
  font-size: 1.1rem;
  line-height: 2rem;
}
.list {
  display: flex;
}
.list ul {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-right: 30px;
}
.button-color {
  --swiper-theme-color:#503f9d;
}
</style>
