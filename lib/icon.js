import fs from 'fs'
import path from 'path'

const iconsDir=path.join(process.cwd(),'images')
export const  getIcons=()=>{
    const iconFileNames=fs.readdirSync(iconsDir);
    const iconsData=iconFileNames.map(iconFileName=>{
        const fullIconPath=path.join(iconsDir,iconFileName);
        const iconContent=fs.readFileSync(fullIconPath,'utf8')
        return{
            iconName:iconFileName.replace(/\.txt$/,''),
            iconContent,
        }
    })
    return iconsData;
}