import axios from "axios";
import music from "~/data/music";
import SlideUpDown from "vue-slide-up-down";

export default {
  components: { SlideUpDown },
  data: function() {
    return {
      music: music,
      lyric: null,
      lyricDisplayFlags: {},
      lyricDateList: {},
    };
  },
  created() {
    this.lyricDisplayFlags = music.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {});
    this.addLyricData();
  },
  methods: {
    addLyricData() {
      music.forEach((ele) => {
        this.getLyricData(ele.id)
          .then((resolve) => {
            this.$set(this.lyricDateList, ele.id, resolve.data);
          })
          .catch((reject) => {
            this.$set(this.lyricDateList, ele.id, reject.data);
          });
      });
    },
    getLyricData(musicEleId) {
      return new Promise((resolve, reject) => {
        axios.get(`/lyrics/${musicEleId}.html`).then(
          (lyric) => {
            resolve(lyric);
          },
          () => {
            reject(`<div>歌詞が用意できていません<div/>`);
          }
        );
      });
    },
    lyricDisplay(musicEleId) {
      this.lyricDisplayFlags[musicEleId] = !this.lyricDisplayFlags[musicEleId];
    },
  },
};
