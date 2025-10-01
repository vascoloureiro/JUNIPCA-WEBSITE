import { Text } from "@react-three/drei";

export default function TextSection({titulo, subtitulo, ...props}){

    return(<>
   <group {...props}>
        {!!titulo && 
        <Text
          color="black"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.22}
          lineHeight={2}
          maxWidth={2.5}

        >
           {titulo}
        </Text> } 
        
        <Text
          color="black"
          anchorX={"left"}
          anchorY="top"
          fontSize={0.12}
          maxWidth={2.}
        >
         {subtitulo}
        </Text>
    
    </group>


    </>)
}