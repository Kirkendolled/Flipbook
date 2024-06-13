* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    background-color: powderblue;
}

/* Book */
.book {
    position: relative;
    width: 525px;
    height: 400px;
    transition: transform 0.5s;
}

.paper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    perspective: 1500px;
}

.front,
.back {
    background-color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left;
    transition: transform 0.5s;
}

.front {
    z-index: 1;
    backface-visibility: hidden;
    border-left: 3px solid powderblue;
}

.back {
    z-index: 0;
}

.front-content,
.back-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.back-content {
    transform: rotateY(180deg);
}

/* Paper flip effect */
.flipped .front,
.flipped .back {
    transform: rotateY(-180deg);
}

/* Controller Buttons */
button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 100px;
    transition: transform 0.5s;
}

button:focus {
    outline: none;
}

button:hover i {
    color: #636363;
}

i {
    font-size: 50px;
    color: gray;
}

/* Paper stack order */
#p1 {
    z-index: 5;
}

#p2 {
    z-index: 4;
}

#p3 {
    z-index: 3;
}

#p4 {
    z-index: 2;
}

#p5 {
    z-index: 1;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}



