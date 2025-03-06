body, html {
    margin: 0;
    padding: 0;
    height: 100%;
}

*, *:before, *:after {
    box-sizing: border-box;
}

#conteneur {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: auto;
}

#produit-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 2;
    mix-blend-mode: multiply;
}

#product-shape {
    fill: #ff7f00;
    transition: fill 0.5s ease;
}

#background-image {
    width: 100%;
    height: auto;
    display: block;
}

.colors {
    display: flex;
    position: fixed;
    bottom: 2em;
    right: 2em;
    z-index: 3;
}

.color {
    height: 36px;
    width: 36px;
    margin-left: 0.5em;
    border-radius: 18px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
    border: 2px solid #aaa;
    cursor: pointer;
}

.jscolor {
    position: fixed;
    bottom: 4em;
    right: 4em;
    z-index: 3;
    padding: 1em;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 5px;
    cursor: pointer;
}
