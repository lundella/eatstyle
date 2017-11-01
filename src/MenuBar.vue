<template>
  <div id="menu-bar">
    <div class="search">
      <p>
        <input type="text" placeholder="검색"/>
        <img src="./assets/search.png">
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'menu-bar'
  }
</script>

<style>
  #menu-bar {
    width: 100%;
    height: 60px;
    padding-top: 20px;
    background-color: #42b983;
  }
  .search {
    width: 50%;
    height: 35px;
    border: 1px solid #2c3e50;
    border-radius: 10px;
    margin: 0 auto;
  }
  p {
    margin: 10px 20px;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    text-decoration: none;
    padding-bottom: 5px;
  }
  img {
    margin-top: -7px;
    width: 28px;
    height: 28px;
    float: right;
    cursor: pointer;
  }
</style>
