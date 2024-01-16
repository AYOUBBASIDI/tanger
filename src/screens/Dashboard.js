import React from 'react';
import { FlatList, View, Text, StyleSheet, Image, TouchableOpacity, Linking, Icon, TouchableHighlight  } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button';
import CustomHeader from './CustomHeader';

const workersData = [
  {
    id: '1',
    name: 'منير العكيوي',
    occupation: 'بناء',
    description: 'الخدمات التي أقدمها: الجدران والأرضيات / الأسقف الزائفة / البناء',
    imageUri : 'https://environment.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2023-02/NA1442_shutterstock_355734689.jpg?itok=4nZas8Br',
    phone : '+212653943851'
  },
  {
    id: '2',
    name: 'ياسمين الفاسي',
    occupation: 'تصميم داخلي',
    description: 'خبيرة في تصميم وتنفيذ الديكور الداخلي للمنازل والمكاتب.',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2eU4-6qZT4MOAvoQ_ywZtigJYbJDzvQhgw&usqp=CAU',
    phone: '+212123456789'
},
{
  id: '3',
  name: 'أحمد بن براهيم',
  occupation: 'سباك',
  description: 'خبير في أعمال السباكة، بما في ذلك إصلاح الأنابيب والتجهيزات.',
  imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreozF8Mmfu9B02zdYNk2oI2ft6VAPPmkjIwU_cVRbKyIBdeKt-2Oa4j4JayADFpzIls8&usqp=CAU',
  phone: '+212987654321'
},
{
  id: '5',
  name: 'عمر القادري',
  occupation: 'نجار',
  description: 'نجار مؤهل متخصص في صناعة الأثاث والنجارة والإصلاحات المخصصة.',
  imageUri: 'https://c8.alamy.com/compfr/2aa0md4/fes-maroc-le-9-novembre-2019-l-atelier-de-charpentier-dans-la-medina-2aa0md4.jpg',
  phone: '+212554433221'
},
{
  id: '4',
  name: 'نادية المغربي',
  occupation: 'الكهرباء',
  description: 'كهربائية متخصصة في تركيبات الكهرباء وصيانتها للمنازل والشركات.',
  imageUri: 'https://mcgrathelectricaldata.com.au/wp-content/uploads/2022/01/Electrician-Inspecting-An-Electrical-Cabinet.jpg',
  phone: '+212112233445'
}
];

const WorkerCard = ({ name, occupation, description, imageUri, phone }) => {
  const openWhatsApp = () => {
    const whatsappNumber = phone;
    Linking.openURL(`whatsapp://send?phone=${whatsappNumber}`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUri }} style={styles.workerImage} />
      <Text style={styles.name}>{occupation}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.whatsappButton} onPress={openWhatsApp}>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={styles.whatsappButtonText}>WhatsApp</Text>
    <Image
      source={require('../assets/whatsapp.png')}
      style={styles.whatsappIcon}
    />
  </View>
</TouchableOpacity>

    </View>
  );
};




const Dashboard = ({ navigation }) => {
  return (
    <Background>
      <CustomHeader/>
      <FlatList
        data={workersData}
        renderItem={({ item }) => <WorkerCard {...item} />}
        keyExtractor={(item) => item.id}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 16,
    borderRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  workerImage: {
    width: 250,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  occupation: {
    fontSize: 16,
    color: '#888888',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
  },
  whatsappButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10, // Adjust the margin to your preference
    backgroundColor: '#25D366', // WhatsApp green color
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  whatsappButtonText: {
    color: '#ffffff', // White text color
    fontSize: 16,
    marginLeft: 10, // Adjust the margin to your preference
  },
  whatsappIcon: {
    width: 30,
    height: 30,
  },
});

export default Dashboard;
