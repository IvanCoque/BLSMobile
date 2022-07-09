import React, { useState } from 'react'
import Constants from '../../../constants/constants'
import { GameEngine } from 'react-native-game-engine';
import { Alert, View } from 'react-native';
import { styles } from '../../../theme/appTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GradientBackground } from '../../../components/GradientBackground';
import { Head } from '../../../components/gameEngine/Entities/Head';
import { Gameloop } from '../../../components/gameEngine/GameLoop/Gameloop';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Food } from '../../../components/gameEngine/Entities/Food';
import { Tail } from '../../../components/gameEngine/Entities/Tail';
export const SecondGameLanguageScreen = () => {
    const [gameState, setGameState] = useState(true);
    const boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
    let engine: GameEngine | null = null;
    const onEvent = (e : any)=>{
        if(e.type === "game-over"){
            Alert.alert("PERDISTE JE JE")
            setGameState(false);
        }
    }
    const randomBetween = (min:number, max:number):number=>{
        return Math.floor(Math.random()*(max-min+1) +min);
    }
    return (
        <GradientBackground colors = {['white','#80aaff']}>
            <SafeAreaView style ={{
                    flex : 1, 
                    width : Constants.MAX_WIDTH,
                    height : Constants.MAX_HEIGHT ,
                    justifyContent : 'center',
                    alignItems : 'center'
                
                }}>
                <GameEngine
                    ref={(ref)=>engine=ref}
                    style = {{
                        width : boardSize,
                        height : boardSize+70,
                        flex : null||undefined,
                        backgroundColor : "rgba(255,255,255,0.7)",
                    }}
                    entities = {{
                        head : {
                            position : [0,0],
                            xspeed : 1,
                            yspeed : 0,
                            updateFrequency : 15, 
                            nextMove : 15,
                            size : Constants.CELL_SIZE,
                            side : "right",
                            renderer : <Head/>,
                            
                        },
                        food : {
                            position : [randomBetween(0, Constants.GRID_SIZE-1), randomBetween(0, Constants.GRID_SIZE-1)],
                            size : Constants.CELL_SIZE, 
                            renderer : <Food/>
                        },
                        tail : {
                            size : Constants.CELL_SIZE,
                            elements : [],
                            renderer : <Tail/>
                        }
                    }}
                    systems = {[
                        Gameloop
                    ]}
                    onEvent = {(e:any)=>onEvent(e)}
                    running= {gameState}
                />

                <View style={styles.controls}>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={()=>{(engine as any).dispatch({type:"move-up"})}}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={()=>{(engine as any).dispatch({type:"move-left"})}}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                        <View style={[styles.control, {backgroundColor : null||undefined}]}/>
                        <TouchableOpacity onPress={()=>{(engine as any).dispatch({type:"move-right"})}}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.controlRow}>
                        <TouchableOpacity onPress={()=>{(engine as any).dispatch({type:"move-down"})}}>
                            <View style={styles.control}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </GradientBackground>
    )
}
