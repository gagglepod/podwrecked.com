<template>
  <div class="cloud-row">
    <div class="cloud-row-top">
      <svg
        class="separator"
        width="100%"
        height="100"
        viewBox="0.1 0.1 180 40"
        preserveAspectRatio="none"
      >
        <g transform="translate(-18.298844,-77.973964)">
          <path
            style="fill: transparent"
            d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
          />
          <path
            style="fill: transparent"
            d="M 18.441597,78.106256 H 198.58126 v 39.288614 c 0,0 -43.10672,-27.825245 -73.47599,-19.687823 -30.369264,8.137423 -46.832208,12.548653 -46.832208,12.548653 0,0 -32.775418,8.05972 -46.735258,0 C 17.577964,102.19598 18.441597,78.106256 18.441597,78.106256 Z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cloud-row {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.cloud-row-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%; /* Adjust the height as needed */
  overflow: hidden;
}

.cloud-row-top svg {
  width: 100%;
  height: 100%;
}
</style>
