<template>
  <div class="home">
    <div class="main">
      <div class="nab">
        <div style=" float: left;">
          <p5-title
            content="EnterDemon"
            size="extra-large"
            font_color="#ff0022"
            selected_font_color="#000"
            selected_bg_color="#ff0022"
          ></p5-title>
        </div>
        <div class="nabitem">
          <p5-button>
            <p5-title
              content="人机对战"
              :animation="true"
              font_color="#ff0022"
              selected_font_color="#000"
              selected_bg_color="#ff0022"
              @click="go('/ai')"
            ></p5-title>
          </p5-button>
          <p5-button>
            <p5-title
              content="玩家对战"
              :animation="true"
              font_color="#ff0022"
              selected_font_color="#000"
              selected_bg_color="#ff0022"
              @click="go('/player')"
            ></p5-title>
          </p5-button>
          <p5-button>
            <p5-title
              content="聊天室"
              :animation="true"
              font_color="#ff0022"
              selected_font_color="#000"
              selected_bg_color="#ff0022"
              @click="go('/chat')"
            ></p5-title>
          </p5-button>
        </div>
      </div>
      <!-- <p5-button @click="showCrowd">点击开始</p5-button> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import { P5Message } from "p5-ui";
export default {
  created() {
    axios({
      url: "http://www.kangliuyong.com:10002/banner",
      method: "get",
      params: {
        appkey: "U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1ive6BeNA=",
      },
    }).then((res) => {
      console.log(res);
    });
  },
  data() {
    return {
      name: "HomeView",
    };
  },

  methods: {
    go(path) {
      this.$router.push(path);
    },
    showCrowd() {
      let crowd_func = P5CreateCrowd(
        { loop: false, resize: true, fixed: true, step: 6 },
        () => {
          console.log("animation end", crowd_func);
        }
      );
    },
    mission(msg_type) {
      if (msg_type == "default") {
        P5Message({});
      } else if (msg_type == "clear") {
        P5Message({ type: "clear" });
      } else if (msg_type == "fail") {
        P5Message({ type: "fail" });
      }
    },
  },

  components: {},
};
import { P5CreateCrowd } from "p5-ui";
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  padding: 0;
  margin: 0;
  background-image: url(../assets/overlay.png);
  background-color: #000000;
  display: flex;
  justify-content: center;
  .nab {
    padding: 20px;
    position: fixed;
    // display: flex;
    justify-content: center;
    width: 100vw;
    height: auto;
    top: 0;
    left: 0;
    z-index: 99;
    background-image: url(../assets/nab.png);

    background-size: cover;
    border: none;
    .nabitem{
      display: block;
      // height: 8px;
    }
  }
}
</style>
