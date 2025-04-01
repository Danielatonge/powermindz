<template>
  <!--------- Footer Start --------->
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__body">

          <div class="footer__content">
            <figure>
              <img src="~/assets/images/powermindz-logo-light.png" alt="PowerMindz Logo" />
            </figure>
            <p class="footer-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed
              nunc eget dictum Sed ornare cursus sed nunc eget dictumd nunc eget dictum Sed ornare cursus sed nunc eget
              dictum </p>

            <div class="social-links">
              <a href="#">
                <img src="~/assets/images/instagram.png" alt="Instagram" />
              </a>
              <a href="#">
                <img src="~/assets/images/facebook.png" alt="Facebook" />
              </a>
              <a href="#">
                <img src="~/assets/images/x.png" alt="Twitter" />
              </a>
              <a href="#">
                <img src="~/assets/images/linkedin.png" alt="Youtube" />
              </a>
            </div>

          </div>

          <div class="footer-nav">
            <a href="#">About</a>
            <a href="#">Shop</a>
            <a href="#">Learn</a>
            <a href="#">Cart</a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="copyright">
            <p> PowerMindz is a registered trademark of PowerMindz, Inc.
              &copy; {{ currentYear }} PowerMindz, Inc.
            </p>
          </div>
          <div class="footer-bottom-nav">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!--------- Footer End--------->
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>

<style></style>