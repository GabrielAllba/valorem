'use client';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase/clientApp';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';

export default function Profile() {
    const auth = getAuth(app);
    const [user, setUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true);
            } else {
            }
        });
    }, []); //

    if (user) {
        return <h1>hello world</h1>;
    } else {
        return <h1>not auth</h1>;
    }
}
