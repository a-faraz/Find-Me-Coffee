import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Linking,
  TouchableOpacity
} from 'react-native';

class Results extends Component {

	constructor(props) {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			results: ds.cloneWithRows(props.data.businesses)
		}
	}

	render() {

		return (

		);
	}

}

const styles = StyleSheet.create({

});

module.exports = Results