import { useState } from 'react';
import '../Styles/RegPage.css';
import axios from 'axios';


const RegPage = () => {

    //useState to manage the form data;
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    //function to handle form's values;
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    //function to handle post request to the route /api/token;
    const handleSubmit = async (event) => {
        event.preventDefault();

        //post request;

        try {
            await axios.post("/api/tokens", formData);
            // response handling will be added in next step
        } catch (error) {
            console.error("Error creating token:", error);
        }
    }
    return (
        <div className="regpage-wrapper">
            <div className="form-container">
                <h2 className="form-title">Enter Patient Details</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Patient's Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit" className="btn">
                        Generate Token
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegPage;