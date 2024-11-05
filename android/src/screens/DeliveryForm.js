import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Checkbox, Text, Divider } from 'react-native-paper';
import { Input } from '../components';

export function DeliveryForm({navigation}) {
  const [client, setClient] = useState('');
  const [s10quantity, sets10quantity] = useState(0);
  const [s10DirectDelivery, sets10DirectDelivery] = useState(false);
  const [s10RegisteredDelivery, sets10RegisteredDelivery] = useState(false);
  const [s500quantity, sets500quantity] = useState(0);
  const [s500DirectDelivery, sets500DirectDelivery] = useState(false);
  const [s500RegisteredDelivery, sets500RegisteredDelivery] = useState(false);
  const [invoice, setInvoice] = useState(0);
  const [request, setRequest] = useState(0);
  const [odometer, setOdometer] = useState(0);
  const [receiver, setReceiver] = useState('');
  const [observation, setObservation] = useState('');
  const [deliveryStartTime, setDeliveryStartTime] = useState('');
  const [deliveryEndTime, setDeliveryEndTime] = useState('');

  const formatTimeInput = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 3) {
      cleaned = `${cleaned.slice(0, 2)}:${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Input 
        label='Nome do Cliente'
        value={client}
        setValue={setClient}
      />

      <View style={styles.twoColumnsContainer}>
        <View style={[styles.productContainer, {borderColor: 'rgba(255, 255, 0, 0.5)'}]}>
          <Input
            label='Quantidade s10'
            value={s10quantity}
            setValue={sets10quantity}
            inputMode='numeric'
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={s10DirectDelivery ? 'checked' : 'unchecked'}
              onPress={() => {sets10DirectDelivery(!s10DirectDelivery)}}
              color='grey'
              uncheckedColor='grey'
            />
            <Text>Entrega Direta</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={s10RegisteredDelivery ? 'checked' : 'unchecked'}
              onPress={() => {sets10RegisteredDelivery(!s10RegisteredDelivery)}}
              color='grey'
              uncheckedColor='grey'
            />
            <Text>Entrega Registrada</Text>
          </View>
        </View>

        <View style={[styles.productContainer, {borderColor: 'rgba(255, 0, 0, 0.5)'}]}>
          <Input
            label='Quantidade s500'
            value={s500quantity}
            setValue={sets500quantity}
            inputMode='numeric'
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={s500DirectDelivery ? 'checked' : 'unchecked'}
              onPress={() => {sets500DirectDelivery(!s500DirectDelivery)}}
              color='grey'
              uncheckedColor='grey'
            />
            <Text>Entrega Direta</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              status={s500RegisteredDelivery ? 'checked' : 'unchecked'}
              onPress={() => {sets500RegisteredDelivery(!s500RegisteredDelivery)}}
              color='grey'
              uncheckedColor='grey'
            />
            <Text>Entrega Registrada</Text>
          </View>
        </View>
      </View>

      <Divider
        style={styles.divider}
        bold={true}
        horizontalInset={true}
      />

      <View style={[styles.twoColumnsContainer, styles.documentsAndTime]}>
        <View style={{width: '50%'}}>
          <Input
            label='Nota Fiscal'
            value={invoice}
            setValue={setInvoice}
            inputMode='numeric'
            maxLength={7}
          />
        </View>
        <View style={{width: '50%'}}>
          <Input
            label='Requisição'
            value={request}
            setValue={setRequest}
            inputMode='numeric'
            maxLength={5}
          />
        </View>
      </View>

      <Divider
        style={styles.divider}
        bold={true}
        horizontalInset={true}
      />

      <View style={[styles.twoColumnsContainer, styles.documentsAndTime]}>
        <View style={{width: '50%'}}>
          <Input
            style={styles.timeInput}
            label="Início hh:mm"
            value={deliveryStartTime}
            setValue={(text) => setDeliveryStartTime(formatTimeInput(text))}
            inputMode="numeric"
            maxLength={5}
          />
        </View>
        <View style={{width: '50%'}}>
          <Input
            style={styles.timeInput}
            label="Fim hh:mm"
            value={deliveryEndTime}
            setValue={(text) => setDeliveryEndTime(formatTimeInput(text))}
            inputMode="numeric"
            maxLength={5}
          />
        </View>
      </View>

      <Divider
        style={styles.divider}
        bold={true}
        horizontalInset={true}
      />

      <Input 
        label='Odômetro (Km)'
        value={odometer}
        setValue={setOdometer}
        inputMode='numeric'
      />

      <Input 
        label='Nome do Recebedor'
        value={receiver}
        setValue={setReceiver}
      />
      
      <Input
        label='Observação'
        value={observation}
        setValue={setObservation}
        multiline={true}
      />

      <Divider
        style={styles.divider}
        bold={true}
        horizontalInset={true}
      />

      <View style={styles.mapContainer}>
        <Text>Área da Geolocalização</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    height: '100%',
  },
  productContainer: {
    width: '48%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingBottom: 5,
    marginBottom: 5,
  },
  twoColumnsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  documentsAndTime: {
    paddingBottom: 5,
    // marginTop: 10,
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: 'gray',
  },
  timeInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
    textAlign: 'center'
  },
  mapContainer: {
    height: 200,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 255, 0, 0.2)',
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  divider: {
    marginTop: 10,
  }
});
