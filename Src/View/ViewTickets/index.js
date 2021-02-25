import { Card, Container, Content, Drawer, Icon, } from 'native-base';
import React, { useRef, useReducer, useEffect } from 'react'
import { TextInput, View, Animated } from 'react-native';
import AppHeader from '../../Component/Header';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MediumHeading from '../../Component/MediumText';
import SmallText from '../../Component/SmallText';
import { useSelector, useDispatch } from "react-redux";
import ViewTicketCard from '../../Component/ViewTicketCard';
import InputField from '../../Component/InputField';
import { grey } from '../../Constant/Colors';
import { FlatList } from 'react-native';
let data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
]
function ViewTicket({ navigation }) {

    const user = useSelector(state => state.reducersHandler.userInfo);
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '', searchText: '', viewHeight: '',
        }
    )
    const { name, searchText, viewHeight, } = state

    const minScroll = 10;
    let scrollY = new Animated.Value(0)
    const clampedScrollY = scrollY.interpolate({
        inputRange: [minScroll, minScroll +1],
        outputRange: [0,1],
        extrapolateLeft: 'clamp',
      });

      const minusScrollY = Animated.multiply(clampedScrollY, -1);
      const translateY = Animated.diffClamp( minusScrollY, -(3*viewHeight) , 0,);
      
    useEffect(() => {

        updateState({
            name: user.user.name,
        })

    }, [])

    goBack = () => {
        navigation.pop()
    }
    rednerTickets = ({ item, index }) => {
        // console.log('index', index, 'item', item.id)
        return (
            <ViewTicketCard />
        )
    }

    return (
        <View style={styles.wraper}>
            <AppHeader
                body="View Ticket"
                leftIconName={'keyboard-backspace'}
                leftIconType={'MaterialIcons'}
                leftPress={() => { goBack() }}
            />
            <View style={styles.container}>
                <Animated.View
                    style={{
                        transform: [{ translateY: translateY }],
                        zIndex: 100,
                    }}>
                    <View style={styles.searchView}
                        onLayout={(event) => {
                            var { x, y, width, height } = event.nativeEvent.layout;
                            console.log('h', height)
                            updateState({ viewHeight: height })
                        }}>

                        <TextInput
                            placeholder={"Search"}
                            placeholderTextColor={grey}
                            onChangeText={(value) => updateState({ searchText: value })}
                            value={searchText}
                            style={styles.searchInput}
                        />
                        <Icon
                            name={'search1'}
                            type={'AntDesign'}
                            style={styles.iconStyle}
                        />
                    </View>
                </Animated.View>
                <Animated.FlatList
                    contentContainerStyle={[styles.flatlist, { paddingTop: Math.ceil(viewHeight + 20) }]}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={rednerTickets}
                    onScroll={(e) => {
                        scrollY.setValue(e.nativeEvent.contentOffset.y)
                    }}
                />

            </View>
        </View>
    )
}
export default ViewTicket;