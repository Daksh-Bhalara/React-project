import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
    const [product, setproduct] = useState({});
    const [isIdValid, setIsIdValid] = useState(true); // State for ID validation
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!product.id) {
            setIsIdValid(false); // Set ID validity to false
            window.alert("Please enter ID");
            return;
        }

        // Reset ID validity if it's valid
        setIsIdValid(true);

        fetch('http://localhost:4000/plastic/add', {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(() => {
            navigate("/Plastic");
        });
    };

    return (
        <>
            <div className="container form">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="form-group row">
                        <label className="col-2"></label>
                        <div className="col-8">
                            <div className="input-group">
                                <input
                                    id=""
                                    name=""
                                    placeholder="ID"
                                    type="text"
                                    required
                                    className={`form-control ${!isIdValid ? 'is-invalid' : ''}`} // Conditional class
                                    onChange={(e) => {
                                        setproduct({ ...product, id: e.target.value });
                                        setIsIdValid(true); // Reset validity on change
                                    }}
                                />
                                <div className="invalid-feedback">
                                    Please enter ID.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row p-3">
                        <label className="col-2"></label>
                        <div className="col-8">
                            <div className="input-group">
                                <input
                                    id="text1"
                                    name="text1"
                                    placeholder="NAME"
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setproduct({ ...product, name: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2"></label>
                        <div className="col-8">
                            <div className="input-group">
                                <input
                                    id="text2"
                                    name="text2"
                                    placeholder="IMAGE"
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setproduct({ ...product, image: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row p-3">
                        <label className="col-2"></label>
                        <div className="col-8">
                            <div className="input-group">
                                <input
                                    id="text"
                                    name="text"
                                    placeholder="PRICE"
                                    type="text"
                                    className="form-control"
                                    required
                                    onChange={(e) => setproduct({ ...product, price: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-2"></label>
                        <div className="col-8">
                            <textarea
                                id="description"
                                name="description"
                                cols="40"
                                rows="2"
                                className="form-control"
                                required
                                onChange={(e) => setproduct({ ...product, description: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="offset-4 col-8 p-3">
                            <button
                                name="submit"
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add;
