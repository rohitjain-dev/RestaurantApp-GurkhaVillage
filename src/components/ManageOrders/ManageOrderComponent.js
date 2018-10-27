import React, {Component} from 'react';
import {View, SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import commonStyle from '../commonStyle';
import { AppHeader } from '../reusables/commons';
import { WHITE_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, GREY_BORDER, GREY_COLOR, EXTRA_LIGHT_GREY } from '../../util/Constants';
import scale, { verticalScale } from '../../util/scale';
import actualDimensions from '../../util/Device';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MANAGE_ORDERS } from '../../util/FakeData';
const {width} = actualDimensions;
const tabWidth = (width/3);
const tabs = [
    {id: 1, text: 'New Orders'},
    {id: 2, text: 'Past Orders'},
    {id: 3, text: 'Confirmed Orders'}
]

class ManageOrderComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            currentTab: 1,
        }
    };

    renderTopTabs () {
        return (
            <View style={{height: verticalScale(30), backgroundColor: PRIMARY_COLOR}}>
                <FlatList
                    showsHorizontalScrollIndicator = {false}
                    horizontal
                    bounces = {false}
                    data ={tabs}
                    renderItem = {({item}) => this.renderListTab(item)}
                    extraData = {this.state.currentTab} />
                </View>
        )
    }

    renderListTab (item) {
        return (
            <TouchableOpacity onPress={() => this.setState({currentTab: item.id})} style={{flex:1, paddingHorizontal: scale(20), borderBottomWidth: 3, borderBottomColor: this.state.currentTab === item.id ? WHITE_COLOR: PRIMARY_COLOR}}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 14, color: this.state.currentTab === item.id ?  WHITE_COLOR : SECONDARY_COLOR, fontWeight: 'bold'}}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderOrderItem = (item) => {
       return (
           <View style={{ padding: scale(10), borderBottomColor: EXTRA_LIGHT_GREY, borderBottomWidth: 0.2, }}>
               <Text style={{ fontSize: 14, paddingBottom: 3, fontWeight: 'bold' }}>{item.name}</Text>
               <Text style={{ fontSize: 12 }}>{item.shortDescription}</Text>
               <View style={{ paddingTop: verticalScale(5), justifyContent: 'space-between', flexDirection: 'row' }}>
                   <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                       <Icon name='access-time' color={PRIMARY_COLOR} size={16} />
                       <Text style={{paddingLeft: 5,}} >08:08:12</Text>
                   </View>
                   <View style={{ flexDirection: 'row' }}>
                       <TouchableOpacity style={{ padding: 5, marginRight: 5, backgroundColor: PRIMARY_COLOR }} onPress={() => console.log('')}>
                           <Text style={{color: WHITE_COLOR}}>ACCEPT</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{ padding: 5, backgroundColor: WHITE_COLOR, borderColor: PRIMARY_COLOR, borderWidth: 1 }} onPress={() => console.log('')}>
                           <Text>REJECT</Text>
                       </TouchableOpacity>
                   </View>
               </View>
           </View>
       )
    }

    renderPastList () {
        return (
          <View style={{flex:1}}>
                <FlatList
                    data = {MANAGE_ORDERS}
                    showsVerticalScrollIndicator ={false}
                    renderItem = {({item}) => this.renderOrderItem(item)}
                    extraData = {this.state} />
          </View>
        )
    }

    


    renderInputView () {
        return (
            <View style={{flex:1, backgroundColor: WHITE_COLOR}} >
                 {this.renderTopTabs()}
                {this.renderPastList()}
            </View>
        )
    }

    render () {
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    title = 'Orders'
                    leftIcon = 'menu'
                    hasLeftComponent
                    leftOnPress = {() =>this.props.toggleDrawer()}/>
                {this.renderInputView()}
            </SafeAreaView>
        )
    }
}

export default ManageOrderComponent;