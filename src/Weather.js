import './Weather.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function Weather() {

return <div className="Weather">
        <form>
        <div className="row" >
        <div className="col-9">
        <input
        type="search"
        placeholder="enter a city"
        ClassName="form-control" />
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn-btn-prymay"/>

        </div>
        </div>
        </form>
        </div>


}