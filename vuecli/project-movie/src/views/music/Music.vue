<template>
  <div class="loading" v-if="!isShow">
    <img src="../../assets/img/timg.gif" alt />
  </div>
  <div v-else>
    <aplayer class="audio" :audio="audio" :lrcType="3" />
    <table class="music-list">
      <thead>
        <tr>
          <td colspan="2">歌曲名称</td>
          <td>歌手</td>
        </tr>
      </thead>
      <tbody class="musicbody">
        <tr v-for="(item,index) in dataList" :key="index" @click="handle(item.id)">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ar[0].name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";

Vue.use(APlayer);
export default {
  data() {
    return {
      audio: [
        {
          name: "东西（Cover：林俊呈）",
          artist: "纳豆",
          url: "https://cdn.moefe.org/music/mp3/thing.mp3",
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        }
      ],
      dataList: [],
      isShow: false
    };
  },
  created() {
    let obj = {
      title: "音乐",
      navName: "music"
    };
    this.$emit("changeActive", obj);
    this.getDate();
  },
  methods: {
    handle(id) {
      let Url2 = "https://bird.ioliu.cn/netease/song?id="+id ;
      axios.get(Url2).then(res => {
        let obj = {
          name: res.data.data.al.name,
          artist: res.data.data.ar[0].name,
          url: res.data.data.mp3.url,
          cover: res.data.data.al.picUrl
        };
        this.audio = obj;
        // this.$refs.player.play();
        console.log(res);
      });
    },

    getDate() {
      let Url1 = "https://bird.ioliu.cn/netease/playlist?id=2899785819";
      axios.get(Url1).then(res => {
        console.log(res.data.playlist.tracks);
        this.dataList = res.data.playlist.tracks;
        this.isShow = true;
      });
    }
  }
};
</script>
<style scoped>
.music-list {
  font-size: 0.4rem;
}

.music-list tbody tr:nth-child(odd) {
  background-color: azure;
}
.loading {
  width: 100vw;
}
.loading img {
  width: 100%;
}
</style>