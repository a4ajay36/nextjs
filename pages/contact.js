import {useState} from 'react';

function Contact(){
    const [msg,setMsg] = useState(false);
    const [type,setType] = useState(false);

    const registerUser = async event => {
        event.preventDefault();

        const data = {
            name:event.target.name.value,
            phone:event.target.phone.value,
            department:event.target.department.value,
        };

        const res  = await fetch('http://localhost/www/laravel7/public/api/post',{
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'},
            method:'POST'
        });
        
        const result = await res.json();
        console.log(result);
        setMsg(result.message);
        setType(result.type);
    }
    return (
        <div className="container">
        
        {msg!=false ? (<div className={`alert ${type=='success' ? 'alert-success' : 'alert-danger'}`}>{msg ? 'Thanks for your details' : ''}</div>) : ''}
        
        

        <form onSubmit={registerUser}>
        <div className="form-group">
            <label>Name :- </label>
            <input type="text" name="name" id="name" required className="form-control"/></div>
            <label>Phone :- </label>
            <input type="text" name="phone" id="phone" required className="form-control"/><br/>
            <label>Department :- </label>
            <input type="text" name="department" id="department" required className="form-control"/><br/>
            <button type="submit" className="btn btn-info">Register</button>
        </form>
        </div>
    );
}

export default Contact;