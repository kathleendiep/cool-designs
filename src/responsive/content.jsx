// CONTENT TO FIT


.container {
    border: 2px solid #ccc;
    padding: 10px;
    width: 20em;
  }
  
  .item {
    width: -moz-fit-content;
    width: fit-content;
    background-color: #8ca0ff;
    padding: 5px;
    margin-bottom: 1em;
  }

  <div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">Item with more text in it, hopefully we have added enough text so the text will start to wrap.</div>
</div>


// FLEX WRAP
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset; 

/* Flexbox Styles */
.content {
    display: flex;
    flex-wrap: wrap;
  }
  .content1 {
    display: flex;
    flex-wrap: nowrap;
  }
  .content2 {
    display: flex;
    flex-wrap: wrap-reverse;
  }