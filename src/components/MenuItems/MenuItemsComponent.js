import React, {Component} from 'react';
import {View, SafeAreaView, TextInput,Text, TouchableOpacity, FlatList} from 'react-native';
import ElevatedView from 'react-native-elevated-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { filter, some, includes } from 'lodash/collection';
import { debounce } from 'lodash/function';
import * as Animatable from 'react-native-animatable';

import {AppHeader, ItemAdjustor} from '../reusables/commons';
import commonStyle from '../commonStyle';
import styles from './style';
import * as CONST from '../../util/Constants';
import scale, { verticalScale } from '../../util/scale';
import { getFormattedCurrency } from '../../util/common';
const MyBottomTouchableComponent = Animatable.createAnimatableComponent(TouchableOpacity);

export default class MenuItemsComponent extends Component {
    constructor (props) {
        super (props);
        this.state = {
            searchText: '',
            list: props.items
        }
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.items) {
            const {items} = nextProps;
            this.filterData(this.state.searchText, items);
           
        }
    }

    renderSearchBar () {
        return (
            <View style={{height: 60, paddingVertical: 10, backgroundColor: CONST.PRIMARY_COLOR, paddingHorizontal: 16}}>
                <ElevatedView elevation={5} style={{backgroundColor: CONST.WHITE_COLOR, borderRadius: 2, flex:1, flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity activeOpacity={1} style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='search' color={CONST.BLACK_COLOR} size={24} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <TextInput
                            autoCorrect={false}
                            underlineColorAndroid = {CONST.WHITE_COLOR}
                            style={{flex:1}}
                            onChangeText={this.filterData}
                            placeholder='Search' />
                    </View>
                    <TouchableOpacity style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='mic' size={24} color={CONST.BLACK_COLOR} />
                    </TouchableOpacity>
                </ElevatedView>              
            </View>
        )
    }

    getCorrectHeader () {
        return 'Starters'
    }

    renderItemCell = ({item}) => (
        <View style={{padding: scale(10), borderBottomColor: CONST.GREY_BORDER, flexDirection: 'row', borderBottomWidth: 1, }}>
            <View style={{ paddingTop: scale(3) }}>
                <View style={{ padding: scale(1), borderColor: item.veg ? 'green' : 'red', borderWidth: 0.5 }}>
                    <Icon name='brightness-1' color={item.veg ? 'green' : 'red'} size={10} />
                </View>
            </View>
            <View style={{ flex: 1, paddingLeft: scale(5) }}>
                <Text style={{fontWeight: 'bold', fontSize: scale(14)}}>{item.name}</Text>
                <Text style={{ fontSize: scale(12)}}>{item.description}</Text>
                
                <Text style={[styles.amountText, { textAlign: 'left', paddingTop: scale(5),  }]}>{getFormattedCurrency(item.cost)}</Text>
            </View>
            <View style={{ paddingLeft: scale(5), height: scale(40) }} >
                
                <ItemAdjustor
                    decreaseQuantity={() => this.props.removeItem (item)}
                    increaseQuantity={() => this.props.addItem(item)}
                    quantity={item.quantity} />
                
                <View style={{ paddingTop: scale(3), alignSelf: 'flex-end' }}>
                    <Text style={styles.amountText}>{getFormattedCurrency(item.quantity * item.cost)}</Text>
                </View>
            </View>
        </View>
    )

    renderContent () {
        return (
            <View style={{flex:1}}>
                <FlatList
                    renderItem = {this.renderItemCell}
                    data = { this.state.list}
                    extraData = {this.props.totalAmount} />
            </View>
        )
    }

    renderGoToCart (totalAmount, numberOfItems) {
        return (
            <MyBottomTouchableComponent
                animation = 'slideInUp'
                duration = {200}
                onPress = {() => this.props.navigateToCart()}
                style={{height: scale(50), paddingHorizontal: scale(10), backgroundColor: CONST.SECONDARY_COLOR, flexDirection: 'row'}}>

                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={{fontSize: scale(10),  color: CONST.WHITE_COLOR, paddingBottom: scale(5)}}>{numberOfItems} items in cart</Text>
                    <Text style={{fontSize: scale(14), fontWeight: 'bold', color: CONST.WHITE_COLOR}}>{getFormattedCurrency(totalAmount)} + Taxes</Text>
                </View>
                
                <View style={{height: scale(50), justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    <View style={{paddingHorizontal: scale(10)}}>
                        <Text style={{fontSize: scale(16), fontWeight: 'bold', color: CONST.WHITE_COLOR}}>View Cart</Text>
                    </View>
                    <View style={{height: scale(22), justifyContent: 'center', alignItems: 'center', width: scale(22), borderRadius: scale(14), backgroundColor: CONST.WHITE_COLOR}}>
                        <Icon name = 'arrow-forward' size={18} color={CONST.SECONDARY_COLOR} />
                    </View>
                </View>

            </MyBottomTouchableComponent>
        )
    }

    render () {
        const {toggleDrawer, type, totalAmount,numberOfItems} = this.props;
        return (
            <SafeAreaView style={commonStyle.safeAreaViewContainer}>
                <AppHeader
                    hasLeftComponent
                    leftIcon = 'menu'
                    leftOnPress ={() => toggleDrawer()}
                    title={this.getCorrectHeader()} />

                <View style={{flex:1, backgroundColor: CONST.WHITE_COLOR, }}>
                    {this.renderSearchBar()}
                    {this.renderContent()}
                    {totalAmount > 0 && this.renderGoToCart(totalAmount,numberOfItems)}
                </View>

            </SafeAreaView>
        )
    }

    filterData = (text, list = undefined) => {
        this.setState({ searchText: text });
        debounce(() => {
            // use internal search logic (depth first)!
            const results = this.internalSearch(text, list);
            this.setState({list: results});  
            
          }, 300)();
    }

    internalSearch = (input, list = undefined) => {
        //const {items} = this.props;
        let items = [];
        if (list) {
            items = list;
        } else {
            items = this.props.items;
        }
        if (input === '') {
            //return whole list.
            return items;
        }
        return filter(items, item => {
          return this.depthFirstSearch(item.name, item.description, input);
        });
      };
    
      depthFirstSearch = (value, label, input) => {
        // let's get recursive boi
        let type = typeof value;
        // base case(s)
        if (type === 'string' || type === 'number' || type === 'boolean' || type === Object) {
          return (
            includes(
                value.toString().toLowerCase(),
                input.toString().toLowerCase()
              ) || includes(
                label.toString().toLowerCase(),
                input.toString().toLowerCase()
              )
          )
        }
        return some(collection, item => this.depthFirstSearch(item, input));
      };
}