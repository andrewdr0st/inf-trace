import { setupGPUDevice } from "./gpuManager.js";

const canvas = document.getElementById("canvas");

async function init() {
    if (await setupGPUDevice(canvas)) {
        main();
    }
}

function main() {

}

init();
