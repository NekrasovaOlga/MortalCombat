(() => {
    const arena=document.querySelector('.arenas');	
    let player1 = {
        name: 'Harli',
        hp: 100,
        img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
        weapon: [],
        attack: function(){
            console.log(personOne.name + " Fight..." )
        }
    }
    let player2 = {
        name: 'Genry',
        hp: 50,
        img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
        weapon: [],
        attack: function(){
            console.log(personOne.name + " Fight..." )
        }
    }
    function createPlayer(namePlayer, event){
       		
        let player1 = document.createElement('div')
        player1.className = namePlayer
        arena.appendChild(player1)

        let progressbar = document.createElement('div')
        progressbar.className = 'progressbar'
        player1.append(progressbar)

        let life = document.createElement('div')
        life.className = 'life'
        life.style = `width: ${event.hp}%`
        progressbar.append(life)

        let name = document.createElement('div')
        name.className = 'name'
        name.innerText = event.name
        progressbar.append(name)

        let character = document.createElement('div')
        character.className = 'character'
        player1.append(character)

        let imagesPlayer = document.createElement('img')
        imagesPlayer.className = 'images_player'
        imagesPlayer.src = `${event.img}`
        character.append(imagesPlayer)
    }


    createPlayer('player1', player1);
    createPlayer('player2', player2); 
})();