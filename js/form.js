class Form{
    constructor(){
        this.title=createElement('h1')
        this.input=createInput('name')
        this.button=createButton('play')
        this.greeting=createElement('h3')
    }

    display(){
  

   this.title.position(displayWidth/2-100, 10)
   this.input.position(displayWidth/2-40, displayHeight/2-40)
   this.button.position(displayWidth/2-10, displayHeight/2-10)

   this.title.html("car racing game")
   this.button.mousePressed(()=>{
     player.name=this.input.value()
       this.input.hide()
       this.button.hide()
    this.greeting.html("hello "+ player.name)
    this.greeting.position(displayWidth/2-40, displayHeight/2-40)
    playerCount=playerCount+1
    player.index=playerCount
    player.update()
    player.updateCount(playerCount)
   })
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}