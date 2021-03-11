import React, { useState } from 'react';

const Form = ({ getSolution }) => {
    const initialState = {
        body: '',
        ngram: '',
        case_sensitive: true,
        length: '',
    };
    const [state, setState] = useState(initialState);

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const { body } = state;
        if (body) {
            try {
                getSolution(state);
                setState(initialState);
            } catch (err) {
                console.log(err);
            }
        } else {
            alert('Please include a body...');
        }
    };
    const { body, ngram, length } = state;
    return (
        <div className="form-fields">
            <h2>Insert new ngram data...</h2>
            <form className="ngram-form" onSubmit={handleSubmit}>
                <label htmlFor="body">Body</label>
                <input
                    type="text"
                    name="body"
                    placeholder=""
                    value={body}
                    onChange={handleChange}
                ></input>
                <label htmlFor="ngram">ngram</label>
                <input
                    type="number"
                    min="1"
                    name="ngram"
                    placeholder=""
                    value={ngram}
                    onChange={handleChange}
                ></input>
                <label htmlFor="case_sensitive">Case sensitive: Yes</label>
                <input
                    type="radio"
                    name="case_sensitive"
                    placeholder=""
                    value={true}
                    onChange={handleChange}
                ></input>
                <label htmlFor="case_sensitive">No</label>
                <input
                    type="radio"
                    name="case_sensitive"
                    placeholder=""
                    value={false}
                    onChange={handleChange}
                ></input>
                <label htmlFor="length">Length</label>
                <input
                    type="number"
                    min="1"
                    name="length"
                    placeholder=""
                    value={length}
                    onChange={handleChange}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
