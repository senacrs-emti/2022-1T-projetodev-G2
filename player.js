class Sprite {
    constructor({position, imageSrc}) {
        this.position = position
        this.image = new this.image()
        this.image.onload = () => {
            this.loaded = true
        }
        this.image.scr = imageSrc
        this.loaded = false
    }
    desenhar() {
        if (! this.loaded) return
        c.drawimage(this.image, this.position.x, this.position.y)
    }
 }