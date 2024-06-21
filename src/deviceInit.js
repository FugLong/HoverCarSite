
export const initDevice = () => {

    //check if on  mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check if the system has a dedicated GPU
    const gpuVendor = navigator.userAgent.includes("NVIDIA") ? "NVIDIA" :
                      navigator.userAgent.includes("AMD") ? "AMD" :
                      navigator.userAgent.includes("Intel HD Graphics") ? "Intel" : "Unknown";

    //check if the system has a dedicated GPU
    const hasGPU = (() => {
      // Try to estimate performance based on vendor and model
      if (gpuVendor === "NVIDIA" || gpuVendor === "AMD") {
        return true;
      } else {
        return false;
      }
    })();

    //decide if performance mode should be used
    const usePerformanceMode = isMobile || !hasGPU;

    //set pixel ratio
    let pixelRatioMax = 2;
    if (usePerformanceMode) {
      pixelRatioMax = 1.5;
    }
    //set pixel ratio
    const pixelRatio = Math.min(window.devicePixelRatio, pixelRatioMax);

    return [isMobile, hasGPU, usePerformanceMode, pixelRatio];
}