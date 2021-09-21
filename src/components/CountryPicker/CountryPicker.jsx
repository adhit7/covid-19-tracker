import React, {useEffect, useState} from 'react';
import styles from "./Country.Module.css";
import {FormControl, NativeSelect} from "@material-ui/core";
import {fetchCountries} from "../../api";

const CountryPicker = ({ handleCountryChange }) => {

    const[countries, setcountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setcountries(await fetchCountries());
        }

        fetchAPI();
    },[])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option> )}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
