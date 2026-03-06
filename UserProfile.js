import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchUser } from './apiService';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then((data) => setUser(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <ActivityIndicator testID="loading" />;
  if (!user) return <Text testID="error">User not found</Text>;

  return (
    <View style={styles.container}>
      <Text testID="username">{user.name}</Text>
      <Text testID="email">{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default UserProfile;