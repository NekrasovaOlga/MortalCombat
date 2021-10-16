(() => {
    const arena=document.querySelector('.arenas');	
    let randowbtn = document.querySelector('.control .button')
    let player1 = {
        player: '1',
        name: 'Harli',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack: function(){
            console.log(personOne.name + " Fight..." )
        }
    }
    let player2 = {
        player: '2',
        name: 'Genry',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        weapon: [],
        attack: function(){
            console.log(personOne.name + " Fight..." )
        }
    }

    function createElement(tag, className){
        let $tag= document.createElement(tag)
        $tag.classList.add(className)

        return $tag
    }
    function createPlayer(namePlayer){
        
        let player = createElement('div', `player${namePlayer.player}`)
        let progressbar = createElement('div', 'progressbar')	
        let life = createElement('div', 'life')	
        let name = createElement('div', 'name')	
        let character = createElement('div', 'character')	
        let imagesPlayer = createElement('img', 'images_player')

        life.style = `width: ${namePlayer.hp}%`
        name.innerText = namePlayer.name
        imagesPlayer.src = `${namePlayer.img}`

        player.append(progressbar)
        progressbar.append(life)
        progressbar.append(name)
        player.append(character)
        character.append(imagesPlayer)
        arena.appendChild(player)	


        return player
    }
    function mathRandom( min = 1, max = 20){
        return Math.floor(Math.random() * (max - min + 1) )
    }

    function winner(player){
        randowbtn.disabled = true
        randowbtn.style.display = 'none'

        const titleWin = createElement('div', 'titleWin')	
        titleWin.innerText = `${player.name} YOU WIN`
        arena.appendChild(titleWin)
        
    }

    function hpPlayer(player){
        let hp = document.querySelector(`.player${player.player} .life`)
        player.hp -= mathRandom();
        if (player.hp <= 0){
            hp.style.width = '0px'
            if (player.player === player1.player){
                return  winner(player2) 
             
            } 
            winner(player1)
           
           
        } else{
            hp.style.width = player.hp + '%'
        }
        
    }

    randowbtn.addEventListener('click', () =>{
        hpPlayer(player1)
        hpPlayer(player2)
    })

    arena.appendChild(createPlayer(player1))	
    arena.appendChild(createPlayer(player2))	
     
})();
