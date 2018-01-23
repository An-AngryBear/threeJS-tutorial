
function Input() {
    self = this;

    self.LeftPressed = false;
    self.RightPressed = false;
    self.isUpPressed = false;
    self.isDownPressed = false;

    function handleKeyEvent(e, isKeyDown) {
        if(e.keyCode == 65) {
            self.isLeftPressed = isKeyDown
        }
        if(e.keyCode == 68) {
            self.isRightPressed = isKeyDown
        }
        if(e.keyCode == 87) {
            self.isUpPressed = isKeyDown
        }
        if(e.keyCode == 83) {
            self.isDownPressed = isKeyDown
        }
    } 
    
    document.addEventListener("keydown", function(e) {
         handleKeyEvent(e, true) 
    }) 
    document.addEventListener("keyup", function(e) { 
         handleKeyEvent(e, false) 
    }) 
} 
 
export { Input }; 