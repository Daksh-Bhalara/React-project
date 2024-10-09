import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

function Update() {
    const [product, setproduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    let apiUpr = `http://localhost:4000/plastic/${id}`
    useEffect(() => {
        fetch(apiUpr)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(product => setproduct(product))
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [id])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    </div>
                    <div class="form-group row ">
                        <label class="col-2"></label>
                        <div class="col-8">
                            <div class="input-group">
                                <div class="input-group-prepend">                        </div>
                                <input id="" name="" placeholder="ID" type="text" required="required" class="form-control"
                                    value={product.id}
                                // onChange={(e) => setproduct({ ...product, id: e.target.value })}
                                />

                            </div>
                        </div>
                    </div>
                    <div class="form-group row p-3">
                        <label class="col-2"></label>
                        <div class="col-8">
                            <div class="input-group">
                                <div class="input-group-prepend">

                                </div>
                                <input id="text1" name="text1" placeholder="NAME" type="text" class="form-control"
                                    value={product.name}
                                    onChange={(e) => setproduct({ ...product, name: e.target.value })} />

                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2"></label>
                        <div class="col-8">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                </div>
                                <input id="text2" name="text2" placeholder="IMAGE" type="text" class="form-control" required="required"
                                    value={product.image}
                                    onChange={(e) => {
                                        setproduct({ ...product, image: e.target.value })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group row p-3">
                        <label class="col-2"></label>
                        <div class="col-8">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                </div>
                                <input id="text" name="text" placeholder="PRICE" type="text" class="form-control" required="required"
                                    value={product.price}
                                    onChange={(e) => {
                                        setproduct({
                                            ...product, price: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-2"></label>
                        <div class="col-8">
                            <textarea id="description" name="description" cols="40" rows="2" class="form-control" required="required"
                                value={product.description}
                                onChange={(e) => {
                                    setproduct({ ...product, description: e.target.value })
                                }}
                            />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-4 col-8 p-3">
                            <button name="submit" class="btn btn-primary"
                                onClick={() => {
                                    fetch(`http://localhost:4000/plastic/update/`+id, {
                                        method: "PATCH",
                                        body: JSON.stringify(product),
                                        headers: {
                                            'Content-Type': 'application/json',
                                        }
                                    })
                                        .then(() => {
                                            navigate("/Plastic")
                                        })
                                }}

                            >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}
export default Update