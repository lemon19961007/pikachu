const string = `
.nose {
    border: 10px solid;
    border-color: black transparent transparent;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    top: 200px;
    margin-left: -10px;
}

.noseCircle {
    background-color: black;
    width: 20px;
    height: 6px;
    position: absolute;
    margin-left: -10px;
    margin-top: -16px;
    border-radius: 10px 10px 0 0;
}

.eye {
    border: 2px black solid;
    background-color: #2e2e2e;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 165px;
    left: 50%;
    margin-left: -32px;
    border-radius: 50%;
}
.eye.left {
    transform: translateX(-120px);
}

.eye.right {
    transform: translateX(120px);
}

.eye::before {
    content: '';
    display: block;
    border: 3px #000 solid;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    left: 7px;
    top: 2px;
}

.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 230px;
    left: 50%;
    margin-left: -100px;
}

.mouth .upperMouth .lip {
    border: 3px solid black;
    background: #ffe600;
    width: 100px;
    height: 25px;
    border-top: transparent;
    position: absolute;
    z-index: 1;
}

.mouth .upperMouth .lip.left {
    border-radius: 0 0 0 50px;
    border-right: transparent;
    transform: rotate(-15deg);

}
.mouth .upperMouth .lip.left:before {
    left: 90px;
}

.mouth .upperMouth .lip.right {
    border-radius: 0 0 50px 0;
    border-left: transparent;
    transform: rotate(15deg);
    margin-left: 100px;
}

.mouth .upperMouth .lip::before {
    content: '';
    background-color: #ffe600;
    width: 7px;
    height: 25px;
    position: absolute;
    bottom: 0;
}

.mouth .upperMouth .lip.right:before {
    right: 90px;
}

.mouth .lowerMouth {
    /*border: 1px blue solid;*/
    width: 100%;
    height: 190px;
    position: absolute;
    top: 10px;
    overflow: hidden;
}

.mouth .lowerMouth .mouthInside {
    border: 3px black solid;
    width: 180px;
    height: 1000px;
    background-color: #9b000a;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -45%;
    border-radius: 90px/400px;
    overflow: hidden;
}

.mouth .lowerMouth .mouthInside .tongue {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    left: 50%;
    bottom: -140px;
    margin-left: -100px;
    border-radius: 100px;
}

.cheek {
    border: 3px black solid;
    width: 86px;
    height: 86px;
    position: absolute;
    background-color: red;
    border-radius: 50%;
    top: 280px;
    left: 50%;
    margin-left: -43px;
    z-index: 2;
}

.cheek.left {
    transform: translateX(-180px);
}

.cheek.right {
    transform: translateX(180px);
}`

export default string;