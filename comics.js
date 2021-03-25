AFRAME.registerComponent('comic',{
    init: function(){
        this.placesContainer = this.el;
        this.createCards()
    },
    
    createCards: function(){
        const thumbnailRef = [
            {
                id: 'spider_man',
                title: 'Spider Man',
                url: './assets/thumbnails/spiderMan.jpg'
            },
            {
                id: 'super_man',
                title: 'Super Man',
                url: './assets/thumbnails/superMan.jpeg'
            },
            {
                id: 'pessadilas',
                title: 'Pessadilas',
                url: './assets/thumbnails/something.jpg'
            },
            {
                id: 'science_fiction',
                title: 'The Golden Age',
                url: './assets/thumbnails/something1.jpeg'
            }
        ]

        var previousXposition = -60;
        var previousXposition1 = -50;
        for (var item of thumbnailRef){
            const posX = previousXposition + 25;
            const posY = 40;
            const posZ = -40;
            
            const position = {x: posX, y: posY, z: posZ};
            previousXposition = posX;

            const posx = previousXposition1 + 20;
            const posy = 40;
            const posz = -40;
            
            const Position = {x: posx, y: posy, z: posz};
            previousXposition1 = posx;
            

            const borderEl = this.createBorder(position, item.id);

            const thumbNail = this.createThumbnail(item);
            borderEl.appendChild(thumbNail);
      
            const titleEl = this.createTitleEl(Position, item);
            borderEl.appendChild(titleEl);
      
            this.placesContainer.appendChild(borderEl);
        }
    },

    createBorder: function(position, id){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('id', id);
        entityEl.setAttribute('visible', true);
        entityEl.setAttribute('geometry',{
            primitive: 'ring',
            radiusInner: 9,
            radiusOuter: 10
        });
        entityEl.setAttribute('position', position);
        entityEl.setAttribute('material',{color: 'white'});
        return entityEl
    },

    createThumbnail: function(item){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('visible', true);
        entityEl.setAttribute('geometry',{
            primitive: 'circle',
            radius: 9
        });
        entityEl.setAttribute('material',{src: item.url});
        return entityEl
    },

    createTitleEl: function(position, item){
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('text', {
            font: 'exo2bold',
            align: 'center',
            width: 70,
            color: '#e65100',
            value: item.title
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
    }
});