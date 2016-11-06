/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import OAuthSimple from 'oauthsimple';

class Search extends Component {

  state = {
    position: 'unknown'
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(

      (position) => {
        this.setState({position});
        console.log("position after setState: ", this.state.position)
      },
      
      (error) => alert(error),

      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

    );
  }

  fetchData() {
    var lat = this.state.position.coords.latitude;
    var long = this.state.position.coords.longitude;
    var latlong = "ll=" + String(lat) + "," + String(long)
    var oauth = new OAuthSimple(consumerKey, tokenSecret)
    var consumerKey = "***"
    var consumerSecret = "***"
    var tokenSecret = "***"
    var token = "***"

    var request = oauth.sign({
      action: "GET",
      path: "https://api.yelp.com/v2/search",
      parameters: "term=coffee&" + latlong,
      signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token, access_secret: tokenSecret}      
    })

    fetch(request.signed_url, {method: "GET"})
      .then((response) => {return response.json()})
        .then((data) => console.log(data))
          .catch((error) => console.log('error: ', error))
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.welcome}>
          Coffee Finder
        </Text>


        <TouchableOpacity style={{borderRadius: 7,padding: 10, backgroundColor: 'rgb(37, 160, 205)'}} onPress={this.fetchData.bind(this)}> 
          <Text style={{fontSize: 15}}>
            Find Coffee!
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = Search
