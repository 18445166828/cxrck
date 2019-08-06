<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        @click.native="clickHandle(item.id)"
        class="sweper-item"
        v-for="item in booklist"
        :key="item.id"
      >
        <img :src="'https://images.weserv.nl/?url='+item.cover.url" />
        <span>{{item.title}}</span>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      booklist: [],
      start: 0,
      count: 20,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.getData();
    let obj = {
      title: "书籍",
      navName: "book"
    };
    this.$emit("changeActive", obj);
  },
  methods: {
    getData() {
      let birdapi = "https://bird.ioliu.cn/v2?url=";
      let bookUrl = `https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20`;
      axios.get(birdapi + bookUrl).then(res => {
        this.booklist = this.booklist.concat(res.data.subject_collection_items);
        console.log(res.data.subject_collection_items);
      });
    },
    clickHandle(id) {
      this.$router.push({
        name: "bookdetail",
        params: {
          id
        }
      });
    }
  }
};
</script>
<style scoped>
.sweper-item {
  position: relative;
  height: 4rem;
}
img {
  width: 90%;
  margin-left: 0.3rem;
}
span {
  font-size: 0.3rem;
  position: absolute;
  left: 25%;
  top: 80%;
}
</style>
