import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { FILE } from '@/app/dashboard/_components/FileList';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function Canvas({onSaveTrigger,fileId,fileData}:{onSaveTrigger:any,fileId:any,fileData:FILE}) {

    const [whiteBoardData,setWhiteBoardData]=useState<any>();
    const updateWhiteBoard=useMutation(api.files.updateWhiteboard);
    useEffect(()=>{
        onSaveTrigger&&saveWhiteboard();
    },[onSaveTrigger])
    const saveWhiteboard=()=>{
        updateWhiteBoard({
            _id:fileId,
            whiteboard:JSON.stringify(whiteBoardData)
        }).then(resp=>console.log(resp))
    }
  return (
    <div style={{ height: "620px" }}>
        {fileData&&<Excalidraw 
        initialData={{
            elements:fileData?.whiteboard&&JSON.parse(fileData.whiteboard)
        }}
        onChange={(excalidrawElements, appState, files)=>setWhiteBoardData(excalidrawElements)}
        UIOptions={{
            canvasActions:{
                saveToActiveFile:false,
                loadScene:false,
                export:false,
                toggleTheme:false
            }
        }}
        >
            <MainMenu>
                <MainMenu.DefaultItems.ClearCanvas/>
                <MainMenu.DefaultItems.SaveAsImage/>
                <MainMenu.DefaultItems.ChangeCanvasBackground/>
            </MainMenu>
            <WelcomeScreen>
                <WelcomeScreen.Hints.MenuHint/>
                <WelcomeScreen.Hints.MenuHint/>
                <WelcomeScreen.Hints.ToolbarHint/>
                <WelcomeScreen.Hints.HelpHint/>
                
            </WelcomeScreen>
        </Excalidraw>}
      </div>
  )
}

export default Canvas