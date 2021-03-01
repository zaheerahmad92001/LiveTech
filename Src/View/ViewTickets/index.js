import { Icon, } from 'native-base';
import React, { useRef, useReducer, useEffect } from 'react'
import { TextInput, View, Animated, ActivityIndicator, RefreshControl } from 'react-native';
import AppHeader from '../../Component/Header';
import styles from './styles';
import { useSelector, useDispatch } from "react-redux";
import ViewTicketCard from '../../Component/ViewTicketCard';
import { darkBlue, grey } from '../../Constant/Colors';
import { BaseUrl } from '../../Constant/serverConfig';
import ViewTicketModal from '../../Utils/Modal/M_VeiwTicket';


function ViewTicket({ navigation }) {

    const user = useSelector(state => state.reducersHandler.userInfo);
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            name: '', searchText: '', viewHeight: '', tickets: '', loading: false,
            refreshing: false,
        }
    )
    const { name, searchText, viewHeight, tickets, loading, refreshing } = state

    const minScroll = 10;
    let scrollY = new Animated.Value(0)
    const clampedScrollY = scrollY.interpolate({
        inputRange: [minScroll, minScroll + 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
    });

    const minusScrollY = Animated.multiply(clampedScrollY, -1);
    const translateY = Animated.diffClamp(minusScrollY, -(3 * viewHeight), 0,);

    useEffect(() => {

        updateState({
            name: user.user.name,
        })
        updateState({ loading: true })
        ticketsList()

    }, [])

    goBack = () => {
        navigation.pop()
    }

    ticketsList = async () => {
        // updateState({loader:true,refreshing:true})
        let URL = `${BaseUrl}tickets`
        await ViewTicketModal.tickets(URL).then((response) => {
            if (response.success) {
                updateState({ tickets: response.data, loading: false, refreshing: false })
            } else {
                console.log('somthing went wrong in AllTickets', response)
            }
        }).catch((error) => {
            console.log('error in Tickets', error)
        })
    }
    onRefresh = () => {
        updateState({ refreshing: true })
        ticketsList()
    }

    rednerTickets = ({ item, index }) => {
        // console.log('index', index, 'item', item.id)
        return (
            <ViewTicketCard
             item={item}
            />
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
                {loading ?
                    <ActivityIndicator
                        style={{ justifyContent: 'center', alignItems: "center", flex: 1 }}
                        color={darkBlue}
                        size={'small'}
                    /> :
                    <Animated.FlatList
                        contentContainerStyle={[styles.flatlist, { paddingTop: Math.ceil(viewHeight + 20), }]}
                        showsVerticalScrollIndicator={false}
                        data={tickets}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        keyExtractor={(item) => item.id+'A'}
                        renderItem={rednerTickets}
                        onScroll={(e) => {
                            scrollY.setValue(e.nativeEvent.contentOffset.y)
                        }}
                    />
                }

            </View>
        </View>
    )
}
export default ViewTicket;