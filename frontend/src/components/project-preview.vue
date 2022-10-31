<template>
  <section @click="closeModal" class="preview-container">
    <span class="img-cover">
      <img
        class="imgList"
        @click="showModal"
        :src="require(`../assets/${project.imgsUrl}.png`)"
      />
      <!-- <ul class="img-content">
            <li
              v-for="(tech, idx) in project.Tecnolegies"
              :key="idx"
            >
              {{ tech }}
            </li>
          </ul> -->
      <span class="img-content">
        <p
          v-for="(tech, idx) in project.Tecnolegies"
          :key="idx"
          class="cover-tech-txt"
        >
          {{ tech }}
        </p>
      </span>
    </span>

    <main
      ref="modalWrapper"
      v-if="isActive"
      :class="{ modalWrapper: isActive }"
    >
      <div class="main-display">
        <span class="main-disaply-text">
          <div class="main-disaplay-wrapper">
            <h1 class="head-line">{{ project.title }}</h1>
            <p>🟦 about: {{ project.content }}</p>
            <div>🟦 Tecnolegies i have been using in this project :</div>
            <ul class="main-disaply-text-list">
              <li
                v-for="(tech, idx) in project.Tecnolegies"
                :key="idx"
                class="cover-tech-txt"
              >
                {{ tech }}
              </li>
            </ul>

            <div class="links">
              <p>
                🟦 Go visit :
                <span>
                  <button class="link-btn">
                    <a :href="getGitLink"> Github </a>
                  </button></span
                >
                <span
                  ><button class="link-btn">
                    <a :href="getWebLink"> View the Website</a>
                  </button></span
                >
              </p>
            </div>
          </div>
          <div class="video">
            <!-- <el-table
    v-loading="loading"
    :target=iframe> -->
            <iframe
              width="100%"
              height="100%"
              :src="getVideo"
              frameborder="0"
              name="youtube embed"
              allow="autoplay;fullscreen;encrypted-media"
              allowfullscreen
            ></iframe>
            <!-- </el-table> -->
          </div>
        </span>
      </div>
    </main>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  components: {},
  computed: {
    getImg() {
      let src = `${this.project.imgsUrl[0]}`;
      return src;
    },
    getGitLink() {
      return this.project.link;
    },
    getWebLink() {
      return this.project.web;
    },
    getVideo() {
      return this.project.url;
    },
  },
  methods: {
    showModal() {
      this.isActive = !this.isActive;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    closeModal(e) {
      if (e.target === this.$refs.modalWrapper) {
        this.isActive = false;
      }
    },
  },
  data() {
    return {
      isActive: false,
      url: this.project.url,
      modal: this.$refs.modalWrapper,
      loading: true,
    };
  },
  created() {},
};
</script>

<style scoped>
.close {
  display: none;
}
.cover-tech-txt {
  display: flex;
  flex-direction: column;
}
.imgList {
  width: 100%;
  height: 100%;
  /* height: 280px; */
  object-fit: cover;
}
.imgList:hover {
  opacity: 0.5;
}
.imgList:hover ~ .img-content {
  position: absolute;
  bottom: 230%;
  left: 22%;
  text-align: center;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  font-family: "latoregular";
  font-size: 1.5rem;
  /* padding: 10%; */
}

.modalWrapper {
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  padding-top: 12px; /* Location of the box */
  bottom: 50px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  /* overflow: auto; */
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.img-cover {
  position: relative;
}
.img-content {
  display: none;
}

.show {
  display: none;
}
.card {
  grid-column-end: span 2;
  grid-row-end: span 2;
}
.head-line {
  font-family: "latoregular";
  font-size: 2rem;
  background-color: gainsboro;
  max-width: 100%;
  margin: 0;
  text-align: center;
}
.main-display {
  gap: 15px;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 35%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  top: 129px;
  /* text-align: center; */
  /* grid-auto-columns: 1fr,1fr,1fr; */
}
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@media (max-width: 740px) {
  .main-display {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 65%;
  }
}

/* .main-display-img {
  flex-basis: 25%;
  width: 400px; */
/* height: 300px; */

/* width: 100px; */
/* } */
.main-disaply-text {
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
}
.main-disaply-text-list {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
.img-disaply-text-list {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.arrow-img {
  width: 50px;
  height: 50px;
}

.wraaper-display-img {
  flex-basis: 40%;
}
.video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 80%;
}

.video iframe {
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
}
.links {
}
.link-btn {
  border: 1px solid darkslateblue;
  border-radius: 9%;
  font-family: "latoregular";
  margin: 5px;
  padding: 5px;
  background: white;
}
</style>



  
