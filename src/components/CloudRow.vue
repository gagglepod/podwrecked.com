<template>
  <!-- <div class="cloud-row">
  <div class="cloud-row-top">
    <svg id="" preserveAspectRatio="xMidYMax meet" viewBox="0 0 1600 100" style="display: block;" data-height="100">
        <path class="" style="fill: #006a77;" d="M-40,95.627C20.307,95.627,20.058,56,80,56s60.003,40,120,40s59.948-40,120-40s60.313,40,120,40s60.258-40,120-40s60.202,40,120,40s60.147-40,120-40s60.513,40,120,40s60.036-40,120-40c59.964,0,60.402,40,120,40s59.925-40,120-40s60.291,40,120,40s60.235-40,120-40s60.18,40,120,40s59.82,0,59.82,0l0.18,138H-60V96L-40,95.627z"></path>
    </svg>
  </div>
</div> -->

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
            style="fill: #232f3e"
            d="M 31.615583,86.351641 H 192.16499 v 26.901969 c 0,0 -32.03411,-14.237983 -59.62682,-12.72484 -22.34188,1.2252 -54.779359,9.72634 -54.779359,9.72634 0,0 -22.029534,3.62882 -34.471238,-1.88988 -12.441702,-5.51871 -11.67199,-22.013589 -11.67199,-22.013589 z"
          />
          <path
            style="fill: #385266"
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

<style>
.cloud-row-top {
  background: var(--color-dino-ride);
}

.cloud-row {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
</style>
