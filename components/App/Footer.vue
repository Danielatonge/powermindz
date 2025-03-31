<template>
  <!--------- Footer Start --------->
  <footer class="footer">
    <div class="footer__container">
      <figure>
        <img src="~/assets/images/powermindz-logo-light.png" alt="PowerMindz Logo" />
      </figure>
      <h4>Join the PowerMindz Community</h4>
      <p class="footer-subtitle">Find out how PowerMindz is helping thousands of people across the world.</p>

      <div class="social-links">
        <a href="#">
          <img src="~/assets/images/facebook.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="~/assets/images/x.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="~/assets/images/instagram.png" alt="Instagram" />
        </a>
        <a href="#">
          <img src="~/assets/images/linkedin.png" alt="Youtube" />
        </a>
      </div>

      <div class="footer-nav">
        <a href="#">Privacy Policy</a>
        <a href="#">Return Policy</a>
        <a href="#">Terms of Sale</a>
        <a href="#">Terms of Use</a>
        <a href="#">Shipping</a>
      </div>

      <div class="copyright">
        <p>
          &copy; Copyright
          {{ currentYear }} , by BioSelf Technology Ltd.
        </p>
      </div>
    </div>
  </footer>
  <!--------- Footer End--------->
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<style></style>