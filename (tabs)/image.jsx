import {View,Text,TouchableOpacity,} from 'react-native';
const ProfileCard =(props)=>{
       return(
       <View style={props.phongcach}>
            <Text style={props.mauchu}>
                Tên của tôi là:{props.ten}         
            </Text>
            <Text style={props.mauchu}>
                Tuổi của tôi là:{props.age}
            </Text>
        </View>
       );
}
const data=[
    {name:'Minh',colortext:"yellow",maunen:"red"},
    {name:'Nammmm',colortext:"black",maunen:"blue"},
    {name:'Hiennnnn',colortext:"green",maunen:"yellow"}
];
const App=()=>{
return(
    <View style={{flexDirection:'column',flex:1}}>
    {data.map(item=>(
         <ProfileCard
            ten={item.name}
            age= {21}
            mauchu={{color:item.colortext}}
            phongcach={{
                backgroundColor:item.maunen,
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        />
     
))}
      </View>
        
    );
}



export default App;