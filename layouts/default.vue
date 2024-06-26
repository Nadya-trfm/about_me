<template>
  <header class="header">
    <div class="container">
      <ul class="links">
        <li class="links__item">
          <a target="_blank" href="https://github.com/Nadya-trfm">
            <img src="@/assets/img/github.png" alt="github">
          </a>
        </li>
        <li class="links__item">
          <a target="_blank" href="https://t.me/kasane_jp">
            <img src="@/assets/img/tg.png" alt="telegram">
          </a>
        </li>
        <li class="links__item">
          <a target="_blank" href="mailto:nadia.trf1@gmail.com">
            <img src="@/assets/img/mail.png" alt="email">
          </a>
        </li>
      </ul>
    </div>
  </header>
  <main class="main">
    <slot/>
  </main>
  <footer class="footer">
    <div class="container">
      <ul class="material">
        <li class="material__item">
          <a target="_blank" href="https://icons8.com/icon/I7n6n02hutM5/github">Github</a> иконка от <a target="_blank"
                                                                                                        href="https://icons8.com">Icons8</a>
        </li>
        <li class="material__item">
          <a target="_blank" href="https://icons8.com/icon/0JYct3g5wHHF/telegram">Телеграм</a> иконка от <a
            target="_blank"
            href="https://icons8.com">Icons8</a>
        </li>
        <li class="material__item">
          <a target="_blank" href="https://icons8.com/icon/RORPuSq4oVZb/mail">mail</a> icon by <a target="_blank"
                                                                                                  href="https://icons8.com">Icons8</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

</style>