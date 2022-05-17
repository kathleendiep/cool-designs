.project-container{
    background: url(/images/backgroundmesh.png);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding-top: 50px;
    margin-top: 50px;
  }


/*
to make image fit in the background
======================================================*/

.mesh-background {
    background: url(/images/mesh-profile.png);
    background-size: cover;
    width: 100vw;
    height: 100vh;
  }
  .parent > .mesh-background {
    flex-shrink: 0;
    max-width: inherit;
    max-height: inherit;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }

  <div className="parent">
    <div className="mesh-container">
    </div>
</div> 

/*
to make image fit in the background
======================================================*/
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Resizing_background_images
.bgSizeContain {
    background-image: url(https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png);
    background-size: contain;
    width: 160px;
    height: 160px;
    border: 2px solid;
    color: pink;
    resize: both;
    overflow: scroll;
  }


  // to make it a certain shape: 
  img { 
  border-radius: 30px 30px 165px 30px 
}
<img src=" c-pawty-banner.png "
  c-pawty-banner.png 