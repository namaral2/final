body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .gallery {
    display: flex;
    align-items: center;
    position: relative;
  }

  .image-container {
    overflow: hidden;
    max-width: 500px;
    max-height: 500px;
  }

  img {
    width: 100%;
    height: auto;
  }

  .arrow {
    font-size: 24px;
    cursor: pointer;
    user-select: none;
    position: absolute;
  }

  .left-arrow {
    left: 10px;
  }

  .right-arrow {
    right: 10px;
  }