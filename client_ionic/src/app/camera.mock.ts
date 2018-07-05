import { Camera, CameraOptions  } from '@ionic-native/camera';

export class CameraMock extends Camera {
    getPicture(options){
        return new Promise((resolve, reject) => {
            
        })
    }
}