import * as BABYLON from "@babylonjs/core";
import { useEffect, useRef } from "react";
import "@babylonjs/loaders/glTF";

const Render = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        const engine = new BABYLON.Engine(canvas, true);
        const scene = createScene(engine, canvas);

        engine.runRenderLoop(() => {
            scene.render();
        });

        const resize = () => {
            engine.resize();
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            engine.dispose();
        };
    }, []);

    const createScene = (engine, canvas) => {
        const scene = new BABYLON.Scene(engine);

        var camera = new BABYLON.ArcRotateCamera("Camera", -(Math.PI / 2) + 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);
        camera.inputs.attached.mousewheel.detachControl(canvas);

        var dome = new BABYLON.PhotoDome(
            "",
            "/models/studio.jpg",
            {
                resolution: 32,
                size: 1000
            },
            scene
        );

        dome.imageMode = BABYLON.PhotoDome.MODE_SIDEBYSIDE;

        return scene;
    };

    return (
        <div style={{ position: "relative", background: 'rgba(0, 0, 0, 1)' }}>
            <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh", outline: "none", backgroundColor: "#fff" }} />
        </div>
    );
};

export default Render;





