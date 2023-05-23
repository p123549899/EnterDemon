<template>
  <div class="main">
    <div class="nab">
      <div style="margin: 10px 0 0 10px;">
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
      
      <div class="fight">
        <fieldset class="informations">
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
        </fieldset>
      </div>
      <div class="skill">
        <form action="" name="skill_list">
          <div class="skills">
            <legend><p5-text size="large">技能</p5-text></legend>
            <div>
              <van-grid :column-num="4">
                <van-grid-item v-for="value in value" :key="value">
                  <div class="p5-hover-animation-gray skt">
                    <a href="">
                      <p5-title
                        :content="value"
                        size="large"
                        class="two"
                      ></p5-title>
                    </a>
                  </div>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </form>
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
export default {
  data() {
    return {
      swvalue1: true,
      swvalue2: false,
      swvalue3: false,
      value: [
        "充电",
        "上勾拳",
        "气功波",
        "追踪炮",
        "元气弹",
        "格挡",
        "闪避",
        "自杀",
        "交换",
      ],
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
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
    .fight {
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.8);
      padding: 20px;

      .informations {
        height: 250px;
        .energy {
          display: flex;
        }
      }
    }
    .skill {
      height: auto;
      margin-top: 20px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.8);
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