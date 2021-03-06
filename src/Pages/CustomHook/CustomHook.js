import { useEffect, useState } from "react";

export const CustomHook = () => {
    const [products, setProducts] = useState([]);
    const [isReload, setIsreload] = useState(false);

    useEffect(() => {
        fetch('https://ancient-brook-98256.herokuapp.com/inventory-items')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsreload(data)
            });
    }, [isReload])
    return [products, setProducts];
}

