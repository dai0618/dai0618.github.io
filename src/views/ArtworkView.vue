<template>
  <div id="artwork_container">
    <div v-if="$mq === 'pc'" id="pc">
      <div class="header-title">
        <a href="/" class="link">Dai Takanashi</a>
      </div>
      <div id="nav">
        <a href="/artwork" class="link">Artwork</a> |
        <a href="../#about" v-scroll-to="'#about'" class="link">About</a> |
        <a href="../#contact" v-scroll-to="'#contact'" class="link">Contact</a>
      </div>
      <div id="Artwork">
        <h1>Artwork</h1>
        <a href="/vfr">
          <img class="artwork_image" src="../assets/vfr-image1.png" />
        </a>
        <a href="/smc">
          <img class="artwork_image" src="../assets/smc-image1.png" />
        </a>
      </div>
    </div>
    <div v-if="$mq === 'sp'" id="sp">
      <div class="header-title">
        <a href="/" class="link">Dai Takanashi</a>
      </div>
      <div id="nav">
        <a href="/artwork" class="link">Artwork</a> |
        <a href="../#about" v-scroll-to="'#about'" class="link">About</a> |
        <a href="../#contact" v-scroll-to="'#contact'" class="link">Contact</a>
      </div>
      <div id="Artwork">
        <h1>Artwork</h1>
        <a href="/vfr">
          <img class="artwork_image" src="../assets/vfr-image1.png" />
        </a>
        <a href="/smc">
          <img class="artwork_image" src="../assets/smc-image1.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#pc {
  padding: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

  .artwork_image {
    padding: 5px;
    width: 25%;
  }

  .artwork_image:hover {
    opacity: 0.5;
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

  .hooper {
    height: 100%;
    text-align: center;
  }

  h1 {
    font-size: 25px;
  }

  b {
    font-size: 15px;
  }

  .artwork_image {
    width: 100%;
  }

  .sns_image {
    border-radius: 15px;
    padding: 10px;
    width: 30px;
  }

  .image:hover {
    opacity: 0.5;
  }

  .sns_image:hover {
    opacity: 0.5;
  }

  .link:hover {
    opacity: 0.5;
  }
}
</style>
