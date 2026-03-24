const stageList = [
    [2, [[1, 1], [1, 1]], 4],
    [3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]], 7],
    [3, [[0, 1, 1], [1, 1, 1], [0, 0, 0]], 5],
    [4, [[1, 1, 1, 0], [1, 1, 1, 1], [0, 1, 1, 0], [0, 0, 0, 0]], 9],
    [6, [[0, 1, 0, 1, 1, 0], [0, 1, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0]], 23],
    [6, [[0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1], [0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0], [0, 0, 0, 1, 1, 0]], 20],
    [6, [[0, 0, 1, 1, 1, 1], [0, 1, 1, 0, 0, 1], [1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 1, 0]], 23],
    [7, [[0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 1, 1, 0], new Array(7).fill(1), [1, 0, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1]], 28],
    [7, [[0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0]], 22],
    [7, [[0, 0, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 0], [1, 0, 1, 1, 1, 0, 0], [1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1], ...new Array(2).fill(new Array(7).fill(1))], 39],
    /*Stage10*/
    [2, [[2, 2], [1, 1]], 4],
    [3, [[1, 1, 0], [1, 2, 1], [0, 1, 1]], 7],
    [3, [[0, 1, 1], [1, 2, 1], [0, 0, 0]], 5],
    [4, [[1, 1, 1, 0], [1, 1, 2, 1], [0, 1, 1, 0], [0, 0, 0, 0]], 9],
    [6, [[0, 1, 0, 1, 1, 0], [0, 1, 0, 0, 1, 1], [1, 2, 1, 1, 1, 1], [1, 2, 1, 0, 0, 0], [1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0]], 23],
    [6, [[0, 0, 1, 1, 0, 0], [0, 1, 1, 2, 1, 1], [0, 1, 0, 1, 0, 1], [0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 0], [0, 0, 0, 1, 1, 0]], 20],
    [6, [[0, 0, 1, 1, 1, 1], [0, 1, 1, 0, 0, 1], [1, 1, 1, 1, 1, 1], [1, 0, 1, 1, 0, 0], [1, 1, 1, 2, 1, 0], [0, 0, 0, 1, 1, 0]], 23],
    [7, [[0, 0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 1, 1, 0], [1, 1, 2, 1, 1, 1, 1], [1, 0, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1]], 28],
    [7, [[0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 0, 1, 0], [0, 1, 2, 2, 1, 1, 0], [0, 1, 0, 1, 1, 0, 0], [0, 1, 0, 0, 1, 0, 0], [1, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 0, 0]], 22],
    [7, [[0, 0, 1, 1, 1, 1, 0], [1, 1, 1, 0, 1, 1, 0], [1, 0, 1, 1, 1, 0, 0], [2, 1, 1, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1], ...new Array(2).fill(new Array(7).fill(1))], 39]
    /*Stage20*/
];
let stageId = 0;
let squareHId = null;
let squareWId = null;

function save() {
    let data = localStorage.getItem("one-stroke_drawing");
    if(data) {
        data = JSON.parse(data);
    } else {
        data = {};
    }
    if(stageId > data.stageId || data.stageId === undefined) {
        data.stageId = stageId;
    }
    localStorage.setItem("one-stroke_drawing", JSON.stringify(data));
}

function stageSelect() {
    let data = localStorage.getItem("one-stroke_drawing");
    if(data)  {
        data = JSON.parse(data);
    } else {
        return;
    }
    const stageSelectContentEle = document.querySelector("#stage-select-content");
    stageSelectContentEle.innerHTML = "";
    for(let i = 0;i < data.stageId + 2;i++) {
        if(stageList.length <= i) {
            break;
        }
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = `Stage${i + 1}`;
        stageSelectContentEle.append(opt);
    }
    const optAll = stageSelectContentEle.querySelectorAll("option");
    stageSelectContentEle.value = optAll.length - 1;
    stageId = optAll.length - 1;
}

