// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite( bgImg, fgImg, fgOpac, fgPos ){
    const fgData = fgImg.data;
    const bgData = bgImg.data;

    const fgWidth = fgImg.width;
    const fgHeight = fgImg.width;
    const bgWidth = bgImg.width;
    const bgHeight = bgImg.width;

    for (let fy = 0; fy<fgWidth;fy++){
        for (let fx = 0; fx<fgHeight;fx++){
            // Calculate corresponding background coordinates
            const bx = fx + fgPos.x;
            const by = fy + fgPos.y;
            
            // Ignore pixels outside the background
            if (bx < 0 || bx >= bgWidth || by < 0 || by >= bgHeight) {
                continue;
            }
            
            // Compute indices in the image data arrays
            const fgIndex = (fy * fgWidth + fx) * 4;
            const bgIndex = (by * bgWidth + bx) * 4;
            
            // Extract foreground pixel color and alpha
            const fgR = fgData[fgIndex];
            const fgG = fgData[fgIndex + 1];
            const fgB = fgData[fgIndex + 2];
            const fgA = (fgData[fgIndex + 3] / 255) * fgOpac;
            
            // Extract background pixel color
            const bgR = bgData[bgIndex];
            const bgG = bgData[bgIndex + 1];
            const bgB = bgData[bgIndex + 2];
            
            // Apply alpha blending formula
            const alpha = fgA;
            const invAlpha = 1 - alpha;
            
            bgData[bgIndex] = Math.round(fgR * alpha + bgR * invAlpha);
            bgData[bgIndex + 1] = Math.round(fgG * alpha + bgG * invAlpha);
            bgData[bgIndex + 2] = Math.round(fgB * alpha + bgB * invAlpha);
        }
    }
}
