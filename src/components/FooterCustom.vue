<template>
  <footer class="footer dl-flex">
    <div class="footer__container container dl-flex">
      <div class="footer__social">
        <div class="footer__credits">© Kolesa Group</div>
        <a href=""><img src="@/assets/Instagram.png" alt="Instagram" /></a>
        <a href=""><img src="@/assets/YouTube.png" alt="Instagram" /></a>
        <a href=""><img src="@/assets/VK.png" alt="Instagram" /></a>
      </div>
      <div class="footer__contact dl-flex">
        <div class="footer__text">
          <p>Есть идеи что улучшить?</p>
          <p>Не знаешь, с кем решить проблему?</p>
        </div>
        <button type="submit" class="footer__contact-btn">Написать</button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterCustom'
}
</script>