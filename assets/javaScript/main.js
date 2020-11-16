let coin = {
    state: 0,       
   flip: function() {
        this.state = Math.floor(Math.random() * 2);

        return this.state;
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state == 0) {
            return 'head' 
        }
        else {
            return 'Tail'
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let images = document.createElement('img');
        
        if (this.state==0){
            images.src = './assets/images/head.jpg'
        }
        else {
            images.src = './assets/images/Tail.jpg'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return images;
    },
    
};

function display20flips() {
    for (let i =0; i  <=20; i++){
        let newDiv = document.createElement('div');
        newDiv.append(coin.toString());
        document.body.append(newDiv);
        coin.flip()

    }

}
display20flips()

function display20images() {
    for (let i =0; i  <=20; i++){
        let newDiv = document.createElement('div');
        newDiv.append(coin.toHTML());
        document.body.append(newDiv);
        coin.flip()

    }

}
display20images()


console.log (coin.flip());
console.log (coin.toString());
console.log (coin.toHTML());
let container = document.createElement('div');
container.append(coin.toHTML());
document.body.append(container);





