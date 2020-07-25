import React from 'react';
import {View, StatusBar, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Navbar from '../Navbar';
import TrackLabel from '../shared/TrackLabel';

function Home() {
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#1B0536" />
      <ScrollView
        style={styles.wrapper}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}>
        <View style={{paddingTop: 10}}>
          <Text style={styles.labelText}>Recommended For You</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            <TrackLabel
              text="Global Top 50"
              image={require('../../assets/album1.jpg')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}></TrackLabel>
            <TrackLabel
              text="Bollywood Mashup"
              image={require('../../assets/album2.jpg')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}></TrackLabel>
            <TrackLabel
              text="Happy Wednesday"
              image={require('../../assets/album3.jpg')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}></TrackLabel>
          </ScrollView>
        </View>
        <View style={{paddingTop: 40}}>
          <Text style={styles.labelText}>Popular and Trending</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            <TrackLabel
              text="Global Top 50"
              image={require('../../assets/album1.jpg')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}></TrackLabel>
            <TrackLabel
              text="Bollywood Mashup"
              image={require('../../assets/album2.jpg')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}></TrackLabel>
            <TrackLabel
              text="Happy Wednesday"
              image={require('../../assets/album3.jpg')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}></TrackLabel>
          </ScrollView>
        </View>
        <View style={{paddingTop: 40, paddingBottom: 20}}>
          <Text style={styles.labelText}>Hindi New Releases</Text>
          <ScrollView
            horizontal={true}
            overScrollMode="never"
            style={styles.container}
            showsHorizontalScrollIndicator={false}>
            <TrackLabel
              text="Global Top 50"
              image={require('../../assets/album1.jpg')}
              gradient={['rgba(238, 0, 143, 0)', '#D708F9']}></TrackLabel>
            <TrackLabel
              text="Bollywood Mashup"
              image={require('../../assets/album2.jpg')}
              gradient={['rgba(255, 255, 255, 0)', '#00FFA3']}></TrackLabel>
            <TrackLabel
              text="Happy Wednesday"
              image={require('../../assets/album3.jpg')}
              gradient={['rgba(238, 255, 255, 0)', '#0137C7']}></TrackLabel>
          </ScrollView>
        </View>
      </ScrollView>
      <Navbar></Navbar>
    </React.Fragment>
  );
}

export default Home;