function startInit() {
    const beforeStartingEles = document.querySelectorAll(".before-starting");
    beforeStartingEles.forEach((b) => {
        b.style.display = "none";
    });
    const playingEles = document.querySelectorAll(".playing");
    playingEles.forEach((p) => {
        p.style.display = null;
    });
    const stageSelectContentEle = document.querySelector("#stage-select-content");
    stageId = Number(stageSelectContentEle.value);
    stageInit();
}

function stageInit() {
    const stageEle = document.querySelector("#stage");
    stageEle.innerHTML = "";
    const title = document.createElement("h1");
    title.textContent = `Stage${stageId + 1}`;
    stageEle.append(title);
    const maxSize = Math.min(window.innerHeight * 0.5, stageEle.clientWidth) / stageList[stageId][0];
    stageList[stageId][1].forEach((st, h) => {
        const squareBox = document.createElement("div");
        squareBox.className = "square-box";
        squareBox.style.height = `${maxSize}px`;
        st.forEach((sq, w) => {
            const square = document.createElement("button");
            square.className = "square";
            square.style.fontSize = `${maxSize * 0.7}px`;
            square.dataset.hid = h;
            square.dataset.wid = w;
            square.dataset.count = sq;
            if(sq === 0) {
                square.disabled = true;
            } else {
                square.textContent = sq;
            }
            square.addEventListener("pointerdown", () => {
                draw(square);
            });
            square.addEventListener("click", () => {
                draw(square);
                stageJudgement();
            });
            square.addEventListener("pointerenter", (s) => {
                draw(square, s.buttons);
            })
            squareBox.append(square);
        });
        stageEle.append(squareBox);
    });
}

function draw(s, b) {
    if(b === 0 || s.disabled || s.classList.contains("fill")) {
        return;
    }
    const hid = Number(s.dataset.hid);
    const wid = Number(s.dataset.wid);
    const count = Number(s.dataset.count);
    if((squareHId === null && squareWId === null) || (squareHId === hid && squareWId >= wid - 1 && squareWId <= wid + 1 && squareWId !== wid) || (squareWId === wid && squareHId >= hid - 1 && squareHId <= hid + 1 && squareHId !== hid)) {
        squareHId = hid;
        squareWId = wid;
        if(count === 1) {
            s.dataset.count = 0;
            s.textContent = "";
        } else {
            s.dataset.count = count - 1;
            s.textContent = count - 1;
        }
        switch(Number(s.dataset.count)) {
            case 0:
                s.classList.remove("yellow-fill");
                s.classList.add("fill");
                break;

            case 1:
                s.classList.remove("red-fill");
                s.classList.add("yellow-fill");
                break;

            case 2:
                s.classList.add("red-fill");
                break;
        }
    }
}

function drawCancel() {
    squareHId = null;
    squareWId = null;
    stageInit();
}

function stageJudgement() {
    const fillEles = document.querySelectorAll(".fill");
    if(fillEles.length !== stageList[stageId][2]) {
        return;
    }
    squareHId = null;
    squareWId = null;
    save();
    if(stageList.length - 1 > stageId) {
        stageId += 1;
    } else {
        stageId = 0;
    }
    stageInit();
}

function pause() {
    const playingEles = document.querySelectorAll(".playing");
    playingEles.forEach((p) => {
        p.style.display = "none";
    });
    const beforeStartingEles = document.querySelectorAll(".before-starting");
    beforeStartingEles.forEach((b) => {
        b.style.display = null;
    });
    stageSelect();
}

window.onload = function() {
    const descriptionButtonEle = document.querySelector("#description-button");
    descriptionButtonEle.addEventListener("click", () => {
        alert("緑のマスは1度、黄色のマスは2度、赤のマスは3度通ってください。");
    });
    const startButtonEle = document.querySelector("#start-button");
    startButtonEle.addEventListener("click", startInit);
    const resetButtonEle = document.querySelector("#reset-button");
    resetButtonEle.addEventListener("click", drawCancel);
    const pauseButtonEle = document.querySelector("#pause-button");
    pauseButtonEle.addEventListener("click", pause);
    document.addEventListener("pointerup", stageJudgement);
    document.addEventListener("touchmove", (e) => {
        e.preventDefault();
    }, {
        passive: false
    });
    stageSelect();
}