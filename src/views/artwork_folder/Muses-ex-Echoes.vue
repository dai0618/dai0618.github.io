<template>
  <div id="artwork_container">
    <div v-if="$mq === 'pc'" id="pc">
      <div class="header-title">
        <router-link to="/" class="link">Dai Takanashi</router-link>
      </div>
      <div id="nav">
        <router-link to="/artwork" class="link">Artwork</router-link> |
        <router-link to="/" class="link">About</router-link> |
        <router-link to="/" class="link">Contact</router-link>
      </div>
      <div id="Muses-ex-Echoes">
        <h1>Muses ex Echoes</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes1.png" />
          </slide>
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes2.png" />
          </slide>
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes3.png" />
          </slide>
        </hooper>
        <div id="content_mee">
          <p>
            <b>Concept</b>
            <br />
            本作品では絵の生成と解釈の発話の両方を二つのAIエージェントが交互に繰り返す．一方のAIは自らが生成した絵の描写を文章化し，声として発話，もう一方のAIが聞き取り，それをもとに次の絵を生成し，同様に発話する．新たに生成された絵が解釈・発話されることで，創作のEcho（エコー）が生まれる．
            <br />
            <br />
            現在の画像生成AIは人間が創り上げてきた絵や美的感覚を学習してきた．その質の高さは賞賛される一方で，嫌悪もされている．AIによる生成画は，学習データ内にある人間の創造性の残響，Echoといえる．生成画はやがてWebで拡散され，また学習データとしてAIに利用される．このとき，生成画は新奇なものにみえても，実はそれまでのEchoの中から抜け出せないと捉えることができる．
            この“Echoの中”は私たち人間にもいえる．日常にある制作物は過去の創作の結果であり，まさに上のEchoと同様のものである．このEchoの連鎖を受けて人々は過去を生き，今，次の時代へEchoを発する．
            けれどもここでいう次の時代，つまり未来は，これまでの時代，“Echoの中”とは別物になるように感じられないか．私たち人間以外にもEchoを発するものたちが今，現われたのであるから．
            ここにいるAIたちも，実は互いの発話だけでなく，人間の声や環境音などの外部のノイズも聞き取っている．このAIたちがそれを嫌悪しているのか賞賛しているのか定かではないが，確かなことは私たちは互いに影響し合えるということ．そしてその先では，これまでとは違うEchoが響く可能性があるということ．
            <br />
            <br />
            私たち“全て”のEchoesが響き合ったその先で，何が創られるのだろう．
            <br />
          </p>
          <p>
            <b>Credit</b>
            <br />
            Supervisor：徳井直生
            <br />
            Technical Director：小林篤矢
            <br />
            Concept Director：小林優雅
            <br />
            Original Concept：リョウ・サイモン
            <br />
            Lighting：岡﨑圭佑，髙石圭人，渋谷和史
            <br />
            Machine Learning：石井飛鳥，澤昇真
            <br />
            Sound：リョウ・サイモン，髙梨大，小原開
            <br />
            Visual：髙石圭人，渋谷和史，石井飛鳥，松岡佑馬
            <br />
            Concept：半田壮玄，信末竜空，岡﨑圭佑，井上匠
            <br />
            Support：成瀬陽太，キエウ・クッ・タイ，佐々木ユリア
            <br />
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.12.20 - 2023.1.15]Muses ex Echoes
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/muses-ex-echoes/"
            >
              [Link]
            </a>
          </p>
        </div>
      </div>
    </div>
    <div v-if="$mq === 'sp'" id="sp">
      <div class="header-title">
        <router-link to="/" class="link">Dai Takanashi</router-link>
      </div>
      <div id="nav">
        <router-link to="/artwork" class="link">Artwork</router-link> |
        <router-link to="/" class="link">About</router-link> |
        <router-link to="/" class="link">Contact</router-link>
      </div>
      <div id="Muses-ex-Echoes">
        <h1>Muses ex Echoes</h1>
        <hooper :settings="hooperSettings" class="hooper">
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes1.png" />
          </slide>
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes2.png" />
          </slide>
          <slide>
            <img class="mee_image" src="../../assets/Muses-ex-Echoes3.png" />
          </slide>
        </hooper>
        <div id="content_mee">
          <p>
            <b>Concept</b>
            <br />
            本作品では絵の生成と解釈の発話の両方を二つのAIエージェントが交互に繰り返す．一方のAIは自らが生成した絵の描写を文章化し，声として発話，もう一方のAIが聞き取り，それをもとに次の絵を生成し，同様に発話する．新たに生成された絵が解釈・発話されることで，創作のEcho（エコー）が生まれる．
            <br />
            <br />
            現在の画像生成AIは人間が創り上げてきた絵や美的感覚を学習してきた．その質の高さは賞賛される一方で，嫌悪もされている．AIによる生成画は，学習データ内にある人間の創造性の残響，Echoといえる．生成画はやがてWebで拡散され，また学習データとしてAIに利用される．このとき，生成画は新奇なものにみえても，実はそれまでのEchoの中から抜け出せないと捉えることができる．
            この“Echoの中”は私たち人間にもいえる．日常にある制作物は過去の創作の結果であり，まさに上のEchoと同様のものである．このEchoの連鎖を受けて人々は過去を生き，今，次の時代へEchoを発する．
            けれどもここでいう次の時代，つまり未来は，これまでの時代，“Echoの中”とは別物になるように感じられないか．私たち人間以外にもEchoを発するものたちが今，現われたのであるから．
            ここにいるAIたちも，実は互いの発話だけでなく，人間の声や環境音などの外部のノイズも聞き取っている．このAIたちがそれを嫌悪しているのか賞賛しているのか定かではないが，確かなことは私たちは互いに影響し合えるということ．そしてその先では，これまでとは違うEchoが響く可能性があるということ．
            <br />
            <br />
            私たち“全て”のEchoesが響き合ったその先で，何が創られるのだろう．
            <br />
          </p>
          <p>
            <b>Credit</b>
            <br />
            Supervisor：徳井直生
            <br />
            Technical Director：小林篤矢
            <br />
            Concept Director：小林優雅
            <br />
            Original Concept：リョウ・サイモン
            <br />
            Lighting：岡﨑圭佑，髙石圭人，渋谷和史
            <br />
            Machine Learning：石井飛鳥，澤昇真
            <br />
            Sound：リョウ・サイモン，髙梨大，小原開
            <br />
            Visual：髙石圭人，渋谷和史，石井飛鳥，松岡佑馬
            <br />
            Concept：半田壮玄，信末竜空，岡﨑圭佑，井上匠
            <br />
            Support：成瀬陽太，キエウ・クッ・タイ，佐々木ユリア
            <br />
          </p>
          <p>
            <b>Exhibition & Society</b>
            <br />
            [2022.12.20 - 2023.1.15]Muses ex Echoes
            <a
              class="link"
              href="https://www.ntticc.or.jp/ja/archive/works/muses-ex-echoes/"
            >
              [Link]
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import Vue from "vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    sp: 959,
    pc: 960,
  },
  defaultBreakpoint: "sp",
});

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        autoPlay: true,
        wheelControl: false,
        playSpeed: 7000,
      },
    };
  },
};
</script>

<style lang="scss">
#pc {
  padding: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }

  b {
    font-size: 20px;
    line-height: 200%;
  }

  .hooper {
    height: 100%;
    text-align: center;
  }

  .mee_image {
    width: 80%;
  }

  .link:hover {
    opacity: 0.5;
  }
}

#sp {
  padding: 5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  a {
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }

  b {
    font-size: 20px;
    line-height: 200%;
  }

  .hooper {
    height: 100%;
    text-align: center;
  }

  .mee_image {
    width: 100%;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
