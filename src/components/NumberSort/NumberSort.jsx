import React, { useState } from "react";
import styles from "./NumberSort.module.css";

export default function NumberSort() {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(9);
    const [numbersSorted, setNumbersSorted] = useState([]);
    const [numberSort, setNumberSort] = useState(null);

    const handleMinChange = (e) => {
        setMin(parseInt(e.target.value));
    }

    const handleMaxChange = (e) => {
        setMax(parseInt(e.target.value));
    }

    const sort = () => {
        if (numbersSorted.length < 9) {
            const newNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            setNumberSort(newNumber);
            setNumbersSorted([...numbersSorted, newNumber]);
        } else {
            return;
        }
    }

    return (
        <main className={styles.numberSortContainer}>
            <header>
                Bingo Online
            </header>

            <div>
                <label htmlFor="min">Mínimo:</label>
                <input type="number" id="min" value={min} onChange={handleMinChange} />
            </div>
            <div>
                <label htmlFor="max">Máximo:</label>
                <input type="number" id="max" value={max} onChange={handleMaxChange} />
            </div>

            <button className={styles.button} onClick={sort}>Sortear</button>

            {numberSort && <p className={styles.number}>Número sorteado: {numberSort}</p>}

            {numbersSorted.length > 0 && (
                <div className={styles.sortedNumbers}>
                    <p className={styles.sortedNumbersTitle}>Números sorteados até agora:</p>
                    <ul>
                        {numbersSorted.map((num, index) => (
                            <li className={styles.sortedNumberItem} key={index}>{num}</li>
                        ))}
                    </ul>
                </div>
            )}
        </main>
    );
}
