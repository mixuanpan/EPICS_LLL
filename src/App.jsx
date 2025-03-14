import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 39.7684,
  lng: -86.1581
};

const App = () => {
  const [address, setAddress] = useState('');
  const [radius, setRadius] = useState(5);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const patients = [
    { id: 1, name: 'Hot Box Pizza', lat: 39.7684, lng: -86.1581, phone: '(1317) 656-6000', email: 'hotbox@pizza.com', contact: 'assist, provide', zip: '46204' },
    { id: 2, name: 'Adam Smith', lat: -39.111, lng: 90.111, phone: '(1111) 111-1111', email: 'aaa@aaa.com', contact: 'wash, clean', zip: '46204' },
    { id: 3, name: 'Nick Perry', lat: 120.22, lng: -300.47, phone: '(51) 356-7789', email: 'dancerman19@hotmail.com', contact: '', zip: '46204' },
    { id: 4, name: 'Bennett Popp', lat: 39.817081, lng: -86.176277, phone: '', email: 'dabonem@icloud.com', contact: '', zip: '46204' },
    { id: 5, name: 'Liam Carpenter', lat: 288, lng: 299, phone: '(924) 765-8135', email: 'cooldude@purdue.edu', contact: 'reading', zip: '81701' },
    { id: 6, name: 'Bob Evans', lat: 234.99, lng: -234.99, phone: '283-222-5533', email: 'Odysseushome@gmail.com', contact: 'Painting a Fence', zip: '46077' },
    { id: 7, name: 'Jake Blackman', lat: 37.427107, lng: -77.515546, phone: '(471)-880-3736', email: 'Jblackman@yahoo.com', contact: 'yard work', zip: '80771' },
    { id: 8, name: 'Sam Pollock', lat: -45.241, lng: 85.492, phone: '(317)-284-2810', email: 'sfoenme@gmail.com', contact: 'Clean, guide', zip: '46225' },
    { id: 9, name: 'Alan Smith', lat: 39.77261, lng: -86.13504, phone: '364-589-9745', email: 'smithalan@purdue.edu', contact: 'assist, clean', zip: '46201' },
    { id: 10, name: 'Jake Paul', lat: 39.773463, lng: -86.136243, phone: '597-846-5935', email: 'slfji@purdue.edu', contact: 'assist, clean', zip: '46202' },
    { id: 11, name: 'Jordan Georgia', lat: 39.750437, lng: -86.263017, phone: '(208)568-9527', email: 'xiveyaj290@fundapk.com', contact: 'clean', zip: '46241' }
  ];

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <div className="flex">
      {/* Left side - Input and Map */}
      <div className="w-2/3 p-4">
        <input
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          placeholder="Radius (miles)"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          className="border p-2 w-full mt-2"
        />

        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {patients.map((patient) => (
              <Marker
                key={patient.id}
                position={{ lat: patient.lat, lng: patient.lng }}
                onClick={() => handleSelectPatient(patient)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* Right side - Zip codes and Patient Info */}
      <div className="w-1/3 p-4 border-l">
        <h2 className="font-bold mb-2">Nearby Zip Codes</h2>
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`p-2 cursor-pointer ${selectedPatient?.id === patient.id ? 'font-bold' : ''}`}
            onClick={() => handleSelectPatient(patient)}
          >
            {patient.zip}
          </div>
        ))}

        {selectedPatient && (
          <div className="mt-4">
            <h2 className="font-bold">Patient Info</h2>
            <p>Name: {selectedPatient.name}</p>
            <p>Phone: {selectedPatient.phone}</p>
            <p>Email: {selectedPatient.email}</p>
            <p>Contact: {selectedPatient.contact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
