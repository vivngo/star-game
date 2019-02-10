'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroAnimations,
  Viro3DObject,
  ViroLightingEnvironment,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroSphere,
  ViroSpotLight,
  ViroQuad,
} from 'react-viro';

var createReactClass = require('create-react-class');


var ARCarDemo = createReactClass({
  getInitialState() {
    return {
      texture: "white",
      playAnim: false,
      animateCar: false,
      tapWhite: false,
      tapBlue: false,
      tapGrey: false,
      tapRed: false,
      tapYellow: false,
      rotationPiv: [0,0,0],
      orbitAnim: false
    }
  },
              // sphere 1
              // onClick={this._selectGrey}
              // animation={{name:"tapAnimation", run:this.state.tapGrey, onFinish:this._animateFinished}}
              // 
              // sphere 2
              // animation={{name:"orbit", run:true, loop:true}}


            // <ViroSphere materials={["blue_sphere"]}
            //   heightSegmentCount={20} widthSegmentCount={20} radius={.07}
            //   position={[0, -0.5, 0]}
            //   shadowCastingBitMask={0} />

            // <ViroSphere materials={["red_sphere"]}
            //   heightSegmentCount={20} widthSegmentCount={20} radius={.07}
            //   position={[-0.5, 0, 0]}
            //   shadowCastingBitMask={0} />
  render: function() {
    return (
      <ViroARScene>

        <ViroLightingEnvironment source={require('./res/tesla/garage_1k.hdr')}/>

<<<<<<< HEAD
        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} onAnchorUpdated={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:"scaleSphereUp", run:this.state.animateCar,}}>
||||||| merged common ancestors
        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <ViroNode scale={[0, 0, 0]} transformBehaviors={["billboardY"]} animation={{name:"scaleSphereUp", run:this.state.animateCar,}}>
=======
        <ViroARImageMarker target={"logo"} onAnchorFound={this._onAnchorFound} pauseUpdates={this.state.pauseUpdates}>
          <ViroNode scale={[0, 0, 0]} rotationPivot={this.state.rotationPiv} transformBehaviors={["billboardY"]} animation={{name:"scaleSphereUp", run:this.state.animateCar,}}>
>>>>>>> 15b04e76ab0d49bf296850b4e9d8755c981a92f2
            <ViroSphere materials={["yellow_sphere"]}
              heightSegmentCount={20} widthSegmentCount={20} radius={.1}
              position={[0, 0, 0]}
              shadowCastingBitMask={0} />

<<<<<<< HEAD
            <ViroSphere materials={["blue_sphere"]}
              heightSegmentCount={20} widthSegmentCount={20} radius={.03}
              position={[0, -.1, 0]}
              animation={{name:"orbit", run:true, loop:true}}
||||||| merged common ancestors
            <ViroSphere materials={["blue_sphere"]}
              heightSegmentCount={20} widthSegmentCount={20} radius={.005}
              position={[0, -.1, 0]}
              animation={{name:"orbit", run:true, loop:true}}
=======
            <ViroSphere materials={["white_sphere"]}
              heightSegmentCount={20} widthSegmentCount={20} radius={.07}
              position={[0, 0, -0.5]}
              animation={{name:"orbit", run:this.state.orbitAnim, loop:true}}
>>>>>>> 15b04e76ab0d49bf296850b4e9d8755c981a92f2
              shadowCastingBitMask={0} />
          </ViroNode>
        </ViroARImageMarker>
      </ViroARScene>
    );
  },
<<<<<<< HEAD
  _onAnchorFound(anchorMap) {
||||||| merged common ancestors
  _onAnchorFound() {
=======
  _onAnchorFound(anchor) {
>>>>>>> 15b04e76ab0d49bf296850b4e9d8755c981a92f2
    this.setState({
      animateCar: true,
<<<<<<< HEAD
    });
    console.log('x:' + anchorMap.position[0]);
    console.log('y:' + anchorMap.position[1]);
    console.log('z:' + anchorMap.position[2]);
||||||| merged common ancestors
    })
=======
      rotationPiv: anchor.position,
      orbitAnim: true
    })

    console.log('hi')
    console.log(anchor)
>>>>>>> 15b04e76ab0d49bf296850b4e9d8755c981a92f2
  },
});

ViroMaterials.createMaterials({
  white_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(231,231,231)",
  },
  blue_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(19,42,143)",
  },
  grey_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(75,76,79)",
  },
  red_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(168,0,0)",
  },
  yellow_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(200,142,31)",
  },
});

ViroARTrackingTargets.createTargets({
  "logo" : {
    source : require('./res/logo.png'),
    orientation : "Up",
<<<<<<< HEAD
    physicalWidth : 0.1 // real world width in meters
  }
||||||| merged common ancestors
    physicalWidth : 0.165 // real world width in meters
  }
=======
    physicalWidth : 0.150 // real world width in meters
  },
  "poster" : {
    source : require('./res/blackpanther.jpg'),
    orientation : "Up",
    physicalWidth : 0.6096 // real world width in meters
  },
  "lettera" : {
    source : require('./res/letterA.png'),
    orientation : "Up",
    physicalWidth : 0.1 // real world width in meters
  },
>>>>>>> 15b04e76ab0d49bf296850b4e9d8755c981a92f2
});

ViroAnimations.registerAnimations({
    orbit:{properties:{rotateY:"+=45"},
                  duration:1000}, //add 45 degrees to the y angle of the component every 1 second
    scaleUp:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 500, easing: "bounce"},
    scaleDown:{properties:{scaleX:0, scaleY:0, scaleZ:0,},
                  duration: 200,},
    scaleSphereUp:{properties:{scaleX:.8, scaleY:.8, scaleZ:.8,},
                  duration: 50, easing: "easeineaseout"},
    scaleSphereDown:{properties:{scaleX:1, scaleY:1, scaleZ:1,},
                  duration: 50, easing: "easeineaseout"},
    tapAnimation:[["scaleSphereUp", "scaleSphereDown"],]
});

module.exports = ARCarDemo;
