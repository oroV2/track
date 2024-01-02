import { useEffect, useState } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { Context as LocationContext } from '../context/LocationContext'

export default (showTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                    callback
                );
            } catch (e) {
                setErr(e);
            }
        }


        if (showTrack) {
            startWatching();
        } else {
            subscriber && subscriber.remove();
            subscriber = null;
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [showTrack, callback])

    return [err];
}