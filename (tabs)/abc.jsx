import { useState } from "react";
import { View, Text, onPress, TouchableOpacity, Button } from 'react-native'

const CounterButton = () => {
   const [count,setCount]= useState(9); 
   return(
        
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Ban da bam{count} lan</Text>
    <Button
        onPress={() => 
            setCount(count+1)    
        }
        title="Press Me"
    />
    <Button
        onPress={()=>
            setCount(0)
        }
        title="Reset"
    />
    </View>);
};
export default CounterButton;
