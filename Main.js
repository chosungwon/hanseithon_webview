import React, {Fragment} from 'react';
import {StyleSheet, Text, View, WebView, StatusBar, ScrollView, Dimensions, TouchableOpacity, TextInput, Platform} from 'react-native';

const {height, width} = Dimensions.get('window')

export default class Main extends React.Component {
    static navigationOptions = {
        header: null
    }
    state = {
        click: false,
        infomation: [
            [
                a = {
                    id: 1,

                    spring_name: "용터약수터",

                    location_house_address: "충청북도 제천시 의암동 산 15-7",

                    latitude: "37.171530",

                    hardness: "128.207600",

                    designated_date: "1996-02-01",

                    average_daily_use: 80,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                b = {

                    id: 2,

                    spring_name: "사찰약수터",

                    location_house_address: "충청북도 제천시 의암동 산 29",

                    latitude: "37.1733151",

                    hardness: "128.2135772",

                    designated_date: "1997-09-09",

                    average_daily_use: 100,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 3,

                    spring_name: "하소약수터",

                    location_house_address: "충청북도 제천시 하소동 산 17-7",

                    latitude: "37.1422720289",

                    hardness: "128.188961305",

                    designated_date: "1996-02-01",

                    average_daily_use: 350,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 4,

                    spring_name: "등너머약수터",

                    location_house_address: "충청북도 제천시 천남동 산 8-77",

                    latitude: "37.139930",

                    hardness: "128.181300",

                    designated_date: "1996-02-01",

                    average_daily_use: 150,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 5,

                    spring_name: "몽암사약수터",

                    location_house_address: "충청북도 제천시 강제동 산 36-23",

                    latitude: "37.115740",

                    hardness: "128.189700",

                    designated_date: "1996-02-01",

                    average_daily_use: 50,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 6,

                    spring_name: "피재골약수터",

                    location_house_address: "충청북도 제천시 모산동 산 2-1",

                    latitude: "37.1930929398",

                    hardness: "128.191762529",

                    designated_date: "1999-04-20",

                    average_daily_use: 300,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 7,

                    spring_name: "포전약수터",

                    location_house_address: "충청북도 제천시 송학면 포전리 산 81",

                    latitude: "37.191360",

                    hardness: "128.231800",

                    designated_date: "1999-07-05",

                    average_daily_use: 40,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 8,

                    spring_name: "구룡약수터",

                    location_house_address: "충청북도 제천시 금성면 구룡리 432",

                    latitude: "37.071720",

                    hardness: "128.172100",

                    designated_date: "2009-12-16",

                    average_daily_use: 50,

                    water_quality_date: "2016-11-14",

                    quality_result_division: true,

                    agency_number: "043-641-3704",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 9,

                    spring_name: "송 천",

                    location_house_address: "경기도 양주시 은현면 하패리 산131",

                    latitude: "37.878668",

                    hardness: "127.043671",

                    designated_date: "2005-09-13",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 10,

                    spring_name: "도락산",

                    location_house_address: "경기도 양주시 은현면 용암리 산83-1",

                    latitude: "37.841274",

                    hardness: "127.028077",

                    designated_date: "2005-09-13",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 11,

                    spring_name: "사리산",

                    location_house_address: "경기도 양주시 남면 신산리 산1-1",

                    latitude: "37.905165",

                    hardness: "126.971521",

                    designated_date: "1997-12-15",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: false,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 12,

                    spring_name: "흥덕사",

                    location_house_address: "경기도 양주시 남면 구암리 6-1",

                    latitude: "37.882602",

                    hardness: "126.986033",

                    designated_date: "2002-12-10",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: false,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 13,

                    spring_name: "감악산",

                    location_house_address: "경기도 양주시 남면 신암리 산35-2",

                    latitude: "37.928797",

                    hardness: "126.965832",

                    designated_date: "2005-11-07",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 14,

                    spring_name: "천주교묘지",

                    location_house_address: "경기도 양주시 장흥면 울대리 산23-1",

                    latitude: "37.735948",

                    hardness: "126.999667",

                    designated_date: "2002-12-10",

                    average_daily_use: 30,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 15,

                    spring_name: "독정골",

                    location_house_address: "경기도 양주시 장흥면 삼하리 산97-1",

                    latitude: "37.670093",

                    hardness: "126.913742",

                    designated_date: "2005-09-13",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 16,

                    spring_name: "훈련장",

                    location_house_address: "경기도 양주시 광적면 효촌리 산116-3",

                    latitude: "37.884887",

                    hardness: "126.951679",

                    designated_date: "1996-01-31",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-01",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 17,

                    spring_name: "새낭골(위)",

                    location_house_address: "경기도 양주시 광적면 가납리 산70",

                    latitude: "37.819754",

                    hardness: "127.003761",

                    designated_date: "2007-01-03",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-06",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 18,

                    spring_name: "고덕배수지",

                    location_house_address: "경기도 양주시 고암동 산67-1",

                    latitude: "37.812836",

                    hardness: "127.068824",

                    designated_date: "2008-12-24",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-02",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 19,

                    spring_name: "천보산",

                    location_house_address: "경기도 양주시 광사동 산140-3",

                    latitude: "37.771336",

                    hardness: "127.073847",

                    designated_date: "2002-12-10",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-02",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                },

                {

                    id: 20,

                    spring_name: "작은산대",

                    location_house_address: "경기도 양주시 산북동 산53-10",

                    latitude: "37.799798",

                    hardness: "127.041528",

                    designated_date: "2002-12-10",

                    average_daily_use: 50,

                    water_quality_date: "2017-11-02",

                    quality_result_division: true,

                    agency_number: "031-8082-6832",

                    date_of_data_reference: "2018-02-19"

                }

            ]
        ]
    }

    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(
    //         position => {
    //             console.log(position.coords.latitude, position.coords.longitude)
    //         },
    //         error => {
    //             this.setState({
    //                 error: '위치정보를 받아오는데 실패하였습니다'
    //             })
    //         }
    //     )
    // }

    render() {
        return (
            <Fragment>
            <StatusBar hidden={true}/>
            <WebView
                source={{uri: 'http://192.168.0.44:3000/'}}
            />
            </Fragment>
        )
    }
    _go = () => {
        this.setState({
            click: true
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#272e71'
    },
    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 50,
        fontWeight: '200',
        marginBottom: 30
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        width: width - 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(50, 50, 50)', //그림자 색상
                shadowOpacity: 0.5, //그림자 투명도
                shadowRadius: 10, //그림자 범위
                shadowOffset: {  //그림자 요소에따라 높이 넓이
                    height: -1,
                    width: 0
                }
            },
            android: {
                elevation: 3
            }
        })
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 25
    },
    toDos: {
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width / 2,
    },
    circle1:{
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 3,
        backgroundColor: 'red',
        borderColor:'red',
        marginLeft: 10
    },
    circle2:{
        width: 25,
        height: 25,
        borderRadius: 15,
        borderWidth: 3,
        backgroundColor: 'green',
        borderColor:'green',
        marginLeft: 10
    },
    map:{
            width: 40,
            height: 40,
            borderRadius: 5,
            borderWidth: 3,
            backgroundColor: 'green',
            borderColor:'green',
            marginLeft: 180
    }
});