import React, { Component } from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, ListView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { HISTORY } from '../shared/history';
import { ListItem } from 'react-native-elements'
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return {
        leaders: state.leaders
    }
}

function RenderInfo(props) {
    const item = props.item;
            return (
                <Card title={item.name}
                    image={require('./images/pic.png') }
                >
                <Text style={{ margin: 10 }}>
                    {item.description}
                    </Text>

            </Card>
        );
        
}
   

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: HISTORY
        }
    }
        
    static navigationOptions = {
        title: 'About Us'
    };
    render() {

        const Id = this.props.navigation.getParam('Id', '')
        const renderLeader = ({ item, index }) => {

            return (
                <ListItem
                    key={index}
                    title={item.name}
                    hideChevron={true}
                    subtitle={item.description}
                    leftAvatar={{ source: { uri: baseUrl + item.image } }}
                />
            );
        }

        if (this.props.leaders.isLoading) {
            return (
                <ScrollView>
                    <RenderInfo
                        item={this.state.history[+Id]}
                    />
                    <Card title="Our Leadership">
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        else if (this.props.leaders.errMess) {
            return (
                <ScrollView>
                    <RenderInfo
                        item={this.state.history[+Id]}
                    />
                    <Card title="Our Leadership">
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        else {
            return (
                <ScrollView>
                    <RenderInfo
                        item={this.state.history[+Id]}
                    />
                    <Card title="Our Leadership">
                        <FlatList
                            data={this.props.leaders.leaders}
                            renderItem={renderLeader}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                </ScrollView>
            );
        }
        
    }

}

export default connect(mapStateToProps)(AboutUs);