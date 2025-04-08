// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.
function composite(bgImg, fgImg, fgOpac, fgPos) {
    const bgWidth = bgImg.width;
    const bgHeight = bgImg.height;
    const fgWidth = fgImg.width;
    const fgHeight = fgImg.height;
    
    const bgData = bgImg.data;
    const fgData = fgImg.data;
    
    const hasAlpha = fgData.length === fgWidth * fgHeight * 4; // Controllo se ha il canale Alpha
    
    for (let fy = 0; fy < fgHeight; fy++) {
        for (let fx = 0; fx < fgWidth; fx++) {
            // Calcolo coordinate nel background
            const bx = fx + fgPos.x;
            const by = fy + fgPos.y;
            
            // Ignoro pixel fuori dal background
            if (bx < 0 || bx >= bgWidth || by < 0 || by >= bgHeight) {
                continue;
            }
            
            // Indici nei dati dell'immagine
            const fgIndex = (fy * fgWidth + fx) * 4;
            const bgIndex = (by * bgWidth + bx) * 4;
            
            // Estraggo i colori del foreground
            const fgR = fgData[fgIndex];
            const fgG = fgData[fgIndex + 1];
            const fgB = fgData[fgIndex + 2];

            // Se ha il canale alpha lo uso, altrimenti assumo opacità massima
            const fgA = hasAlpha ? (fgData[fgIndex + 3] / 255) * fgOpac : fgOpac;
            
            // Estraggo i colori del background
            const bgR = bgData[bgIndex];
            const bgG = bgData[bgIndex + 1];
            const bgB = bgData[bgIndex + 2];
            
            // Applico l'alpha blending
            const alpha = fgA;
            const invAlpha = 1 - alpha;
            
            bgData[bgIndex] = Math.round(fgR * alpha + bgR * invAlpha);
            bgData[bgIndex + 1] = Math.round(fgG * alpha + bgG * invAlpha);
            bgData[bgIndex + 2] = Math.round(fgB * alpha + bgB * invAlpha);
        }
    }
}

