<template>
  <section>
    <TheLogo/>
    <div class="people-wrapper">
      <div v-for="p in people" :key="p.id" class="people-card" @click="viewFilm(p.films[0])">
        <div class="title">{{ p.name }}</div>
        <div class="introduction">
          <div class="introduction-item">
            <span class="item-title">Gender</span><span class="item-content">{{ p.gender }}</span>
          </div>
          <div class="introduction-item">
            <span class="item-title">Age</span><span class="item-content">{{ p.age }}</span>
          </div>
          <div class="introduction-item">
            <span class="item-title">Eye Color</span><span class="item-content">{{ p.eye_color }}</span>
          </div>
          <div class="introduction-item">
            <span class="item-title">Hair Color</span><span class="item-content">{{ p.hair_color }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import TheLogo from './common/TheLogo'
export default {
  name: 'People',
  components: {
    TheLogo
  },
  computed: {
    ...mapState({
      people: state => state.people.all
    })
  },
  created () {
    this.$store.dispatch('people/getPeople')
  },
  methods: {
    viewFilm (filmUrl) {
      // get film id from filmUrl
      const url = new URL(filmUrl)
      const id = url.pathname.split('/')[2]
      this.$router.push({
        path: '/films',
        query: {id: id}
      })
    }
  }
}
</script>
<style scoped lang="scss">
  @import '../assets/css/people.scss';
</style>
