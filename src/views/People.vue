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
<style scoped>
.people-wrapper {
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.people-card {
  margin-top: 30px;
  margin-right: 30px;
  box-shadow: 0 7px 20px rgba(100, 28, 2, 0.135);
  border-radius: 20px;
  padding: 30px;
  min-width: 220px;
  position: relative;
  transition: all 300ms ease, transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275), -webkit-transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.people-card .title {
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
  width: 80px;
  margin-right: 15px;
}
.item-content {
  font-size: 1.1rem;
  line-height: 2rem;
}
.people-card:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 20px 0;
  cursor: pointer;
  transition: inherit;
  background-color: #f97045;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NTI8L3RpdGxlPjxwYXRoIGQ9Ik04MS4zMDMyOSwzOC41MjkzOUExNC4wMTgsMTQuMDE4LDAsMSwwLDYxLjQ3NywxOC43MDY3MUw0Ny4wMDMxNSwzMy4xNzkxNGExNC4wMzAzNywxNC4wMzAzNywwLDAsMCwwLDE5LjgyMTcxLDQuODAxMTMsNC44MDExMywwLDAsMS02Ljc4OTc5LDYuNzg5ODcsMjMuNjQzMjcsMjMuNjQzMjcsMCwwLDEsMC0zMy40MDE0NUw1NC42ODcyMSwxMS45MTY4NEEyMy42MjAzLDIzLjYyMDMsMCwwLDEsODguMDkzMDgsNDUuMzE5MjdMODAuOTIzOCw1Mi40ODcxMWE0LjgwMTE0LDQuODAxMTQsMCwwLDEtNi43ODk4LTYuNzg5ODdaTTExLjkwNzQxLDg4LjA5MzlhMjMuNjUwNTMsMjMuNjUwNTMsMCwwLDAsMzMuNDA1ODYtLjAwMUw1OS43ODY2NCw3My42MjE0N2EyMy42MTU4MywyMy42MTU4MywwLDAsMCwwLTMzLjQwMTQ1LDQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTc5LDYuNzg5ODgsMTQuMDE1MzEsMTQuMDE1MzEsMCwwLDEsMCwxOS44MjI2OEwzOC41MjM0OCw4MS4zMDRBMTQuMDE4LDE0LjAxOCwwLDEsMSwxOC42OTcyLDYxLjQ4MTM1TDI1Ljg2Niw1NC4zMTM1YTQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTgtNi43ODk4N2wtNy4xNjg3OSw3LjE2Nzg1QTIzLjY0NDg5LDIzLjY0NDg5LDAsMCwwLDExLjkwNzQxLDg4LjA5MzlaIj48L3BhdGg+PC9zdmc+");
}
.people-card:hover .title {
  color: #ffffff;
}
.people-card:hover .introduction {
  color: rgba(255, 255, 255, 0.8);
}
.people-card:hover {
  background-color: #f97045;
}
.people-card:hover:after {
  background-color: #fff;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmI2ZjNjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHg9IjBweCIgeT0iMHB4Ij48dGl0bGU+NTI8L3RpdGxlPjxwYXRoIGQ9Ik04MS4zMDMyOSwzOC41MjkzOUExNC4wMTgsMTQuMDE4LDAsMSwwLDYxLjQ3NywxOC43MDY3MUw0Ny4wMDMxNSwzMy4xNzkxNGExNC4wMzAzNywxNC4wMzAzNywwLDAsMCwwLDE5LjgyMTcxLDQuODAxMTMsNC44MDExMywwLDAsMS02Ljc4OTc5LDYuNzg5ODcsMjMuNjQzMjcsMjMuNjQzMjcsMCwwLDEsMC0zMy40MDE0NUw1NC42ODcyMSwxMS45MTY4NEEyMy42MjAzLDIzLjYyMDMsMCwwLDEsODguMDkzMDgsNDUuMzE5MjdMODAuOTIzOCw1Mi40ODcxMWE0LjgwMTE0LDQuODAxMTQsMCwwLDEtNi43ODk4LTYuNzg5ODdaTTExLjkwNzQxLDg4LjA5MzlhMjMuNjUwNTMsMjMuNjUwNTMsMCwwLDAsMzMuNDA1ODYtLjAwMUw1OS43ODY2NCw3My42MjE0N2EyMy42MTU4MywyMy42MTU4MywwLDAsMCwwLTMzLjQwMTQ1LDQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTc5LDYuNzg5ODgsMTQuMDE1MzEsMTQuMDE1MzEsMCwwLDEsMCwxOS44MjI2OEwzOC41MjM0OCw4MS4zMDRBMTQuMDE4LDE0LjAxOCwwLDEsMSwxOC42OTcyLDYxLjQ4MTM1TDI1Ljg2Niw1NC4zMTM1YTQuODAxMTQsNC44MDExNCwwLDAsMC02Ljc4OTgtNi43ODk4N2wtNy4xNjg3OSw3LjE2Nzg1QTIzLjY0NDg5LDIzLjY0NDg5LDAsMCwwLDExLjkwNzQxLDg4LjA5MzlaIj48L3BhdGg+PC9zdmc+");
}

</style>
