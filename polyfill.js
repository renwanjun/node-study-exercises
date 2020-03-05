/**
 * 跨浏览器取得窗口位置 能力检测
 */
export const leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
export const topPos=(typeof window.screenTop=="number")?window.screenTop:window.screenY; 

/**
 * 跨浏览器取得窗口大小
 * 
 */ 