<template>
  <div class="main">
    <div class="nab">
      <div style="margin: 20px 0 0 20px">
        <p5-title
          content="EnterDemon"
          size="extra-large"
          font_color="#ff0022"
          selected_font_color="#000"
          selected_bg_color="#ff0022"
        ></p5-title>
      </div>
    </div>
    <div class="mainbody">
      <div class="fightout">
        <div class="fightin">
          <div class="informations">
            <legend><p5-text size="large">回合记录</p5-text></legend>
            <div class="text">
              <div class="text" id="ene">
                <p id="battle_history"></p>
              </div>
            </div>
            <div class="energy">
              <p5-text size="large">电量：</p5-text
              ><span><p5-text size="large">0</p5-text></span>
            </div>
          </div>
        </div>
      </div>
      <div class="buffout">
        <div class="buffin">
          <div class="buffmess">
            <div class="heartnum">
              <p5-text size="large">血量</p5-text>
              <van-grid :column-num="3">
                <van-grid-item v-for="value in heart" :key="value">
                  <div class="heart">
                    <img src="../assets/heart.png" alt="" />
                  </div>
                </van-grid-item>
              </van-grid>
            </div>
            <div class="buff">
              <van-grid :column-num="20">
                <van-grid-item v-for="value in buff" :key="value">
                  <van-popover
                    placement="top-start"
                    v-model:show="showPopover"
                    :actions="actions"
                    @select="onSelect"
                  >
                  <img src="../assets/heart.png" alt="">
                    <template #reference>
                      <div class="bufficon">
                        <img src="../assets/icons/1637.jpg" alt="" />
                      </div>
                    </template>
                  </van-popover>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </div>
      </div>
      <div class="skillout">
        <div class="skillin">
          <form action="" name="skill_list">
            <div class="skills">
              <p5-text size="large">技能</p5-text>
              <div>
                <van-grid :column-num="4">
                  <van-grid-item v-for="value in value" :key="value">
                    <div class="p5-hover-animation-gray skt">
                      <p5-title
                        @click="noti('ann', 400)"
                        :content="value"
                        size="large"
                        class="two"
                        font_color="#fff"
                        selected_font_color="#000"
                        selected_bg_color="#fff"
                      ></p5-title>
                    </div>
                  </van-grid-item>
                </van-grid>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="set">
        <div class="setsw">
          <p5-title
            content="电量显示"
            size="medium"
            font_color="#ff0022"
            selected_font_color="#000"
            selected_bg_color="#ff0022"
          ></p5-title>
          <p5-switch v-model="swvalue1" size="medium"></p5-switch>
        </div>
        <div class="setsw">
          <a href="">
            <p5-icon type="btn" name="back" @click="go('/')" />
          </a>

          <!-- <p5-title content="电量显示" size="medium" font_color="#ff0022" selected_font_color="#000" selected_bg_color="#ff0022"></p5-title>
            <p5-switch v-model="swvalue2" size="medium"></p5-switch> -->
        </div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
import { P5Notification } from "p5-ui";
import { ref } from "vue";
import { Toast } from "vant";
export default {
  setup() {
    const showPopover = ref(false);

    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: "选项一" },
      { text: "选项二" },
      { text: "选项三" },
    ];
    const onSelect = (action) => Toast(action.text);

    return {
      actions,
      onSelect,
      showPopover,
    };
  },
  data() {
    return {
      swvalue1: true,
      // swvalue2: false,
      // swvalue3: false,
      heart: 3,
      value: [
        "充电",
        "上勾拳",
        "气功波",
        "追踪炮",
        "格挡",
        "闪避",
        "移动",
        "交换",
      ],
      buff: 1,
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    noti(character, top) {
      P5Notification({ content: "Emm 我要说什么来着？", character, top });
    },
  },
};
</script>

<style lang="less" scoped>
/deep/.p5-svg-btn {
  width: 80px;
  height: 40px;
}
/deep/.van-grid-item__content {
  background: rgba(255, 255, 255, 0);
}
.nab {
  position: fixed;
  //   display: flex;
  justify-content: center;
  width: 100vw;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 99;
  background-image: url(../assets/nab.png);

  background-size: cover;
  border: none;
}
.main {
  --van-border-color: #fffdfd00;
  padding: 0;
  margin: 0;
  background-image: url(../assets/overlay.png);
  background-color: #000;
  display: flex;
  justify-content: center;
  .mainbody {
    margin-top: 100px;
    height: auto;
    width: 80vw;
    .fightout {
      position: relative;
      left: -5%;
      background: white;
      margin-bottom: 50px;
    }
    .fightin {
      border: solid white;
      transform: rotate(-1.5deg);
      background: #000;
      // background-size:100% 100%;
      // background-repeat: no-repeat;
      // background: rgba(255, 255, 255, 0.8);
      padding: 20px;

      .informations {
        transform: rotate(1.5deg);
        height: 400px;
        .energy {
          display: flex;
        }
      }
    }
    .buffout {
      background: white;
      margin-bottom: 50px;
      position: relative;
      left: 5%;
      .buffin {
        height: 150px;
        margin-top: 20px;
        border: solid white;
        transform: rotate(-1.5deg);
        background: #000;
        padding: 15px;
        overflow: hidden;
        margin-bottom: 50px;
        .buffmess {
          transform: rotate(1.5deg);
          display: flex;

          /deep/.van-grid {
            flex-wrap: wrap;
          }
          /deep/.van-grid-item__content {
            padding: 0px;
          }
          .heartnum {
            margin-top: 5px;
            display: flex;
            min-width: 120px;
            width: 30%;
            max-width: 200px;
            height: 45%;

            .heart {
              // margin-left: 5px;
              img {
                width: 100%;
                min-width: 30px;
              }
              width: 100%;
            }
          }
          .buff {
            position: relative;
            float: right;

            // width: 70%;

            .bufficon {
              margin: 5px;
              img {
                border: solid white;
                border-radius: 50%;
                overflow: hidden;
                width: 25px;
              }
            }
          }
        }
      }
    }
    .skillout {
      position: relative;
      left: -5%;
      background: white;
    }
    .skillin {
      height: auto;
      margin-top: 20px;
      border: solid white;
      transform: rotate(-1.5deg);
      background: #000;
      padding: 20px;
      .skills {
        display: flex;
      }
      .skt {
        height: 30px;
        margin-right: 15px;
        // text-align: center;
        width: 70px;
        .two {
          width: 100%;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .set {
      display: flex;
      margin-top: 25px;
      .setsw {
        margin-right: 20px;
      }
    }
  }
}
</style>