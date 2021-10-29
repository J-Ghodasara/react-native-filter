import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export const iconList = {
    MaterialCommunityIcons: 'MaterialCommunityIcons',
    Ionicons: 'Ionicons',
    Feather: 'Feather',
    FontAwesome5: 'FontAwesome5',
    FontAwesome: 'FontAwesome',
    AntDesign: 'AntDesign',
    Entypo: 'Entypo',
    MaterialIcons: 'MaterialIcons',
    SimpleLineIcons: 'SimpleLineIcons',
}

const Icons = (props) => {
    return (
        <>
            {props.icon === iconList.MaterialCommunityIcons &&
                <MaterialCommunityIcons name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.Ionicons &&
                <Ionicons name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.Feather &&
                <Feather name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.FontAwesome5 &&
                <FontAwesome5 name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.FontAwesome &&
                <FontAwesome name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.AntDesign &&
                <AntDesign name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.Entypo &&
                <Entypo name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.icon === iconList.MaterialIcons &&
                <MaterialIcons name={props.name} size={props.size || 24} color={props.color} />
            }
            {props.Icon === iconList.SimpleLineIcons &&
                <SimpleLineIcons name={props.name} size={props.size || 24} color={props.color} />
            }
        </>
    )
}

export default Icons