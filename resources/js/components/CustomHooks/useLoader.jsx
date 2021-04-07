import React, { useState } from 'react'
import Loding from '../ReuseableComp/Loding';

const useLoader = () => {
    const [loading, setLoading] = useState(false);
    return [
        loading ? <Loding /> : null,
        () => setLoading(true), //show loader
        () => setLoading(false) //Hide loader
    ]
}

export default useLoader
