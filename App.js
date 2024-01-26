import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Signature from 'react-native-signature-canvas';



const { width, height } = Dimensions.get('window');

const App = () => {
  const [name, setName] = useState('');
  const [noun, setNoun] = useState('');
  const [event, setEvent] = useState('');
  const [page, setPage] = useState(1);
  const [signatureLabel] = useState('Signed:');
   const [namePlaceholder] = useState('Name');
  const [nounPlaceholder] = useState('Noun');
  const [eventPlaceholder] = useState('Event');
  
const MadLibsInstructions = () => {
  return (
  <>
   <Text style={styles.title}>How to play Mad Libs: You put in a name, noun, and an event into the respective 
          fields and when you go to the next page, you'll see the sentence and/or paragraph with your chosen, name, noun and event.</Text>
  </>
  )
}

  const clearFields = () => {
    setName('');
    setNoun('');
    setEvent('');
  };

  const signaturePadProps = {
    webStyle: `
      .m-signature-pad--footer {
        display: none;
      }
      .m-signature-pad--body canvas {
        background-color: #fff;
      }
    `,
  };

  return (
    <View style={styles.container}>
      {page === 1 ? (
        <View style={styles.pageOneContent}>
          <Text style={styles.title}>Assignment 1</Text>
          <Text style={styles.title}>Kobe Smallman</Text>
          <Text><MadLibsInstructions/></Text>
          <TextInput
            style={styles.input}
            placeholder={namePlaceholder}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder={nounPlaceholder}
            value={noun}
            onChangeText={setNoun}
          />
          <TextInput
            style={styles.input}
            placeholder={eventPlaceholder}
            value={event}
            onChangeText={setEvent}
          />
           <TouchableOpacity style={styles.button} onPress={() => setPage(2)}>
            <Text style={styles.buttonText}>Make my hall pass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearFields}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.pageTwoContent}>
          <Text style={styles.rotatedText}>Hall Pass</Text>
          <View style={styles.mainContent}>
            <Text style={styles.madLibsTitle}>Mad Libs</Text>
            <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
            <Text style={styles.story}>
              {name} is too cool for {noun} class. Instead, they will be attending the {event}.
            </Text>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>{signatureLabel}</Text>
              <Signature {...signaturePadProps} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => setPage(1)}>
              <Text style={styles.buttonText}>Back to Main Screen</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  madLibsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4, 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageOneContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  pageTwoContent: {
    flex: 1,
    flexDirection: 'row',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 60, 
    justifyContent: 'center', 
    paddingTop: 20,
    paddingBottom: 20, 
  },
  rotatedText: {
    top: height * 0.1,
    position: 'absolute',
    left: -90, 
    top: '50%', 
    fontSize: 62,
    fontWeight: 'bold',
    color: '#000',
    transform: [{ rotate: '270deg' }],
    zIndex: 1, 
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 30, 
  },
  story: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  signatureBox: {
    width: '80%',
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
  },
  signatureLabel: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: 'black',
    padding: 8,
  },

});

export default App;


