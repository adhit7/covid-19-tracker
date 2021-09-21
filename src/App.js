import React, {Component} from 'react';
import styles from "./App.module.css";
import image from "./image.png";
import { Cards,Chart,CountryPicker } from "./components";
import {fetchData} from "./api";

class App extends Component {
    state = {
        data : {},
        country : '',
    };


    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
        console.log(data);
    }



    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data : fetchedData, country : country});
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            </div>
        );
    }
}

export default App;