/*
*       Filename:       array-visualizer.js
*       Purpose:        An array visuaizer class that can represent an array of
*                       integers using html divs that use css flexbox for layout
*       Specification:  
*               -       Take a target div and populate it with blocks whose 
*                       height will represent the integers
*               -       Set height and color for any integer block
*               -       Insert and delete blocks, edit block int/height
*/

class ArrayVisualizer {
        constructor(componentId, size = 18, maxInt = 81) {
                this.blockArray = [];
                this.maxInt = maxInt;
                this.htmlContainer = document.getElementById(componentId)
                for (let i = 0; i < size; i++) {
                        let m = Math.ceil(Math.random() * maxInt);
                        this.blockArray.push({magnitude:m,color:'blue'});
                }
                this.calculateDisplayProperties();
                this.draw();
        }

        addBlock(magnitude, color) {
                this.blockArray.push({magnitude: magnitude, color: color});
                if (magnitude > this.maxInt) {
                        this.maxInt = magnitude;
                }
                this.calculateDisplayProperties();
                this.draw();
        }

        removeBlock(index) {
                this.blockArray.splice(index, 1);
                this.calculateDisplayProperties();
                this.draw();
        }

        editBlock(index, magnitude, color) {
                this.blockArray[index] = {magnitude: magnitude, color: color};
                this.calculateDisplayProperties();
                this.draw();
        }

        // HELPER METHODS START ------------------------------------------------
        calculateDisplayProperties() {
                // TODO: check calculated display properties
                this.htmlContainer.style.display = 'flex';
                this.htmlContainer.style.padding = '0px';
                this.htmlContainer.style.width = '100%';
                this.htmlContainer.style.height = '30vh';
                this.htmlContainer.style.backgroundColor = 'black';
                
                this.blockWidth = 100 / this.blockArray.length;
                let blockWidthInCSSPixels = this.blockWidth / 100 * this.htmlContainer.offsetWidth;
                if (blockWidthInCSSPixels < 20) {
                        this.blockPadding = 0.05 * this.blockWidth;
                        this.blockWidth = 0.95 * this.blockWidth;
                } else {
                        this.blockPadding = 0.1 * this.blockWidth;
                        this.blockWidth = 0.9 * this.blockWidth;
                }      
                this.defaultBlockColor = 'blue';
        }

        draw() {
                this.htmlContainer.innerHTML = '';
                this.blockArray.forEach((block) => {
                        this.htmlContainer.innerHTML += `<div 
                        data-magnitude="${block.magnitude}"
                        style="display: flex-item;
                                width: ${this.blockWidth}%;
                                height: ${(block.magnitude/this.maxInt)*100}%;
                                margin-right: ${this.blockPadding/2}%;
                                margin-left: ${this.blockPadding/2}%;
                                background: ${block.color};">
                        </div>`;
                });
        }
        // HELPER METHODS END --------------------------------------------------
}

/* 
<div    class="sorting-visualizer 
        style="display: block; height: HEIGHT; width: WIDTH;"
>
        <div    class="num-block" 
                data-magnitude="NUMBER" 
                style="display: block; 
                        height: BLOCK_HEIGHT;
                        width: BLOCK_WIDTH;
                        left: BLOCK_X;
                        top: BLOCK_Y"
        >
        </div>
</div>

*/

export {ArrayVisualizer}