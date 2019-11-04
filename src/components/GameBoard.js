import React, { Component } from 'react';
import Square from './Square';
import StartButton from './StartButton';
import './GameBoard.scss';

class GameBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            colors: {
                     1:'red',
                     2:'blue',
                     3:'green',
                     4:'yellow' 
                    },
            store: []
        }
    }
    randomColorSelection(colors) {
        let keys = Object.keys(colors);
        while(this.state.store.length <= 4) {
            var color = colors[keys[ keys.length * Math.random() << 0]];
            console.log(color);
            if(this.state.store.indexOf(color) === -1) 
            this.setState({store: this.state.store.push(color)});
        }
        //for(var j, x, i = keys.length; i; j = parseInt(Math.random() * i), x = keys[--i], keys[i] = keys[j], keys[j] = x);
        // for (let i=keys.length; i--;) {
        //     var color =  colors[keys.splice(Math.floor(Math.random() * (i + 1)), 1)[0]];
        // }s
        // let color = colors[keys[ keys.length * Math.random() << 0]];
        console.log(this.state.store);
        return colors;
    }
    startGame() {
        let counter = 1;
        setInterval(()=>{
            if(counter <=4 ){
                this.randomColorSelection(this.state.colors);
                counter++;
            }
        }, 750);
        }
    render() {
        return (
        <div className="board">
            <Square className="bigSquare"/>
            <div className="playBox">
                <span className="firstRow">
                    <Square className="redBox smallSquare"/>
                    <Square className="blueBox smallSquare"/> 
                </span>
                <span className="secondRow">
                    <Square className="greenBox smallSquare"/>
                    <Square className="yellowBox smallSquare"/>
                </span>
            </div>
            <StartButton className="start" value="Start the Game" onClick={() => this.startGame()}/>
        </div>
        )
    }
}
export default GameBoard