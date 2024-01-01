import { useEffect, useState } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { Context as LocationContext } from '../context/LocationContext'

export default (showTrack, callback) => {
    const [subscriber, setSubscriber] = useState(null);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            },
                callback
            );
            setSubscriber(sub);
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if (showTrack) {
            startWatching();
        } else {
            subscriber && subscriber.remove();
            setSubscriber(null);
        }

    }, [showTrack])

    return [err];
}