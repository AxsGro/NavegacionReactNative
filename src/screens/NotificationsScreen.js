import { Button, View } from "react-native-web";

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate('Notifications')}
            />
        </View>
    );
}

export default HomeScreen;